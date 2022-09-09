import NFTItem from './NFTItem'

const NFTsList = ({ data, setElementToState }) => {
  const handleItemClick = (identifier) => {
    return () => {
      setElementToState(identifier)
    }
  }

  return (
    <div>
      {data?.map(({ image, name, desc, id }) => (
        <span onClick={handleItemClick(id)} key={id} className="cursor-pointer">
          <NFTItem image={image} name={name} desc={desc} />
        </span>
      ))}
    </div>
  )
}

export default NFTsList
