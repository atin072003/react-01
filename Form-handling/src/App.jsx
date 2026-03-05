import React from 'react'

const App = () => {

  const formHandller = (e) => {
    e.preventDefault();
    console.log('Form Submitted')
  }
  return (
    <div>
      <form onSubmit={(e) => {
        formHandller(e)
      }}>
        <input type="text" placeholder='Enter you name'/>
        <button>Submit</button>
      </form>
    </div>
  )
}

export default App
