// import { Context } from '../Context'

import { Context } from '@components/Modal/Context'
import { useContext } from 'react'

const ButtonModal = () => {
  const { handleToggleClick } = useContext(Context)

  return (
    <button
      onClick={handleToggleClick}
      id="ButtonModal"
      type="button"
      className=" inline-block px-6 py-2.5 bg-blue-600 text-white font-medium text-xs leading-tight uppercase rounded shadow-md hover:bg-blue-700 hover:shadow-lg focus:bg-blue-700 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-blue-800 active:shadow-lg transition duration-150 ease-in-out"
    >
      Шмяк
    </button>
  )
}

export default ButtonModal
