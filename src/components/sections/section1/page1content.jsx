import React from 'react'
import LeftContent from './leftContent.jsx'
import RightContent from './rightContent.jsx'
const Page1Content = (props) => {
  return (
    <div className='flex items-center gap-20 justify-between py-3 h-[90vh]  px-18'>
      <LeftContent />
      <RightContent user={props.user}/>
    </div>
  )
}

export default Page1Content