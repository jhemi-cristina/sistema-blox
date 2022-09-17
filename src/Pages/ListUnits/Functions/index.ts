export function filterModality(item: any, filterSelected: string) {
  return (
    item?.modality?.includes(filterSelected) ||
    item?.cached_blox?.status.includes(filterSelected)
  );
}

export function filterTitleAndId(item: any, search: string) {
  return item?.title?.includes(search) || item?.id === Number(search);
}
