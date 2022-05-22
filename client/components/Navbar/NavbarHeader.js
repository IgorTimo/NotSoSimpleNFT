import React from 'react'
import Link from 'next/link'

export const NavbarHeader = ({ title }) => {
  return (
    <div className="flex items-center ml-1 pb-8">
      <Link href="/">
        <a className="text-xl font-bold pl-1 no-underline text-gray-50 hover:text-gray-100">
          {title}
        </a>
      </Link>
    </div>
  )
}
