import React from 'react'
import Link from 'next/link'

export const NavbarHeader = ({ onLogoClick }) => {
  return (
    <div className="pl-4">
      <Link href="/">
        <a className="no-underline" onClick={onLogoClick}>
          <div className="flex text-gray-50 leading-8 text-[29px]">
            <h2 className="font-bold">👾 NFT</h2>
            <p className="font-extralight">MONSTER</p>
          </div>
        </a>
      </Link>
    </div>
  )
}
