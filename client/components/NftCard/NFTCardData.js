import { useAllTokens } from 'queries'
import NftCard from './NftCard'
import NftItem from './NftItem'

const NftCardData = (props) => {
  const res = useAllTokens().data
  //   console.log(`res`, res)

  return res?.map((el) => {
    const test = res?.map((el) => (
      <NftCardData
        key={el.description}
        img={el.image}
        title={el.name}
        desc={el.description}
      />
    ))
  })
}

export default NftCardData
