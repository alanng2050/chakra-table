import { Table as ChakraTable, TableContainer } from '@chakra-ui/react'
import { TableHead } from './TableHead'
import { TableBody } from './TableBody'
import type { TableProps } from './types'

export function Table(props: TableProps) {
  return (
    <TableContainer {...props.containerProps}>
      <ChakraTable size="md" {...props.tableProps}>
        <TableHead {...props} />
        <TableBody {...props} />
      </ChakraTable>
      {props.children}
    </TableContainer>
  )
}
