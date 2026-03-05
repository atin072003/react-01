import React from 'react'
import { useState } from 'react'

const App = () => {

  const[num , setNum] = useState(0)

  function increaseNum(){
    setNum(num+1)
  }
  function decreaseNum(){
    setNum(num-1)
  }
  function jumpBy5(){
    setNum(num+5)
  }
  function return5(){
    setNum(num-5)
  }
  return (
    <div>
      <h1>{num}</h1>
      <div className='fun'>
        <button onClick={increaseNum}>Increase</button>
      <button onClick={decreaseNum}>Decrease</button><br />
      <button onClick={jumpBy5}>Increase 5</button>
      <button onClick={return5}>Decrease 5</button>
      </div>
    </div>
  )
}

export default App
