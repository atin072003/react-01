import React from 'react'
import AcceptTask from './AcceptTask'
import NewTask from './NewTask'
import FailedTask from './FailedTask'
import CompleteTask from './CompleteTask'

const TaskList = ({data}) => {
  return (
    <div id='tasklist' className='flex flex-nowrap items-center justify-start h-[55%] w-full py-5 mt-13 gap-5 overflow-x-auto'>
    {data.tasks.map((elem,idx) => {
      if(elem.active){
        return <AcceptTask key = {idx} data = {elem} />
      }
      if(elem.newTask){
        return <NewTask key = {idx} data = {elem} />
      }
      if(elem.completed){
        return <CompleteTask key = {idx} data = {elem} />
      }
      if(elem.failed){
        return <FailedTask key = {idx} data = {elem} />
      }
    })}
         
    </div>
  )
}

export default TaskList
