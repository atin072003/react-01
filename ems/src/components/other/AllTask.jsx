import React, { useContext } from 'react'
import { AuthContext } from '../../context/AuthProvider'

const AllTask = () => {

    const [userData,setUserData] = useContext(AuthContext)
   
    
  return (
   
     <div className='bg-violet-400 p-5 rounded text-sm  mt-5'>
        <div className='bg-black font-bold text-center text-white mb-2 py-2 px-4 flex justify-between rounded'>
            <h2 className='w-1/5 '>Employee Name</h2>
            <h3 className='w-1/5 '>New Task</h3>
            <h5 className='w-1/5 '>Active Task</h5>
            <h5 className='w-1/5 '>Completed</h5>
            <h5 className='w-1/5 '>Failed</h5>
        </div>
       <div className=' overflow-auto'>
         {userData.map(function(elem,idx){

            return   <div key={idx} className='border-2 text-center font-semibold text-white mb-2 py-2 px-4 flex justify-between rounded'>
            <h2 className='w-1/5 text-black'>{elem.firstName}</h2>
            <h3 className='w-1/5 text-gray-500'>{elem.taskNumbers.newTask}</h3>
            <h5 className='w-1/5 text-blue-700'>{elem.taskNumbers.active}</h5>
             <h5 className='w-1/5 text-green-700'>{elem.taskNumbers.completed}</h5>
            <h5 className='w-1/5 text-red-600'>{elem.taskNumbers.failed}</h5>
        </div>
        })}
      
       </div>

         
      
    </div>
   
  )
}

export default AllTask
