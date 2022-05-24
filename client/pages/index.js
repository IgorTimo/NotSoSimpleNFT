/* eslint-disable no-console */
/* eslint-disable no-alert */

import React, { useEffect } from 'react'
import yourCollectible from '../yourCollectible'

function Index() {
  useEffect(() => {
    yourCollectible.getAllTokens().then(console.log).catch(console.error)
  }, [])

  return <h1 className="m-6 text-2xl text-center">Здесь должны быть все NFT</h1>
}

export default Index
