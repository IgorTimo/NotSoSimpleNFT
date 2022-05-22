import React from 'react'
import { NavItem } from './NavItem'

export const NavbarMenu = ({ activePage, setActivePage, items }) => {
  return (
    <nav className="space-y-2">
      {items.map(({ path, label }, index) => {
        return (
          <NavItem
            // eslint-disable-next-line react/no-array-index-key
            key={`${label}-${index}`}
            activePage={activePage}
            link={path}
            title={label}
            setActivePage={setActivePage}
          />
        )
      })}
    </nav>
  )
}
