import React from 'react'

import AcceptTask from './AcceptTask'

const CompleteTask = ({data}) => {
  return (
    <div className='shrink-0 h-full bg-black  w-75 rounded-xl text-white p-5'>
           <div className='flex justify-between  items-center'>
             <h3 className='bg-red-500 px-2 rounded-xl text-white text-sm'>{data.category}</h3>
            <h4 className=' text-sm'>{data.date}</h4>
           </div>
           <h2 className='text-2xl font-bold mt-4'>{data.taskTitle}</h2>
           <p className='text-sm mt-2'>{data.description}</p>
           <div className='mt-4
           '>
            <button className='w-full rounded py-1 bg-green-500'>Completed</button>
           </div>
        </div>
  )
}

export default CompleteTask
