import React, { useEffect, useRef, useState } from 'react'
import { Chevron } from '../../icons'

export const Collapse = ({
  headerClassName = 'flex w-100 items-center justify-between cursor-pointer px-4 py-4 shadow-lg shadow-gray-300/30',
  contentContainerClassName,
  collapsibleClassName = 'shadow-lg shadow-gray-300/30',
  title = 'Collapsible',
  iconButtonClassName,
  isExpanded,
  titleClassName,
  contentClassName,
  children,
  onOpenClick,
}) => {
  const [isOpen, setIsPanelExpanded] = useState(isExpanded)
  const [height, setHeight] = useState(isExpanded ? undefined : 0)
  const ref = useRef(null)

  const handleFilterOpening = () => {
    onOpenClick?.()
    setIsPanelExpanded((prev) => !prev)
  }

  useEffect(() => {
    if (!height || !isOpen || !ref.current) return undefined
    const resizeObserver = new ResizeObserver((el) => {
      setHeight(el[0].contentRect.height)
    })
    resizeObserver.observe(ref.current)
    return () => {
      resizeObserver.disconnect()
    }
  }, [height, isOpen])

  useEffect(() => {
    if (isOpen) setHeight(ref.current?.getBoundingClientRect().height)
    else setHeight(0)
  }, [isOpen])

  useEffect(() => {
    setIsPanelExpanded(isExpanded)
  }, [isExpanded])

  return (
    <div className={`transition select-none ${collapsibleClassName}`}>
      <div>
        <div className={headerClassName} onClick={handleFilterOpening}>
          <div className={titleClassName}>{title}</div>
          <button type="button" className={iconButtonClassName}>
            <Chevron
              className={`h-5 w-5 dark fas-edonec transition duration-300 origin-center ${
                isOpen ? 'rotate-180' : 'rotate-360'
              }`}
            />
          </button>
        </div>
      </div>
      <div
        className={`overflow-hidden transition-[height] ${contentClassName}`}
        style={{ height }}
      >
        <div ref={ref}>
          <div className={contentContainerClassName}>{children}</div>
        </div>
      </div>
    </div>
  )
}
