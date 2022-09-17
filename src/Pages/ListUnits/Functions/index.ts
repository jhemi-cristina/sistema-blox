export function filterModality(item: any, filterSelected: string) {
  return item?.modality?.includes(filterSelected);
}

export function filterTitleAndId(item: any, search: string) {
  return item?.title?.includes(search) || item?.id === Number(search);
}
