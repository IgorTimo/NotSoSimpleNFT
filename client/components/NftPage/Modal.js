const Modal = ({ active, setActive }) => {
  return (
    <div
      className={`h-full w-full bg-black opacity-80 fixed top-0 left-0 flex items-center justify-center ${
        active ? `scale-100` : `scale-0`
      } `}
      onClick={() => setActive(false)}
    >
      <div
        className="p-5 rounded-md bg-white w-auto h-auto opacity-100 text-black"
        onClick={(e) => e.stopPropagation()}
      >
        <div>Image</div>
        <div className="flex justify-between">
          <div>NAME</div>
          <div>PRICE</div>
        </div>
        <div>DESCRIPTION</div>
      </div>
    </div>
  )
}

export default Modal
