import { useAllTokens } from 'queries'
import React, { useContext } from 'react'
import { Context } from './Context'

const Modal = () => {
  const { modalShown, handleToggleClick } = useContext(Context)

  const res = useAllTokens().data

  return modalShown ? (
    <>
      <div className="modal-backdrop" onClick={handleToggleClick}>
        <div className="modal-content" onClick={(e) => e.stopPropagation()}>
          <button onClick={handleToggleClick}>Close</button>
          <img className="rounded-t-lg" src={res[1].image} alt="" />
        </div>
      </div>
    </>
  ) : null
}

export { Modal }

// import { useState } from 'react'

// const Modal = ({ children, isModalOpen, onClose }) => {
//   const { modalShown, handleToggleClick } = useContext(Context)
//   const [modalShown, setToggleModal] = useState(false)

//   const handleToggleClick = () => {
//     setToggleModal(!modalShown)

//     return <> {children} </>
//   }
// }

// export default Modal
