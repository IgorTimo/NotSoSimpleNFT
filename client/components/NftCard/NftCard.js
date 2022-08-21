import React from 'react'

import { useAllTokens } from 'queries'
import Link from 'next/link'
import ButtonModal from '@components/buttons/buttonModal'

const NFTCard = ({ img, title, desc }) => {
  console.log(NFTCard)
  return (
    <div className="flex justify-center">
      <div className="rounded-lg shadow-lg bg-white max-w-sm">
        <img className="rounded-t-lg" src={img} alt="" />

        <div className="p-6">
          <h1 className="text-gray-900 text-xl font-bold mb-2"> {title} </h1>
          <p className="text-gray-700 text-base mb-4"> {desc} </p>
          <ButtonModal />
        </div>
      </div>
    </div>
  )
}

export default NFTCard
