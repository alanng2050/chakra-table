import { HStack, IconButton, Select, Text } from '@chakra-ui/react'
import { PaginationType } from './types'
import { BackIcon } from './BackIcon'
import { NextIcon } from './NextIcon'

export const Pagination = ({
  page,
  perPage,
  more,
  onChangePage,
  onChangePerPage,
}: PaginationType) => {
  const from = page * perPage + 1
  const to = page * perPage + perPage
  const total = (page + 1) * perPage
  return (
    <HStack sx={{ justifyContent: 'flex-end', py: 4 }}>
      <HStack>
        <Text sx={{ flexShrink: 0, fontSize: 'sm' }}>Rows per page:</Text>
        <Select
          value={perPage}
          onChange={(e) => onChangePerPage?.(+e.target.value)}
          size="sm"
          sx={{ borderRadius: 'md' }}
        >
          <option value={5}>5</option>
          <option value={10}>10</option>
          <option value={20}>20</option>
          <option value={50}>50</option>
          <option value={100}>100</option>
        </Select>
      </HStack>
      <Text sx={{ ml: 4, fontSize: 'sm' }}>
        {from} - {to} of {total}
      </Text>
      <HStack
        spacing={0}
        sx={{
          '& svg': {
            width: '18px',
            height: '18px',
            fill: 'gray',
          },
        }}
      >
        <IconButton
          isDisabled={page <= 0}
          onClick={() => onChangePage?.(page - 1)}
          variant="ghost"
          size="sm"
          aria-label="arrow back icon"
          icon={<BackIcon />}
        />
        <IconButton
          onClick={() => onChangePage?.(page + 1)}
          isDisabled={!more}
          variant="ghost"
          size="sm"
          aria-label="arrow back icon"
          icon={<NextIcon />}
        />
      </HStack>
    </HStack>
  )
}
