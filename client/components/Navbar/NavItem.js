import React from 'react'
import Link from 'next/link'

export const NavItem = ({ path, className, label, handleLinkClick }) => {
  const onLinkClick = () => {
    handleLinkClick(path)
  }

  return (
    <Link href={path}>
      <div className={className} onClick={onLinkClick}>
        {label}
      </div>
    </Link>
  )
}
