import { useAllTokens } from 'queries'
import NftItem from './NftItem'

const NFTCardData = () => {
  const res = useAllTokens().data
  //   console.log(`res`, res)

  return res?.map((el) => {
    return (res = (
      <NftItem
        key={el.description}
        img={el.image}
        title={el.name}
        desc={el.description}
      />
    ))
  })
}

export default NFTCardData
