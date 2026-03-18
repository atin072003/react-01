import React, { useContext, useState } from 'react'
import NewTask from '../TaskList/NewTask'
import { AuthContext } from '../../context/AuthProvider'

const CreateTask = () => {

   const [userData,setUserData] = useContext(AuthContext)

const[taskTitle,setTaskTitle]=useState('')
const[taskDescription,setTaskDescription]=useState('')
const[taskDate,setTaskDate]=useState('')
const[assignTo,setAssignTo]=useState('')
const[category,setCategory]=useState('')

const[Task,setTask] = useState({})

  const submitHandler = (e) => {
      e.preventDefault()

      setTask({taskTitle,taskDescription,taskDate,category,active:false,newTask:true,failed:false,completed:false})
    
    const data = userData

     data.forEach(function(elem){
         if(assignTo == elem.firstName){
             elem.tasks.push(Task)
             elem.taskNumbers.Task = elem.taskNumbers.Task + 1
      
     } 
     })
     // localStorage.setItem('employees',JSON.stringify(data))
     setUserData(data)
     console.log(data);
     

     setAssignTo('')
     setCategory('')
     setTaskTitle('')
     setTaskDate('')
     setTaskDescription('')
  }
  return (
     <div className='mt-4 rounded'>

     
      <div className='bg-violet-400 p-5 rounded'>
        <form onSubmit={(e)=>{
              submitHandler(e)
        }}  className='flex flex-wrap w-full justify-between items-center ' action="">
            
            <div className='w-1/2'>

            
                <div>
                    <h3 className='font-semibold text-sm mb-0.5'>Task Title</h3>
            <input value={taskTitle} onChange={(e)=>{
              setTaskTitle(e.target.value)
            }}
             className='bg-violet-300 text-sm py-1 px-2 border-2 w-full mb-0.5' type="text" placeholder='Make a UI design' />
            </div>
            <div className=''>
                     
                <h3 className='font-semibold text-sm mb-0.5'>Date</h3>
            <input value={taskDate} onChange={(e)=>{
              setTaskDate(e.target.value)
            }} className='text-sm py-1 px-2 bg-violet-300 border-2  w-full mb-0.5' type="date" />
            </div>

           <div>
             <h3 className='font-semibold text-sm mb-0.5'>Assign to</h3>
            <input value={assignTo} onChange={(e)=>{
              setAssignTo(e.target.value)
            }} className='text-sm py-1 px-2 bg-violet-300 border-2 w-full mb-0.5' type="text" placeholder='employee name' />

             <h3 className='font-semibold text-xl mb-0.5'>Category</h3>
            <input value={category} onChange={(e)=>{
              setCategory(e.target.value)
            }} className='bg-violet-300 py-1 px-2 text-sm border-2 w-full mb-0.5' type="text" placeholder='design,dev,etc..' />
           </div>
           

            </div>
            

           <div className='w-2/5 flex flex-col items-start'>
             <h3 className='text-sm font-semibold mb-0.5'>Description</h3>
            <textarea value={taskDescription} onChange={(e)=>{
              setTaskDescription(e.target.value)
            }} className= 'w-full h-44 bg-transparent text-sm outline-none border rounded py-2 px-4' name="" id="" ></textarea>

            <button className='w-full bg-violet-700 rounded px-5 py-3 mt-4 mb-2 active:scale-95 hover:bg-green-400 text-sm'> Create Task</button>
            
            
           </div>
        </form>
      </div>
    </div>
  )
}

export default CreateTask
