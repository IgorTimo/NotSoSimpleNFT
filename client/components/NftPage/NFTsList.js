/* eslint-disable prettier/prettier */
import { useAllTokens } from '../../queries'
import NFTItem from './NFTItem'

const NFTsList = () => {
  const { data } = useAllTokens()
  return (
    <div className="flex flex-wrap ">
      {data?.map(({ image, name }) => (
        <NFTItem image={image} name={name} />
      ))}
    </div>
  )
}

export default NFTsList
