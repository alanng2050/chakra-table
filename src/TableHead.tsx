import { Box, HStack, Text, Th, Thead, Tr } from '@chakra-ui/react'
import { TableProps } from './types'
import { UpIcon } from './UpIcon'

export const TableHead = ({
  sortBy,
  sortOrder,
  onSort,
  columns,
}: TableProps) => {
  return (
    <Thead>
      <Tr>
        {/* {multiSelect && (
          <Th>
            <Checkbox />
          </Th>
        )} */}
        {columns.map((col) => {
          const isDesc = col.id === sortBy && sortOrder === 'desc'

          if (col.renderHead)
            return <Th key={col.id}>{col.renderHead(col.name)}</Th>

          if (col.sort) {
            return (
              <Th key={col.id} onClick={() => onSort?.(col.id)}>
                <HStack
                  spacing={0}
                  sx={{
                    cursor: 'pointer',
                    _hover: {
                      '& svg': {
                        fill: 'black',
                      },
                    },
                  }}
                >
                  <Box
                    as={UpIcon}
                    sx={{
                      height: '1rem',
                      width: '1rem',
                      mr: 1,
                      fill: sortBy === col.id ? 'black' : 'blackAlpha.300',
                      transform: isDesc ? 'rotate(-180deg)' : 'rotate(0)',
                      transition: 'transform 250ms',
                    }}
                  />
                  <Text>{col.name}</Text>
                </HStack>
              </Th>
            )
          }
          return <Th key={col.id}>{col.name}</Th>
        })}
      </Tr>
    </Thead>
  )
}
