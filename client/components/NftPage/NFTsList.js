import NFTItem from './NFTItem'

const NFTsList = ({ dataWithId, setElementToState }) => {
  return (
    <div className="flex flex-wrap w-full">
      {dataWithId?.map(({ image, name, id }) => (
        <span>
          <NFTItem
            image={image}
            name={name}
            id={id}
            handleNftItemClick={setElementToState}
          />
        </span>
      ))}
    </div>
  )
}

export default NFTsList
