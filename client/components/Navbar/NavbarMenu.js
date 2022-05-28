import React, { useMemo } from 'react'
import { NavItem } from './NavItem'

export const NavbarMenu = ({ activePage, setActivePage, navigationItems }) => {
  const navItems = useMemo(
    () =>
      navigationItems.map(({ path, label, items, key }) => {
        return (
          <NavItem
            key={label}
            activePage={activePage}
            link={path}
            title={label}
            setActivePage={setActivePage}
            items={items}
            navItemKey={key}
          />
        )
      }),
    [navigationItems, setActivePage, activePage],
  )

  return <nav className="pt-10">{navItems}</nav>
}
