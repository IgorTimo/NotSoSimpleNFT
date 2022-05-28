import React, { useState } from 'react'
import Link from 'next/link'
import { ExpandingPanel } from '../ExpandingPanel'

export const NavItem = ({
  activePage,
  link,
  title,
  setActivePage,
  items,
  navItemKey,
}) => {
  const [isPanelExpanded, setIsPanelExpanded] = useState(title === 'Gallery')

  const handleLinkClick = (linkTitle) => {
    setActivePage(linkTitle)
  }

  const handlePanelExpand = () => {
    setIsPanelExpanded(!isPanelExpanded)
  }

  const navItemActiveClassName = 'bg-gray-800 border-r-[5px] border-purple-700'

  const renderItemWithChildren = () => (
    <ExpandingPanel
      title={title}
      onClick={handlePanelExpand}
      isExpanded={isPanelExpanded}
      headerClassName="flex items-center justify-between h-12 pr-7 font-semibold hover:bg-gray-700"
    >
      {items.map(({ path, label, key }) => {
        return (
          <Link key={`${label}${key}`} href={path}>
            <div
              className={`flex pl-8 hover:bg-gray-700 items-center w-full h-12 ${
                activePage === key ? navItemActiveClassName : ''
              }`}
              onClick={() => handleLinkClick(key)}
            >
              {label}
            </div>
          </Link>
        )
      })}
    </ExpandingPanel>
  )

  const renderNavItem = () => (
    <Link href={link}>
      <div
        onClick={() => handleLinkClick(navItemKey)}
        className={`flex items-center font-semibold h-12 pr-7 text-gray-50 pl-5 hover:bg-gray-700 cursor-pointer ${
          activePage === navItemKey ? navItemActiveClassName : ''
        }`}
      >
        <h5>{title}</h5>
      </div>
    </Link>
  )

  return (
    <div className="flex flex-col w-full">
      {items ? renderItemWithChildren() : renderNavItem()}
    </div>
  )
}
