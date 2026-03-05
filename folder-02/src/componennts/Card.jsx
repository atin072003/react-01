import React from 'react'

const Card = (props) => {
    // console.log(props);
  return (
    <div className='parent'>
    <div className='card'>
        <img src={props.img} alt="" />
        <h1>{props.user}{props.version}</h1>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
        <button>View Profile</button>
      
    </div>
      
    </div>
  )
}

export default Card
