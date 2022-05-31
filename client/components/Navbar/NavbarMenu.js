import React, { useMemo } from 'react'
import { NavItemContainer } from './NavItemContainer'

export const NavbarMenu = ({ activePage, setActivePage, navigationItems }) => {
  const navItems = useMemo(
    () =>
      navigationItems.map(({ path, label, items }) => {
        return (
          <NavItemContainer
            key={label}
            activePage={activePage}
            link={path}
            title={label}
            setActivePage={setActivePage}
            items={items}
          />
        )
      }),
    [navigationItems, setActivePage, activePage],
  )

  return <nav className="pt-11">{navItems}</nav>
}
