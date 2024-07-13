import React, { useState } from 'react'
import './App.css'
import { FaPlus, FaMinus } from "react-icons/fa";

function App() {
  const [value, setValue] = useState(0)

  const handleClick = () => {
    if (value > 0) {
      setValue(value + 1)
    }
  }
  const handleClickMinus = () => {
    if (value > 0) {
      setValue(value - 1)
    }
  }
  return (
    <>
      <div className='bg-slate-400 w-full h-[450px]'>
        <div className='flex justify-center items-center pt-14 pb-14'>
          <button className='' onClick={handleClick}>
            <FaPlus size={30} color='green' />
          </button>
          <p className='text-2xl font-bold ms-6 me-6'>{value}</p>
          <button className='' onClick={handleClickMinus}>
            <FaMinus size={30} color='green' />
          </button>
        </div>
      </div>
    </>
  )
}

export default App
