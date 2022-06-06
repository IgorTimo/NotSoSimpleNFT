import { useQuery, useQueryClient } from 'react-query'
import { yourCollectibleService } from '../services'

const QUERY_KEY = 'ALL_TOKENS'

export const useAllTokens = () => {
  const queryClient = useQueryClient()
  const result = useQuery(
    [QUERY_KEY],
    () => yourCollectibleService.getAllTokens(1, 10),
    {
      enabled: !queryClient.getQueryData(QUERY_KEY),
      select: (data) => JSON.parse(data),
    },
  )

  return result
}
