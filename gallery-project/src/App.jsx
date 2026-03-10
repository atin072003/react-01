import React, { useEffect, useState } from 'react'
import axios from 'axios'
import Card from './components/Card';
const App = () => {

  const[data,setData] = useState([])

  const[index,setIndex] = useState(1);

 const getData = async () => {

   const response = await axios.get(`https://picsum.photos/v2/list?page=${index}&limit=10`)

   setData(response.data)
   console.log(response.data);
   
 }

 useEffect(function(){
  getData()
 },[index])

 let printUserData = <h3 className='text-white absolute top-1/2 left-1/2 right-1/2 bottom-1/2 text-xs'>Loading...</h3>

 if(data.length > 0){
  printUserData = data.map(function (elem , idx){

    return <div key={idx}>
     <Card elem={elem}/>
    </div>
  })
 }
  return (
    <div className='overflow-auto text-white bg-black h-screen'>
      <div>
          { index===1 && <h1 className='items-center text-center text-2xl text-black bg-yellow-500 font-bold mb-4 rounded h-10 overflow-auto '>Explore Gallery</h1>}
      </div>
      {/* <h1 className='bg-red-600 text-6xl fixed'>{index}</h1> */}
      {/* <button onClick={getData} className='bg-red-700  m-3 p-2 rounded-full active:scale-85 text-white font-bold active:bg-amber-300'>Get Data
      </button> */}
      <div className='h-[86%] flex flex-wrap gap-4 px-7 py-2'>
        {printUserData}
      </div>
      <div className='flex p-4 items-center gap-6 justify-center'>
        <button style={{opacity : index==1 ? 0.5 : 1}} className='bg-amber-400 px-4 py-2 items-center rounded text-black font-semibold cursor-pointer active:scale-95' onClick={() => {
          if(index > 1){
            setIndex(index-1)
            setData([])
          }
        }}>Prev</button>
        <h4>Page {index}</h4>
        <button className='bg-amber-400 px-4 py-2 items-center rounded text-black font-semibold cursor-pointer active:scale-95' onClick={() => {
          setData([])
          setIndex(index+1)
        }}>Next</button>
      </div>
    </div>
  )
}

export default App
