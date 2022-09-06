import { useState } from 'react'
import { useAllTokens } from '../../queries'
import Modal from '../Modal/Modal'
import NFTItem from './NFTItem'
import NFTsList from './NFTsList'

const NFTListContainer = () => {
  const [modalActive, setModalActive] = useState(false)
  const { data } = useAllTokens()
const [selectedItem, setSelectedItem] = useState(undefined)

  const dataWithId = data?.map(el => {
    return {...el,
    id: el.image}
  }) 
const handleNftItemClick = (id) => {
 const focusedItem = dataWithId.find(el => el.id === id ); 
 setSelectedItem(focusedItem)
}
  return (
    <>
      <div
        className="flex flex-wrap w-full"
        onClick={() => setModalActive(true)}
      >
        {dataWithId?.map(({ image, name, id }) => (
           <NFTItem image={image} name={name} id={id} handleNftItemClick={handleNftItemClick}/>
         
        ))}
      </div>
      <div>
        <Modal active={modalActive} setActive={setModalActive}>{selectedItem?.description}</Modal>
      </div>
    </>
  )
}

export default NFTListContainer
