import { useState } from 'react'
import { useAllTokens } from '../../queries'
import Modal from '../Modal/Modal'
import NFTItem from './NFTItem'
import { useWeb3Context } from '../../hooks/useWeb3Context'
import Jazzicon, { jsNumberForAddress } from 'react-jazzicon'

const NFTListContainer = () => {
  const [modalActive, setModalActive] = useState(false)
  const { data } = useAllTokens()
  const [selectedItem, setSelectedItem] = useState(undefined)
  const { account } = useWeb3Context()

  const dataWithId = data?.map(el => {
    return {...el,
    id: el.image}
  }) 
const handleNftItemClick = (id) => {
 const focusedItem = dataWithId.find(el => el.id === id ); 
 setSelectedItem(focusedItem)
 setModalActive(true)
}
  return (
    <>
      <div
        className="flex flex-wrap w-full"
  
      >
        {dataWithId?.map(({ image, name, id }) => (
           <NFTItem image={image} name={name} id={id} handleNftItemClick={handleNftItemClick}/>
         
        ))}
      </div>
      <div className='text-center'>
        <Modal active={modalActive} setActive={setModalActive}>
         <span className='text-lg font-bold'>{selectedItem?.name}</span> <br />
         <div className="mr-2 text-md font-bold">Owner:
         <Jazzicon diameter={18} seed={jsNumberForAddress(account)} />
         {account.toString().slice(0,5)+'...'+account.toString().slice(38)}
                  </div><br />
                  <img
            src={selectedItem?.image}
            className="w-52 h-34 rounded-md"
          />
          {/* xl:w-34 2xl:w-42 */}
         {selectedItem?.description}
        </Modal>
      </div>
    </>
  )
}

export default NFTListContainer
