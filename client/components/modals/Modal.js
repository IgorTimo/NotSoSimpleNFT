const Modal = ({ active, setActive, name, desc }) => {
  const handleToggleClick = () => {
    setActive()
  }
  const handleStopPropag = (e) => {
    e.stopPropagation()
  }
  return active ? (
    <div
      className="h-full w-full bg-black opacity-80 fixed top-0 left-0 flex items-center justify-center"
      onClick={handleToggleClick}
    >
      <div
        className="p-5 rounded-md bg-white w-auto h-auto opacity-100 text-black"
        onClick={handleStopPropag}
      >
        <div className="flex justify-between" onClick={handleToggleClick}>
          <div>{name}</div>
          {/* <div>PRICE</div> */}
        </div>
        <div>{desc}</div>
      </div>
    </div>
  ) : null
}

export default Modal
