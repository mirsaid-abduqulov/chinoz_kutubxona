import { PrismaClient } from './src/core/database/generated';

async function checkSuperAdmin() {
  const prisma = new PrismaClient();
  const superAdmins = await prisma.user.findMany({
    where: { role: 'SUPER_ADMIN' }
  });
  console.log('Super Admins in DB:', superAdmins);
  await prisma.$disconnect();
}

checkSuperAdmin();
