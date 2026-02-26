import React from 'react'
import 'remixicon/fonts/remixicon.css'
import Arrow from './Arrow'
import HeroText from './HeroText'

const LeftText = () => {
  return (
    <div className= 'h-full w-1/3 justify-between flex flex-col'>
      <HeroText />
      <Arrow />
      </div>
  )
}

export default LeftText
