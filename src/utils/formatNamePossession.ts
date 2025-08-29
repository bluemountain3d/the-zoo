export const formatNamePossession = (name: string) => {
  const lastChar = name.slice(-1).toLowerCase();
  const pluralName = lastChar.match(/[sx]/) ? name : `${name}s`;
  return pluralName;
};