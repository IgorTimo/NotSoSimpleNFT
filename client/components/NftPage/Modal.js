const Modal = ({ active, setActive }) => {
  return (
    <div
      className={`h-full w-full bg-black opacity-40 fixed top-0 left-0 flex items-center justify-center ${
        active ? `scale-100` : `scale-0`
      } `}
      onClick={() => setActive(false)}
    >
      <div
        className="p-5 rounded-md bg-white"
        onClick={(e) => e.stopPropagation()}
      ></div>
    </div>
  )
}

export default Modal
