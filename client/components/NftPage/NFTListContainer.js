/* eslint-disable prettier/prettier */
import { useState } from 'react'
import Modal from './Modal'
import NFTsList from './NFTsList'

const NFTListContainer = () => {
  const [modalActive, setModalActive] = useState(true)
  return (
    <div>
      <NFTsList />
      <Modal active={modalActive} setActive={setModalActive} />
    </div>
  )
}

export default NFTListContainer
