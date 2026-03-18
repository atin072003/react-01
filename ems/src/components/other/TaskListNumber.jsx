import React from 'react'

const TaskListNumber = (props) => {
  
  return (
    <div className='flex screen mt-10 justify-between gap-5'>
      <div className='w-[45%] rounded-xl px-9  py-6 bg-yellow-400'>
        <h2 className='text-3xl font-semibold '>{props.data.taskNumbers.newTask}</h2>
        <h2 className='text-3xl font-medium'> New Task</h2>
      </div>
      <div className='w-[45%] rounded-xl px-9  py-6 bg-green-400'>
        <h2 className='text-3xl font-semibold '>{props.data.taskNumbers.completed}</h2>
        <h2 className='text-3xl font-medium'> Completed Task</h2>
      </div>
      <div className='w-[45%] rounded-xl px-9  py-6 bg-pink-400'>
        <h2 className='text-3xl font-semibold '>{props.data.taskNumbers.active}</h2>
        <h2 className='text-3xl font-medium'> Accepted Task</h2>
      </div>
      <div className='w-[45%] rounded-xl px-9  py-6 bg-red-600'>
        <h2 className='text-3xl font-semibold '>{props.data.taskNumbers.failed}</h2>
        <h2 className='text-3xl font-medium'> Failed Task</h2>
      </div>
    </div>
  )
}

export default TaskListNumber
