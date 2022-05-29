import React, { useState } from 'react'
import { NavbarHeader } from './NavbarHeader'
import { NavbarMenu } from './NavbarMenu'
import { NavbarFooter } from './NavbarFooter'

export const Navbar = ({ navigation }) => {
  const [activePage, setActivePage] = useState('')

  const handleLogoClick = () => {
    setActivePage('')
  }

  return (
    <div className="flex flex-col bg-gray-900 text-gray-50 py-7">
      <NavbarHeader onLogoClick={handleLogoClick} />
      <NavbarMenu
        activePage={activePage}
        setActivePage={setActivePage}
        navigationItems={navigation}
      />

      <NavbarFooter />
    </div>
  )
}
