import React, { useState } from 'react';
import { X } from 'lucide-react';

const App = () => {

  const submitHandler = (e) => {
    e.preventDefault();
    console.log('Form submited Successfully...')
    //console.log(title,details)
    const copyTask = [...task];
    copyTask.push({title,details})
    setTask(copyTask)
    console.log(copyTask)
    
    setTitle('');
    setDetails('');
  }

  const[title,setTitle] = useState('');
  const[details,setDetails] = useState('');

  const[task,setTask] = useState([]);

  const deleteNote = (idx) => {
          const copyTask = [...task]
          copyTask.splice(idx,1)
          setTask(copyTask)       
  }
  return (
    <div className='h-screen bg-cover bg-no-repeat lg:flex bg-black text-yellow-700 bg-[url(https://wallpapercave.com/wp/wp8192238.jpg)]'>

      <form onSubmit={(e) => {
          submitHandler(e);
      }} 
      className='flex lg:w-1/2 p-10 items-start' >
        <div className='flex gap-4 w-1/2 items-start flex-col'> 
        <h1 className='text-xl font-bold text-yellow-700 underline'>Add Notes</h1>

        <input className='border px-5 py-2 rounded  outline-none  w-full' 
        type="text"
        placeholder='Enter your task...'
        value={title}
        onChange={(e) => {
          setTitle(e.target.value);
          }}/> 

       <textarea className='border px-5 py-2  outline-none rounded  w-full h-40' 
       type="text" 
       placeholder='Enter Details...'
       value={details}
       onChange={(e) => {
        setDetails(e.target.value)
       }}
       />

       <button className='border px-5 py-2 active:scale-95 active:bg-green-500 bg-gray-400 text-yellow-700 font-bold rounded-2xl w-full border-none'>Recent note</button>

       </div>
       <div className='h-56 flex items-center ml-20  mt-10'>
        <img className='h-65 ' src="/girl.png" alt="" />
       
        </div>
      </form>
      <div className='min-h-screen lg:w-1/2 p-10 bg-gray-800 lg:border-l-2 bg-cover bg-center bg-no-repeat bg-[url(/bg.jpg)]'>
      <h1 className='text-xl font-bold underline text-yellow-700'>Your Notes</h1>

       <div className='flex flex-wrap gap-5 mt-5 overflow-auto h-[90%]'>

      {task.map(function(elem,idx){

        return <div key={idx} className='relative 
        h-52 w-40 bg-cover text-yellow-700 p-4  rounded-xl bg-[url(bg2.jpg)]'>
          <button onClick={()=>{
                deleteNote(idx)
          }} className='absolute active:bg-red-600 top-3 right-4 text-xs cursor-pointer active:scale-75 bg-gray-900 rounded-full'><X size={16} strokeWidth={2.75}/></button>
          <h3 className='leading-tight text-xl font-bold underline ml-3'>{elem.title}</h3>
          
          <p className='mt-1 ml-3 leading-tight font-medium text-gray-400'>{elem.details}</p>
        </div>
        
      })}
       </div>
      </div>
    </div>
  )
}
export default App 
