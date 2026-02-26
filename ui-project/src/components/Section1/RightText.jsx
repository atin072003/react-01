import React from 'react'
import 'remixicon/fonts/remixicon.css'
import RightCard from './RightCard'


const RightText = (props) => {
  console.log(props.users);

  return (
    <div id='right' className='h-full p-6 w-2/3  flex flex-nowrap gap-5 overflow-x-auto'>  
       {props.users.map(function(elem,idx){

        return <RightCard  key={idx} id={idx} img = {elem.img} intro = {elem.intro} color = {elem.color} tag = {elem.tag}/>
       })} 
        
        
    </div>
  )
}

export default RightText
