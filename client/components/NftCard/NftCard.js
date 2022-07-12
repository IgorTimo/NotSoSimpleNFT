const NftCard = ({ img, name, desc }) => {
  return (
    <div className="border rounded-xl">
      <img src = {img} alt={img} />
      <h1>{name}</h1>
      <p>{desc}</p>
    </div>
  )
}

export default NftCard
