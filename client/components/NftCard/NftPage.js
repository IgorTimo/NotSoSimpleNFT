import { useAllTokens } from 'queries'
import React, { useEffect, useState } from 'react'
import NftCard from './NftCard'

export default function NftPage() {
  const [tokens, setTokens] = useState([])
  const tok = useAllTokens()
  console.log(tok.data)
  // useEffect(() => {
  //   async function createToken() {
  //     const res = useAllTokens().data
  //     try {
  //       const arr = await Promise.all(res)
  //       setTokens(arr)
  //     } catch (err) {
  //       console.error(err)
  //     }
  //   }
  //   createToken()
  // // }, [])

  // console.log(tokens)

  return <div className="absolute w-max border rounded-xl"></div>
}
