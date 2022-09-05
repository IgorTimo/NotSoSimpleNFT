import { useState } from 'react'
import { useAllTokens } from '../../queries'
import Modal from './Modal'
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
 const nameId = dataWithId.find(el => el.id === id ); 
 setSelectedItem(nameId)
}
  return (
    <>
      <div
        className="flex flex-wrap w-full"
        onClick={() => setModalActive(true)}
      >
        {dataWithId?.map(({ image, name, id }) => (
          <NFTsList image={image} name={name} id={id} handleNftItemClick={handleNftItemClick}/>
        ))}
      </div>
      <div>
        <Modal active={modalActive} setActive={setModalActive} name={selectedItem?.name} />
      </div>
    </>
  )
}

export default NFTListContainer
