import NFTItem from './NFTItem'

const NFTsList = ({image, name, id, handleNftItemClick}) => {

const handleOnItemClick = () =>{
  handleNftItemClick(id)
}

  return (
    <div onClick={handleOnItemClick}>
      <NFTItem image={image} name={name} />
    </div>
  )
}

export default NFTsList
