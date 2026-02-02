import React from 'react'
import RightCard from './RightCard'
const rightContent = (props) => {
  return (
    <div id='right' className='h-full overflow-x-auto w-3/4 p-7 flex flex-nowrap gap-10 '> 
        {props.user.map(function(ele,idx){
            return <RightCard key={idx} color={ele.color} id={idx} img={ele.img} tag={ele.tag} intro={ele.intro}/>
        })}
        </div>
  )
}

export default rightContent
