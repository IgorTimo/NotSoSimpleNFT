import React, { useState, useEffect } from 'react'
import { Chevron } from '../Icons'

export const ExpandingPanel = ({
  title,
  children,
  isExpanded,
  childrenContainerClassName = '',
  headerClassName = '',
  customTitle,
}) => {
  const [isPanelExpanded, setIsPanelExpanded] = useState(isExpanded)
  const handleExpand = () => {
    setIsPanelExpanded(!isPanelExpanded)
  }

  useEffect(() => {
    setIsPanelExpanded(isExpanded)
  }, [isExpanded])

  return (
    <button type="button">
      <div onClick={handleExpand} className={headerClassName}>
        {customTitle ?? <h5 className="pl-5 truncate font-bold">{title}</h5>}
        <Chevron
          className={`h-5 w-5 ${isPanelExpanded ? 'rotate-180' : 'rotate-0'}`}
        />
      </div>
      <div
        // TODO: чтобы панель была анимирована необходимо задавать числовые значения высоты - max-h-40. mah-h-fit например не подходит и анимация не применяется. подумать, как можно иначе анимировать панель
        className={`${childrenContainerClassName} flex items-start flex-col ${
          isPanelExpanded ? 'max-h-40' : 'max-h-0'
        } overflow-hidden transition-all duration-300 ease`}
      >
        {children}
      </div>
    </button>
  )
}
