import React, { useState } from 'react'
import { NavbarHeader } from './NavbarHeader'
import { NavbarMenu } from './NavbarMenu'
import { NavbarFooter } from './NavbarFooter'
import { navigation } from '../../routes/navigation'

export const Navbar = () => {
  const defaultActivePageLabel = navigation[0].items[0].key
  const [activePage, setActivePage] = useState(defaultActivePageLabel)

  return (
    <div className="flex flex-col bg-gray-900 text-gray-50 py-7">
      <NavbarHeader />
      <NavbarMenu
        activePage={activePage}
        setActivePage={setActivePage}
        navigationItems={navigation}
      />
      <NavbarFooter />
    </div>
  )
}
