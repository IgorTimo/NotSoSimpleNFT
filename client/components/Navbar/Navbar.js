import React, { useState, useEffect } from 'react'
import { NavbarHeader } from './NavbarHeader'
import { NavbarMenu } from './NavbarMenu'
import { NavbarFooter } from './NavbarFooter'
import { routes } from '../routes/consts'

export const Navbar = ({ navigation }) => {
  const defaultActivePageLabel = routes.gallery.all.key
  const [activePage, setActivePage] = useState(defaultActivePageLabel)
  const hasNavigation = !!navigation.length

  const handleLogoClick = () => {
    setActivePage(defaultActivePageLabel)
  }

  useEffect(() => {
    setActivePage(defaultActivePageLabel)
  }, [defaultActivePageLabel])

  return (
    <div className="flex flex-col bg-gray-900 text-gray-50 py-7">
      <NavbarHeader onLogoClick={handleLogoClick} />
      {hasNavigation && (
        <NavbarMenu
          activePage={activePage}
          setActivePage={setActivePage}
          navigationItems={navigation}
        />
      )}

      <NavbarFooter />
    </div>
  )
}
