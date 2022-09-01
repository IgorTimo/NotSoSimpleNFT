import NFTCard from './NftCard'
import { useAllTokens } from 'queries'
import { useState } from 'react'
import { Modal } from '@components/Modal/Modal'

const NftList = (props) => {
  const res = useAllTokens().data

  console.log('', res)
  const nftList = res?.map((el) => {
    return (
      <>
        <NFTCard
          key={el.description}
          img={el.image}
          title={el.name}
          desc={el.description}
        />
      </>
    )
  })

  return (
    <div className="container mx-auto">
      <div className="grid grid-cols-4 gap-6">{nftList}</div>
    </div>
  )
}

export default NftList
