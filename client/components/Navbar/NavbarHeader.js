import React, { useState } from 'react'
import Link from 'next/link'
import styles from './styles.module.css'
export const NavbarHeader = ({ onLogoClick }) => {
  const [isActive, setActive] = useState(false)

  const handleLogoClick = () => {
    setActive(!isActive)
    onLogoClick()
  }

  return (
    <div className="pl-6 select-none">
      <Link href="/">
        <a className="no-underline" onClick={handleLogoClick}>
          <div className="flex leading-8 text-[28px]">
            <h2
              className={`${styles.box} font-bold ${
                isActive ? styles.flipped : ''
              }`}
            >
              👾
            </h2>
            <h2 className="font-bold pl-2">NFT</h2>
            <p className="font-extralight">MONSTER</p>
          </div>
        </a>
      </Link>
    </div>
  )
}
