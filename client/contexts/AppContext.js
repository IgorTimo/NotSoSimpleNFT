/* eslint-disable react/jsx-no-constructed-context-values */
import React, { createContext, useState } from 'react'

export const appContextInitialValues = {
  updateContextState: () => {},
}

export const AppContext = createContext(appContextInitialValues)

export const AppContextProvider = ({ children }) => {
  const [contextState, setContextState] = useState(appContextInitialValues)

  const updateContextState = (newContext) => {
    setContextState((prevContext) => ({ ...prevContext, ...newContext }))
  }

  return (
    <AppContext.Provider
      value={{
        ...contextState,
        updateContextState,
      }}
    >
      {children}
    </AppContext.Provider>
  )
}
