import React from 'react'
import Navbar from './navbar.jsx'
import Page1content from './page1content.jsx'
const section1 = (props) => {
  /*console.log(props.user);*/
  
  return (
    <div className='h-screen w-full'>
      <Navbar />
      <Page1content user={props.user}/> 
    </div>
  )
}

export default section1
