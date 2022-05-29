import React, { useState, useEffect } from 'react'
import Link from 'next/link'
import { useRouter } from 'next/router'
import { Collapse } from '../Collapse'

export const NavItem = ({
  activePage,
  link,
  title,
  setActivePage,
  items,
  navItemKey,
}) => {
  const router = useRouter()
  const [isPanelExpanded, setIsPanelExpanded] = useState(false)

  const handleLinkClick = (linkTitle) => {
    setActivePage(linkTitle)
  }

  const handlePanelExpand = () => {
    setIsPanelExpanded(!isPanelExpanded)
  }

  const navItemActiveClassName =
    'bg-purpleLigth border-r-[5px] border-purplePrimary'

  const renderExpandableItem = () => (
    <Collapse
      title={title}
      onOpenClick={handlePanelExpand}
      isExpanded={isPanelExpanded}
      collapsibleClassName=""
      titleClassName={`${
        link === router.pathname ? 'font-bold text-purplePrimary' : ''
      }`}
      headerClassName="flex justify-between cursor-pointer items-center px-[24px] hover:bg-purpleLigth h-10"
    >
      {items.map(({ path, label, key }) => {
        return (
          <Link key={`${label}${key}`} href={path}>
            <div
              className={`flex pl-10 hover:bg-purpleLigth items-center w-full h-10 cursor-pointer ${
                activePage === path ? navItemActiveClassName : ''
              }`}
              onClick={() => handleLinkClick(path)}
            >
              {label}
            </div>
          </Link>
        )
      })}
    </Collapse>
  )

  const renderNavItem = () => (
    <Link href={link}>
      <div
        onClick={() => handleLinkClick(navItemKey)}
        className={`flex items-center font-semibold h-10 pr-7 text-gray-50 pl-5 hover:bg-gray-700 cursor-pointer ${
          activePage === navItemKey ? navItemActiveClassName : ''
        }`}
      >
        <h5>{title}</h5>
      </div>
    </Link>
  )

  useEffect(() => {
    if (link === router.pathname) setIsPanelExpanded(true)
  }, [link, router])

  useEffect(() => {
    const activeItem = items?.find((item) => item.path === router.asPath)
    if (activeItem) setActivePage(activeItem.path)
  }, [items, router, setActivePage])

  return (
    <div className="flex flex-col w-full">
      {items ? renderExpandableItem() : renderNavItem()}
    </div>
  )
}
