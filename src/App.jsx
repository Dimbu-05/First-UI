import React from 'react'
import Section1 from './components/sections/section1/section1.jsx'
import Section2 from './components/sections/section2/section2.jsx'
const App = () => {
  const users = [
    {
      img:'https://i.pinimg.com/474x/ce/e1/1a/cee11a1ad91841c70fbe067064df6f2e.jpg',
      intro:'',
      color:'royalblue',
      tag:'Satisfied'
    },
    { 
      img:'https://plus.unsplash.com/premium_photo-1663047358825-db548553dbf7?q=80&w=687&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
      intro:'',
      color:'lightseagreen',
      tag:'Gratified'
    },
    {
      img:'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?fm=jpg&q=60&w=3000&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8cHJvZmVzc2lvbmFsJTIwcG9ydHJhaXR8ZW58MHx8MHx8fDA%3D',
      intro:'',
      color:'orange',
      tag:'Underserved'
    },
    { 
      img:'https://plus.unsplash.com/premium_photo-1683121012522-af48c2ed1841?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
      intro:'',
      color:'black',
      tag:'Underbanked'
    }
   
  ];
  return (
    <div>
      <Section1 user={users} />
      <Section2 />
    </div>
  )
}

export default App
