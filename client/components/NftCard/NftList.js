import { loadGetInitialProps } from 'next/dist/shared/lib/utils'
import NftCard from './NftCard'

const NftList = () => {
  //     const res = useAllTokens().data
  //     // console.log("", res)
  //   const nftList = res?.map( (el) => {
  //             console.log("", NftList)
  //         return <NFTCard key={el.description} img={el.image} title={el.name} desc={el.description}/>
  //     }
  //     )

  return (
    <div className="container mx-auto">
      <div className="grid grid-cols-4 gap-6">
        <NftCard />
      </div>
    </div>
  )
}

export default NftList
