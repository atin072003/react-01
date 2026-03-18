import React from 'react'

const NewTask = ({data}) => {
  return (
    <div className='shrink-0 h-full bg-black  w-75 rounded-xl text-white p-5'>
           <div className='flex justify-between  items-center'>
             <h3 className='bg-red-500 px-2 rounded-xl text-white text-sm'>{data.category}</h3>
            <h4 className=' text-sm'>{data.date}</h4>
           </div>
           <h2 className='text-2xl font-bold mt-4'>{data.taskTitle}</h2>
           <p className='text-sm mt-2'>{data.description}</p>
           <div className='mt-4'>
            <button className='text-sm w-full bg-blue-600 rounded py-1'>Accept Task</button>
           </div>
        </div>
  )
}
export default NewTask
