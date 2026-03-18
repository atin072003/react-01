import React from 'react'

const AcceptTask = ({data}) => {
  return (
    <div className='shrink-0 h-full bg-black  w-75 rounded-xl text-white p-5'>
           <div className='flex justify-between  items-center'>
             <h3 className='bg-red-500 px-2 py-0.5 rounded-xl text-white text-sm'>{data.category}</h3>
            <h4 className=' text-sm'>{data.date}</h4>
           </div>
           <h2 className='text-2xl font-bold mt-4'>{data.taskTitle}</h2>
           <p className='text-sm mt-2'>{data.description}

           </p>
           <div className='flex justify-between mt-4'>
            <button className='bg-green-500 py-1 px-2 active:scale-95 text-sm rounded'>Mark as Completed</button>
            <button className='bg-red-500 py-1 px-2 active:scale-95 text-sm rounded'>Mark as Failed</button>
           </div>

        </div>
  )
}

export default AcceptTask
