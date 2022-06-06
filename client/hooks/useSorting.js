import { useState, useEffect } from 'react'

export const useSorting = ({
  initialSortDirection = true,
  initialSortAttribute,
  data,
}) => {
  const [sortedData, setSortedData] = useState(data)
  const [sortOptions, setSortOptions] = useState({
    sortDirection: initialSortDirection,
    sortAttribute: initialSortAttribute,
  })

  const handleSortOptions = ({ sortDirection, sortAttribute }) => {
    setSortOptions((state) => ({ ...state, sortDirection, sortAttribute }))
  }

  useEffect(() => {
    const { sortDirection, sortAttribute } = sortOptions

    const newData = [...data].sort((a, b) => {
      if (a[sortAttribute] > b[sortAttribute]) {
        return sortDirection ? 1 : -1
      }
      if (a[sortAttribute] < b[sortAttribute]) {
        return sortDirection ? -1 : 1
      }
      return 0
    })

    setSortedData(newData)
  }, [sortOptions, data])

  return { sortedData, handleSortOptions }
}
