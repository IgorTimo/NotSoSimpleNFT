import NFTItem from './NFTItem'

const NFTsList = (props) => {
  return (
    <div>
      <NFTItem image={props.image} name={props.name} />
    </div>
  )
}

export default NFTsList
