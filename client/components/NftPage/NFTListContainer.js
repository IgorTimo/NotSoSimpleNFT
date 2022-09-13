import { useState } from 'react'
import Modal from '../modals/Modal'
import NFTsList from './NFTsList'
import { useAllTokens } from '../../queries'

const NFTListContainer = () => {
  const [modalActive, setModalActive] = useState(false)
  const { data } = useAllTokens()
  const [elementId, setElementId] = useState(null)

  const dataWithId =
    data?.map((el) => ({ ...el, id: el.image, desc: el.description })) || []

  const elInModal = dataWithId.find((el) => el.id === elementId)

  const setToggleModal = (id) => {
    setElementId(id)
    setModalActive(true)
  }

  return (
    <>
      <div className="flex flex-wrap w-full">
        <NFTsList data={dataWithId} setToggleModal={setToggleModal} />
      </div>
      <div>
        <Modal active={modalActive} setActive={setModalActive}>
          <h2>{elInModal?.name}</h2>
          <p>{elInModal?.description}</p>
        </Modal>
      </div>
    </>
  )
}

export default NFTListContainer
