import React from 'react'
import { useDarkTheme } from '../../hooks/useDarkTheme'
import { Moon, Sun } from '../../icons'

export const ThemeToggle = () => {
  const [colorTheme, setColorTheme] = useDarkTheme()

  const switchState = () => {
    setColorTheme(colorTheme)
  }

  return (
    <div className="relative">
      <div
        onClick={switchState}
        className="absolute z-10 top-[14px] left-[10px] cursor-pointer"
      >
        <Moon />
      </div>
      <div
        onClick={switchState}
        className="absolute z-10 top-[14px] left-[52px] cursor-pointer"
      >
        <Sun color="red" />
      </div>
      <label
        htmlFor="default-toggle"
        className="inline-flex relative items-center"
      >
        <div
          onClick={switchState}
          className={`
        cursor-pointer
        w-[80px] 
        h-[42px] 
        border
        border-[#90A4AE]
        dark:border-[#90A4AE]
        border-solid
        bg-transparent 
        rounded-full 
        ${colorTheme === 'dark' ? 'after:translate-x-full' : ''}
        after:content-[''] 
        after:absolute 
        after:top-[2px] 
        after:left-[2px] 
        after:bg-purpleLigth  
        after:rounded-full 
        after:h-[38px] 
        after:w-[38px] 
        after:transition-all 
        `}
        ></div>
      </label>
    </div>
  )
}
