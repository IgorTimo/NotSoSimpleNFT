import { useEffect, useState } from 'react'
import { useAllTokens } from '../../queries'
import Modal from '../Modal/Modal'
import NFTItem from './NFTItem'
import { useWeb3Context } from '../../hooks/useWeb3Context'
import Jazzicon, { jsNumberForAddress } from 'react-jazzicon'
import { ethers } from "ethers"

const NFTListContainer = () => {
  const [modalActive, setModalActive] = useState(false)
  const { data } = useAllTokens()
  const [selectedItem, setSelectedItem] = useState(undefined)
  const { account } = useWeb3Context()
  const [input, setInput] = useState("")
  const [walletcheck, setWalletcheck] = useState(false)

  const dataWithId = data?.map(el => {
    return {...el,
    id: el.image}
  }) 
  const handleNftItemClick = (id) => {
  const focusedItem = dataWithId.find(el => el.id === id ); 
  setSelectedItem(focusedItem)
  setModalActive(true)
  }

  const handleOnSubmit = (event) => {
    event.preventDefault()
    console.log("Wallet " + input + " exists")
    setInput("")
  }
  const handleInputChange = (event) => {
    setInput(event.target.value)
  }

  useEffect(() => {
    const isExists = ethers.utils.isAddress(input)
    setWalletcheck(isExists)
    console.log(isExists)
  }, [input])

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
         <form class="flex items-center">
          <label class="text-gray-900 text-sm block w-full pl-10 p-2.5">
            <textarea placeholder="Send to:" value={input} onChange={handleInputChange} />
          </label>
          <button className="py-2 px-4 bg-purple-500 text-white font-semibold rounded-lg shadow-md hover:bg-purple-700 focus:outline-none disabled:opacity-50" type="submit" disabled={!walletcheck} onClick={handleOnSubmit}>Transfer</button>
         </form>
        </Modal>
      </div>
    </>
  )
}

export default NFTListContainer
