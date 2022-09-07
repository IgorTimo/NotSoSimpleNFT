const Modal = ({ active, setActive, elementInModal }) => {
  const handleClickStopPropagation = (e) => {
    e.stopPropagation()
  }
  const toggleClickSetActive = () => {
    setActive(false)
  }

  return (
    <div
      className={`h-full w-full bg-black fixed top-0 left-0 flex items-center justify-center ${
        active ? `scale-100` : `scale-0`
      } `}
      onClick={toggleClickSetActive}
    >
      <div
        className="p-5 rounded-md bg-white w-auto h-auto text-black font-gallery"
        onClick={handleClickStopPropagation}
      >
        <img
          src={elementInModal?.image}
          alt={elementInModal?.name}
          className="rounded-md"
        />
        <div className="flex justify-between text-2xl font-semibold">
          <h2>{elementInModal?.name}</h2>
          <p>5 деняк</p>
        </div>
        <p className="text-xl">{elementInModal?.description}</p>
      </div>
    </div>
  )
}

export default Modal
