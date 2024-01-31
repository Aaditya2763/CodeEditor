import Button from 'react-bootstrap/Button';
import React from 'react'
import Form from 'react-bootstrap/Form';
import { Link } from 'react-router-dom';
const Login = () => {
  return (
  <div className='border mt-5 rounded' style={{width:1000,margin:"0px auto"}}>
    <h5 className='text-center mt-3'>Login</h5>
   <div className='d-flex column   justify-content-around align-items-center'>
   <Form style={{width:500}}>
   
      <Form.Group className="mb-3" controlId="formGroupEmail" autoFocus='true'>
        <Form.Label>Email address</Form.Label>
        <Form.Control type="email" placeholder="Enter email"  required/>
      </Form.Group>
      <Form.Group className="mb-3" controlId="formGroupPassword" autoFocus='true'>
        <Form.Label>Password</Form.Label>
        <Form.Control type="password" placeholder="Password" required />
      </Form.Group>
      <Button className="btn btn-primary" style={{width:"100%"}} type='submit'>Login</Button>
    </Form>
    <div>
    <img src='/login.svg'></img>
    <p>Don't have any account ! <Link to="/signup" className='text-primary'>Signup now</Link></p>
    </div>
   </div>
  </div>
  )
}

export default Login