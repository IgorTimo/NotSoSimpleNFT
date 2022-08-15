import React from 'react'
// import {useNavigate} from 'react-router-dom';

import Link from 'next/link'
import NftCardData from './NftCardData'

const NftCard = (img, desc, title) => {
  // console.log('props', props)

  console.log('NFTCard', NftCard)

  return (
    <div className="flex justify-center">
      <NftCardData props={NftCardData}>
        <div className="rounded-lg shadow-lg bg-white max-w-sm">
          <img className="rounded-t-lg" src={img} alt="" />
          <div className="p-6">
            <h1 className="text-gray-900 text-xl font-bold mb-2">{title}</h1>
            <p className="text-gray-700 text-base mb-4"> {desc} </p>
            <Link href="/NftModal">
              <button
                component="a"
                type="button"
                className=" inline-block px-6 py-2.5 bg-blue-600 text-white font-medium text-xs leading-tight uppercase rounded shadow-md hover:bg-blue-700 hover:shadow-lg focus:bg-blue-700 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-blue-800 active:shadow-lg transition duration-150 ease-in-out"
              >
                Button
              </button>
            </Link>
          </div>
        </div>
      </NftCardData>
    </div>
  )
}

export default NftCard
