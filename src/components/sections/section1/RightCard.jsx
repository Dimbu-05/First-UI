import React from 'react'
import RightCardContent from './RIghtCardContent.jsx'
const RightCard = (props) => {
  return (
    <div className='h-140 shrink-0  relative w-100 rounded-4xl overflow-hidden'>
        <img
            className='h-full w-full object-cover'
            src={props.img}
            alt='hello'
        />
        <RightCardContent tag={props.tag}  color={props.color} intro={props.intro} id ={props.id}/> 

    </div>
  )
}

export default RightCard
