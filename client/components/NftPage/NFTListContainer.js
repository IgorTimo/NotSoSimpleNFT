import { useState } from 'react'
import { useAllTokens } from '../../queries'
import Modal from './Modal'
import NFTsList from './NFTsList'

const NFTListContainer = () => {
  const [modalActive, setModalActive] = useState(false)
  const { data } = useAllTokens()
  return (
    <>
      <div
        className="flex flex-wrap w-full"
        onClick={() => setModalActive(true)}
      >
        {data?.map(({ image, name }) => (
          <NFTsList image={image} name={name} active={modalActive} />
        ))}
      </div>
      <div>
        <Modal active={modalActive} setActive={setModalActive} />
      </div>
    </>
  )
}

export default NFTListContainer
