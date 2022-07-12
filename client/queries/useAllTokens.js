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
      select:
        //   async (data) => {
        //   const tokenData = JSON.parse(data)
        //   // console.log('tokenData: ', tokenData)
        //   const token = tokenData.tokens[0][1]
        //   // console.log('token: ', token)
        //   const res = await fetch(token).then((response) => response.json())
        //   console.log('res: ', res)
        // },
        async (data) => {
          const tokenData = JSON.parse(data)
          // console.log('data: ', tokenData.tokens)
          const tokenURLs = tokenData?.tokens.map((arr) => arr[1])
          // console.log('urls: ', tokenURLs)
          const res = await Promise.all(
            tokenURLs.map((url) =>
              fetch(url).then((response) => response.json()),
            ),
          )
          // console.log(res)
          return res
        },
    },
  )

  return result
}
