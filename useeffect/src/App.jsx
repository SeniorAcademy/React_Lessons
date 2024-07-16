import React, { useEffect, useState } from 'react'

import './App.css'

function App() {
  const [indexFirst, setIndexFirst] = useState(0)
  const [indexSecond, setIndexSecond] = useState(0)
  // React.useEffect(() => {

  //   console.log("her defe")
  // })

  // useEffect(() => {
  //   console.log("1 defe")
  // }, [])

  useEffect(() => {
    console.log("ilk defe ve her deyisikilik olanda")
  }, [indexFirst,indexSecond])

  return (
    <>
      <div className='bg-slate-200 w-full h-screen'>
        <div className='p-20 flex justify-center items-center'>
          <button className='bg-blue-300 p-4 m-3' onClick={() => setIndexFirst(indexFirst + 1)}>
            Click
          </button>
          <p>index_1: {indexFirst}</p>
        </div>

        <div className='p-20 flex justify-center items-center'>
          <button className='bg-blue-300 p-4 m-3' onClick={() => setIndexSecond(indexSecond + 1)}>
            Click
          </button>
          <p>index_2: {indexSecond}</p>
        </div>
      </div>
    </>
  )
}

export default App
