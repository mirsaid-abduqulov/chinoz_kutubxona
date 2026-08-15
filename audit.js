const fs = require('fs');
const path = require('path');

const controllers = [
  'src/announcements/announcements.controller.ts',
  'src/auth/auth.controller.ts',
  'src/authors/authors.controller.ts',
  'src/banners/banners.controller.ts',
  'src/books/books.controller.ts',
  'src/contact/contact-info.controller.ts',
  'src/contact/contact-messages.controller.ts',
  'src/departments/departments.controller.ts',
  'src/documents/documents.controller.ts',
  'src/events/events.controller.ts',
  'src/genres/genres.controller.ts',
  'src/media/media-albums.controller.ts',
  'src/news/news.controller.ts',
  'src/online-requests/online-requests.controller.ts',
  'src/pages/pages.controller.ts',
  'src/useful-links/useful-links.controller.ts',
  'src/users/users.controller.ts'
];

const apiTagsMap = {
  'users.controller.ts': 'Users (Foydalanuvchilar)',
  'genres.controller.ts': 'Genres (Janrlar)',
  'authors.controller.ts': 'Authors (Mualliflar)',
  'books.controller.ts': 'Books (Kitoblar)',
  'departments.controller.ts': "Departments (Bo'limlar)",
  'pages.controller.ts': 'Pages (Sahifalar)',
  'banners.controller.ts': 'Banners (Bannerlar)',
  'announcements.controller.ts': "Announcements (E'lonlar)",
  'useful-links.controller.ts': 'Useful Links (Foydali havolalar)',
  'news.controller.ts': 'News (Yangiliklar)',
  'events.controller.ts': 'Events (Tadbirlar)',
  'documents.controller.ts': 'Documents (Hujjatlar)',
  'media-albums.controller.ts': 'Media Albums (Media albomlari)',
  'online-requests.controller.ts': 'Online Requests (Onlayn murojaatlar)',
  'contact-info.controller.ts': "Contact Info (Aloqa ma'lumotlari)",
  'contact-messages.controller.ts': 'Contact Messages (Aloqa xabarlari)',
  'auth.controller.ts': 'Auth (Avtorizatsiya)'
};

let report = "GUARD TUZATISHLARI:\n";
let apiTagsReport = "\n@ApiTags TUZATISHLARI:\n";
let importsToAdd = [];

controllers.forEach(file => {
  if (!fs.existsSync(file)) return;
  
  let content = fs.readFileSync(file, 'utf8');
  const basename = path.basename(file);
  
  // 1. Check ApiTags
  const expectedTag = apiTagsMap[basename] || basename.replace('.controller.ts', '');
  const tagsRegex = /@ApiTags\(['"](.*?)['"]\)/;
  const match = content.match(tagsRegex);
  
  if (match) {
    if (match[1] !== expectedTag) {
      apiTagsReport += `- ${basename} — '${match[1]}' → '${expectedTag}'\n`;
      content = content.replace(tagsRegex, `@ApiTags('${expectedTag}')`);
    } else {
      apiTagsReport += `- ${basename} — o'zgarishsiz, allaqachon to'g'ri edi\n`;
    }
  } else {
    apiTagsReport += `- ${basename} — yo'q edi → '${expectedTag}' qo'shildi\n`;
    content = content.replace(/@Controller/, `@ApiTags('${expectedTag}')\n@Controller`);
    importsToAdd.push({file, import: 'ApiTags'});
  }

  let lines = content.split('\n');
  
  let currentDecorators = [];
  let startIdx = -1;
  let hasGlobalGuard = lines.slice(0, 30).some(l => l.includes('@UseGuards') && l.includes('RolesGuard'));
  let modified = false;

  for (let i = 0; i < lines.length; i++) {
    const line = lines[i];
    
    if (line.trim().startsWith('@')) {
      if (startIdx === -1) startIdx = i;
      currentDecorators.push(line.trim());
    } 
    else if (startIdx !== -1 && (line.includes('(') || line.includes('async'))) {
      const isEndpoint = currentDecorators.some(d => d.startsWith('@Post') || d.startsWith('@Patch') || d.startsWith('@Put') || d.startsWith('@Delete'));
      
      if (isEndpoint) {
        const endpointDec = currentDecorators.find(d => d.startsWith('@Post') || d.startsWith('@Patch') || d.startsWith('@Put') || d.startsWith('@Delete'));
        let route = '';
        const matchRoute = endpointDec.match(/@(Post|Patch|Put|Delete)\(['"](.*?)['"]\)/);
        if (matchRoute) route = matchRoute[2];
        
        const methodType = endpointDec.startsWith('@Post') ? 'POST' : endpointDec.startsWith('@Patch') ? 'PATCH' : endpointDec.startsWith('@Put') ? 'PUT' : 'DELETE';
        
        const isOnlineRequestCreate = basename === 'online-requests.controller.ts' && methodType === 'POST' && route === '';
        const isContactMessageCreate = basename === 'contact-messages.controller.ts' && methodType === 'POST' && route === '';
        const isAuthLogin = basename === 'auth.controller.ts' && methodType === 'POST' && route === 'login';
        const isAuthRefresh = basename === 'auth.controller.ts' && methodType === 'POST' && route === 'refresh';
        
        const isExcluded = isOnlineRequestCreate || isContactMessageCreate || isAuthLogin || isAuthRefresh;
        
        const hasMethodGuard = currentDecorators.some(d => d.startsWith('@UseGuards') && d.includes('RolesGuard'));
        const hasRoles = currentDecorators.some(d => d.startsWith('@Roles'));
        const hasBearer = currentDecorators.some(d => d.startsWith('@ApiBearerAuth'));
        
        if (isExcluded) {
           if (hasMethodGuard || hasRoles || hasBearer) {
             for(let j=startIdx; j<i; j++) {
               if (lines[j].includes('@UseGuards') || lines[j].includes('@Roles') || lines[j].includes('@ApiBearerAuth')) {
                 lines[j] = ''; 
               }
             }
             report += `- ${basename} — ${methodType} /${route} — guard olib tashlandi (ataylab public)\n`;
             modified = true;
           } else {
             report += `- ${basename} — ${methodType} /${route} — o'zgarishsiz qoldi (ataylab public)\n`;
           }
        } else {
           if (!hasGlobalGuard && !hasMethodGuard) {
             // Let's check for TODOs from previous changes
             const prevLine = startIdx > 0 ? lines[startIdx - 1] : '';
             if (prevLine.includes('TODO: RolesGuard')) {
                lines[startIdx - 1] = ''; // remove TODO
             }
             
             lines.splice(startIdx, 0, '  @ApiBearerAuth()', '  @UseGuards(RolesGuard)', '  @Roles(UserRole.ADMIN, UserRole.SUPER_ADMIN)');
             i += 3;
             report += `- ${basename} — ${methodType} /${route} — guard qo'shildi\n`;
             modified = true;
             
             // Check if we need imports
             if (!lines.slice(0, 20).some(l => l.includes('RolesGuard'))) {
                 lines.splice(0, 0, `import { RolesGuard } from '../common/guards/roles.guard';`, `import { Roles } from '../common/decorators/roles-auth-decorator';`, `import { UserRole } from '../core/database/generated';`);
                 i += 3;
             }
             if (!lines.slice(0, 20).some(l => l.includes('ApiBearerAuth'))) {
                const swaggerLine = lines.findIndex(l => l.includes('@nestjs/swagger'));
                if (swaggerLine !== -1) {
                   lines[swaggerLine] = lines[swaggerLine].replace('{', '{ ApiBearerAuth,');
                }
             }
           } else {
             report += `- ${basename} — ${methodType} /${route} — o'zgarishsiz qoldi, allaqachon to'g'ri\n`;
           }
        }
      }
      
      currentDecorators = [];
      startIdx = -1;
    } else if (line.trim() !== '') {
      currentDecorators = [];
      startIdx = -1;
    }
  }
  
  if (modified || content !== lines.join('\n')) {
     fs.writeFileSync(file, lines.join('\n').replace(/\n\n+/g, '\n\n'));
  }
});

fs.writeFileSync('audit_report.txt', report + apiTagsReport);
console.log("Done");
