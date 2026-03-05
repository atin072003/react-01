import React from 'react'

const App = () => {
  return (
    <div>
      <button onWheel = {function(elem){
          console.log(elem.value)
      }}>Hello</button>
    </div>
  )
}

export default App
