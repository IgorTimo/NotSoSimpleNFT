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
    <div className="flex flex-col justify-between bg-[#FFFFFF] text-[#212121] py-7">
      <div>
        <NavbarHeader onLogoClick={handleLogoClick} />
        <NavbarMenu
          activePage={activePage}
          setActivePage={setActivePage}
          navigationItems={navigation}
        />
      </div>

      <NavbarFooter />
    </div>
  )
}
