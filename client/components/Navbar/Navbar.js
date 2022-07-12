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
    <div className="flex flex-col justify-between bg-white  text-[#212121] py-7 dark:bg-[#0D0A1C] dark:text-[#ECEFF1]">
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
