import React from 'react'
import Header from '../other/Header'
import TaskListNumber from '../other/TaskListNumber'
import TaskList from '../TaskList/TaskList'

const EmployeeDahboard = (props) => {

  
  return (
    <div className=' h-screen bg-violet-400 p-7 overflow-auto'>
      
      <Header changeUser={props.changeUser} data={props.data} />
      <TaskListNumber data={props.data} />
      <TaskList data={props.data} />
    </div>
  )
}

export default EmployeeDahboard
