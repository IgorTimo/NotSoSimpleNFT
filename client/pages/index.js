/* eslint-disable no-console */
/* eslint-disable no-alert */

import React, { useEffect } from 'react'
import yourCollectible from '../yourCollectible'

function Index() {
  useEffect(() => {
    yourCollectible.getAllTokens().then(console.log).catch(console.error)
  }, [])

  return (
    <div className="flex pl-8 pt-4 leading-8 text-[29px]">
      <h2 className="font-bold">Welcome to NFT</h2>
      <p className="font-extralight">MONSTER</p>
    </div>
  )
}

export default Index
