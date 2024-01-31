import React from 'react'
import Activities from '../activities/Activities'
import Editor from '../editor/EditorBox'
import CompilorBox from '../compilor/compilor'

const Home = () => {
  return (
    <div className='d-flex row justify-content-center rounded '  style={{width:"100%"}}>
     <div className='align-items-center border border-primary rounded' style={{width:"auto",height:"88vh"}}>
        <Activities/></div> 
     <div className='border border-primary rounded' style={{width:"40%",height:"88vh"}}>
        
         <Editor/></div>    

     <div className='border border-primary rounded' style={{width:"30%",height:"88vh"}}><CompilorBox/></div>    

    </div>
  )
}

export default Home