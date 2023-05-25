export const getUniqueId = <T extends {uuid: string}>(rows: T[]) => {
  const lastItem = rows[rows.length-1];
  if (lastItem) return `${parseInt(lastItem.uuid) + 1}`;
  return "0";
}
