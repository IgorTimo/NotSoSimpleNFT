import { useRouter } from 'next/router'
import React from 'react'

function Nft() {
  const router = useRouter()
  const { id } = router.query

  return <h1>Nft: {id}</h1>
}

export default Nft
