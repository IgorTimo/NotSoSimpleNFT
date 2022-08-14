const NftItem = ({ description, image, name }) => {
  return (
    <div>
      key={description} img={image} title={name} desc={description}
    </div>
  )
}

export default NftItem
