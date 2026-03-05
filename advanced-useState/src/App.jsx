import React, { useState } from 'react'

const App = () => {

    const[num,setNum] = useState([12,34,56])
   const btnClicked = () => {
    const newNum = [...num]
    newNum.push(99)
    setNum(newNum)
    
   }
  return (
    <div>
      <h1>{num}</h1>
     <button onClick={btnClicked}>Click</button>
    </div>
  )
}

export default App
