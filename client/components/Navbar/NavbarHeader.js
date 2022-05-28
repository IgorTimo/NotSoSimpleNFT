import React from 'react'
import Link from 'next/link'

export const NavbarHeader = () => {
  return (
    <div className="pl-5">
      <Link href="/">
        <a className="no-underline">
          <div className="flex text-3xl text-gray-50 leading-8">
            <h2 className="font-bold">👾 NFT</h2>
            <p className="font-extralight">MONSTER</p>
          </div>
        </a>
      </Link>
    </div>
  )
}
