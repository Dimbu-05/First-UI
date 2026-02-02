import React from 'react' // Fixed: removed extra space before 'from'
import 'remixicon/fonts/remixicon.css'
import Text from './Text'
import Arrow from './Arrow'
const LeftContent = () => {
  return (
    <div className='h-full w-1/3 flex flex-col justify-between'> 
        
        <Text/>
        <Arrow/>
    </div>
  )
}

export default LeftContent
