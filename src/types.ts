import {
  TableContainerProps,
  TableProps as ChakraTableProps,
} from '@chakra-ui/react'

export type Column<T = string> = {
  id: T
  name: string
  renderHead?: (name: string) => React.ReactNode
  renderContent?: (val: any, isSelected?: boolean) => React.ReactNode
  sort?: boolean
  sortOrder?: 'desc' | 'asc'
  onSort?: () => void
}

type ID = string | number

export type TableProps = {
  columns: Column[]
  onSort?: (key: string) => void
  sortBy?: string
  sortOrder?: 'desc' | 'asc'
  data?: Array<{ id: ID; [key: string]: unknown }>
  selectedRows?: ID[]
  onSelectRow?: (id: ID) => void
  multiSelect?: boolean
  children?: React.ReactNode
  containerProps?: TableContainerProps
  tableProps?: ChakraTableProps
  hoverBg?: string
}

export type PaginationType = {
  page: number
  perPage: number
  more?: boolean
  onChangePerPage?: (val: number) => void
  onChangePage?: (val: number) => void
}
