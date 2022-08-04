/* eslint-disable prettier/prettier */
import { useAllTokens } from '../../queries'
import NFTsList from './NFTsList'

const NFTListContainer = () => {
  const { data } = useAllTokens()
  return (
    <div className="flex flex-wrap ">
      {data?.map(({ image, name }) => (
        <NFTsList image={image} name={name} />
      ))}
    </div>
  )
}

export default NFTListContainer
