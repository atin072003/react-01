 import React from 'react'
import NavBar from './NavBar'
import Page1content from './page1content'


 const Section1 = (props) => {
  console.log(props.users);

   return (
    <div className='h-screen w-full'>
        <NavBar />
        <Page1content  users = {props.users} />
        
    </div>
   )
 }
 
 export default Section1
 