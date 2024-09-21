import { Tbody, Td, Tr } from '@chakra-ui/react'
import type { TableProps } from './types'

export const TableBody = ({
  data,
  columns,
  selectedRows,
  onSelectRow,
  multiSelect,
  hoverBg,
}: TableProps) => {
  const hoverColor = hoverBg || 'rgba(0,0,0,0.05)'

  return (
    <Tbody>
      {data?.map((item) => {
        const isSelected = selectedRows?.includes(item.id)
        return (
          <Tr
            onClick={multiSelect ? () => onSelectRow?.(item.id) : undefined}
            key={item.id}
            sx={{
              cursor: 'pointer',
              bg: isSelected ? hoverColor : 'none',
              _hover: {
                bg: hoverColor,
              },
            }}
          >
            {columns.map((col) => {
              if (col.renderContent) {
                return (
                  <Td key={item.id + col.id}>
                    {col.renderContent(item, isSelected)}
                  </Td>
                )
              }

              return <Td key={item.id + col.id}>{item[col.id] as any}</Td>
            })}
          </Tr>
        )
      })}
    </Tbody>
  )
}
