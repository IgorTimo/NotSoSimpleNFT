import React, { createContext, useState } from 'react'

const Context = createContext()

function Provider(props) {
  const [modalShown, toggleModal] = useState(false)
  const handleToggleClick = () => {
    toggleModal(!modalShown)
  }
  return (
    <Context.Provider value={{ modalShown, handleToggleClick }}>
      {props.children}
    </Context.Provider>
  )
}

export { Context, Provider }
