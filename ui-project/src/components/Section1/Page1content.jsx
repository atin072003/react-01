import React from 'react'
import LeftText from './LeftText'
import RightText from './RightText'

const Page1content = (props) => {
  return (
    <div className='py-10 px-20  h-[90vh] items-center gap-10 flex '>
      <LeftText />
      <RightText users = {props.users}/>
    </div>
  )
}

export default Page1content
