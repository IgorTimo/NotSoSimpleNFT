import React from 'react'
import Link from 'next/link'

export const NavItem = ({ activePage, link, title, setActivePage }) => (
  <Link href={link}>
    <a
      onClick={() => setActivePage(title)}
      className={`flex items-center no-underline text-gray-50 hover:text-gray-100 p-3 rounded-md ${
        activePage === title ? 'bg-gray-700' : ''
      }`}
    >
      <div className="font-bold pl-3">{title}</div>
    </a>
  </Link>
)
