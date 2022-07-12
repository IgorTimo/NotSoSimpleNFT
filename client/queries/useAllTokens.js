import { useQuery, useQueryClient } from 'react-query'
import { yourCollectibleService } from '../services'

const ALL_TOKENS = 'ALL_TOKENS'
const ALL_TOKENS_URLS = 'ALL_TOKENS_URLS'

export const useAllTokens = () => {
  const queryClient = useQueryClient()
  const { data: urls, isSuccess } = useQuery(
    [ALL_TOKENS_URLS],
    () => yourCollectibleService.getAllTokens(1, 10),
    {
      enabled: !queryClient.getQueryData(ALL_TOKENS_URLS),
      select: (data) => JSON.parse(data).tokens.map((token) => token[1]),
    },
  )

  const result = useQuery(
    [ALL_TOKENS],
    () =>
      Promise.all(
        urls.map((url) => fetch(url).then((response) => response.json())),
      ),
    { enabled: isSuccess && !!urls?.length },
  )

  return result
}
