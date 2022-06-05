import React, { useState, useEffect } from 'react'
import { useRouter } from 'next/router'
import { Collapse } from '../Collapse'
import { NavItem } from './NavItem'
import { getNavItemActiveClassName } from './utils'

export const NavItemContainer = ({
  activePage,
  link,
  title,
  setActivePage,
  items,
}) => {
  const router = useRouter()
  const [isPanelExpanded, setIsPanelExpanded] = useState(false)

  const handleLinkClick = (linkTitle) => {
    setActivePage(linkTitle)
  }

  const handlePanelExpand = () => {
    setIsPanelExpanded(!isPanelExpanded)
  }

  const renderExpandableItem = () => (
    <Collapse
      title={title}
      onOpenClick={handlePanelExpand}
      isExpanded={isPanelExpanded}
      collapsibleClassName=""
      titleClassName={
        link === router.pathname
          ? 'font-bold text-purplePrimary dark:text-darkPurpleLight'
          : ''
      }
      headerClassName="flex items-center h-10 justify-between cursor-pointer px-[24px] hover:bg-purpleLigth dark:hover:bg-darkPurplePrimary"
    >
      {items.map(({ path, label, key }) => {
        return (
          <NavItem
            key={key}
            path={path}
            label={label}
            handleLinkClick={handleLinkClick}
            className={`flex items-center h-10 pl-10 hover:bg-purpleLigth dark:hover:bg-darkPurplePrimary w-full cursor-pointer ${getNavItemActiveClassName(
              activePage,
              path,
            )}`}
          />
        )
      })}
    </Collapse>
  )

  const renderNavItem = () => (
    <NavItem
      path={link}
      label={<h5>{title}</h5>}
      handleLinkClick={handleLinkClick}
      className={`flex items-center h-10 pr-7 pl-5 font-semibold text-gray-50  cursor-pointer ${getNavItemActiveClassName(
        activePage,
        link,
      )}`}
    />
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
