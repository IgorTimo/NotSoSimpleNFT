import { useState } from 'react'
import { useAllTokens } from '../../queries'
import Modal from '../Modal/Modal'
import NFTsList from './NFTsList'

const NFTListContainer = () => {
  const [selectedElement, setSelectedElement] = useState(undefined)
  const [modalActive, setModalActive] = useState(false)
  const { data } = useAllTokens()

  const dataWithId =
    data?.map((el) => {
      return {
        ...el,
        id: el.image,
      }
    }) || []

  const setElementToState = (id) => {
    const elementInModal = dataWithId.find((elem) => elem.id === id)
    setSelectedElement(elementInModal)
    setModalActive(true)
  }

  return (
    <>
      <div>
        <NFTsList
          dataWithId={dataWithId}
          id={dataWithId.id}
          setElementToState={setElementToState}
        />
      </div>
      <div>
        <Modal
          active={modalActive}
          setActive={setModalActive}
          elementInModal={selectedElement}
        />
      </div>
    </>
  )
}

export default NFTListContainer
