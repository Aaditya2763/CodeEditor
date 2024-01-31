import Button from 'react-bootstrap/Button';
import React from 'react'
import Form from 'react-bootstrap/Form';
import { Link } from 'react-router-dom';
const Signup = () => {
  return (
  <div className='border mt-5 rounded' style={{width:1000,margin:"0px auto"}}>
    <h5 className='text-center mt-3'>Signup</h5>
   <div className='d-flex column   justify-content-around align-items-center'>
   <Form style={{width:500}}>
   <Form.Group className="mb-3" controlId="formGroupUsername" autoFocus='true' >
        <Form.Label>Username</Form.Label>
        <Form.Control type="text" placeholder="Enter username" required />
      </Form.Group>
      <Form.Group className="mb-3" controlId="formGroupUsername" autoFocus='true' >
        <Form.Label>Email address</Form.Label>
        <Form.Control type="email" placeholder="Enter email" required/>
      </Form.Group>
      <Form.Group className="mb-3" controlId="formGroupPassword" autoFocus='true'>
        <Form.Label>Password</Form.Label>
        <Form.Control type="password" placeholder="Password"   required/>
      </Form.Group>
      <Button className="btn btn-primary" style={{width:"100%"}} type='submit'>Signup</Button>
    </Form>
    <div>
    <img src='/signup.avif' width="400"></img>
    <p>Don't have any account ! <Link to="/login" className='text-primary'>Login now</Link></p>
    </div>
   </div>
  </div>
  )
}

export default Signup