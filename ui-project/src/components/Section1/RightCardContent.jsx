import React from 'react'

const RightCardContent = (props) => {
  return (
     <div className='absolute top-0 left-0 h-full w-full bg-amber-30 p-6 flex flex-col justify-between'>
            <h2 className='font-bold bg-gray-100 rounded-full h-12 w-12 flex justify-center items-center'>{props.id+1}</h2>
            <div>
                <p className='text-white text-xl leading-relaxed  mt-40'>{props.intro}</p>
            </div>
            <div className='flex justify-between'>
                <button  style = {{backgroundColor:props.color}} className='rounded-full font-medium  text-xl  px-9 py-2'>{props.tag}</button>
                <button style = {{backgroundColor:props.color}} className='rounded-full  font-medium px-5'>
                    <i class="ri-arrow-right-line"></i>
                </button>
            </div>
        </div>
  )
}

export default RightCardContent
