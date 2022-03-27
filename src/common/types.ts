interface ItemListType {
    id: number,
    login?: string,
    name?: string,
    avatar_url?: string
    html_url?: string
}

interface ItemListProps {
    userItem: ItemListType,
    page: number,
    index: number
}

interface ListProps {
    list: ItemListType[],
    pageActive: number
}

interface PaginationProps {
    pageActive: number,
    pagesTotal: number,
    setPage: (page: number) => void
}

export type { ItemListProps, ListProps, PaginationProps};