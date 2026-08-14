export function buildMultilangSearchWhere(search: string, fieldPrefix: string) {
  if (!search) return undefined;
  return {
    OR: [
      { [`${fieldPrefix}_latin`]: { contains: search, mode: 'insensitive' } },
      { [`${fieldPrefix}_cyril`]: { contains: search, mode: 'insensitive' } },
      { [`${fieldPrefix}_ru`]: { contains: search, mode: 'insensitive' } },
    ],
  };
}
