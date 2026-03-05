import React from 'react'
import { useState } from 'react';

const App = () => {

  const[title,setTitle] = useState('');

  const formHandller = (e) => {
    e.preventDefault();
    console.log('Form Submitted by ',title)
    setTitle('');
  }
  return (
    <div>
      <form onSubmit={(e) => {
        formHandller(e)
      }}>
        <input type="text"  
        placeholder='Enter you name' 
        value={title} 
        onChange={(e) => {
            setTitle(e.target.value);
        }}/>
        <button>Submit</button>
      </form>
    </div>
  )
}

export default App
