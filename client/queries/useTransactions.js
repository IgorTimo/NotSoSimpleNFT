import { useQuery, useQueryClient } from 'react-query'
import { etherscanService } from '../services/etherscanService'

const QUERY_KEY = 'TRANSACTIONS'

export const useTransactions = () => {
  const queryClient = useQueryClient()
  const result = useQuery(
    [QUERY_KEY],
    async () => {
      const res = await etherscanService.getHistory()
      return res
    },
    {
      enabled: !queryClient.getQueryData(QUERY_KEY),
    },
  )

  return result
}
