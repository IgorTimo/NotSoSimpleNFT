import { useContext } from 'react'
import { AppContext } from '../contexts/AppContext'

/**
 * Хук, возвращающий контекст ЖС-Спарк.
 */
export const useAppContext = () => useContext(AppContext)
