import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link, useNavigate,redirect } from 'react-router-dom';
import { Toaster } from 'react-hot-toast';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import toast from 'react-hot-toast';
import { registerUserAction } from '../../redux/actions/authActions';
import { clearErrors } from '../../redux/slices/authSlice';
const Signup = () => {
  const [userName, setUserName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [message,setmessage]=useState("")
  const storeData = useSelector((store) => store.auth);
  const { loading, appErr, serverErr, registered } = storeData;
 

  const registerHandler = async (e) => {
    e.preventDefault();
    dispatch(clearErrors()); 
    const user = {
      userName: userName,
      email: email,
      password: password,
    };
  
    try {
      await dispatch(registerUserAction(user));
      
      if(appErr||serverErr){
        toast.error(appErr||serverErr)
      }
    } catch (error) {
      // Handle unexpected errors
      toast.error('An unexpected error occurred');
    
    }

   
  };

  if (registered) {
    toast.success('Registered successfully');
    setUserName('');
    setEmail('');
    setPassword('');
    navigate("/login");
  }
  
  


  return (
    <div className='border mt-5 rounded' style={{ width: 1000, margin: '0px auto' }}>
      <h5 className='text-center mt-3'>Signup</h5>
     
      <div className='d-flex column justify-content-around align-items-center'>
        <Form style={{ width: 500 }} onSubmit={registerHandler}>
        {message ?<p className='text-danger' >{message}</p>:<p></p>}
          <Form.Group className='mb-3' controlId='formGroupUsername' autoFocus='true'>
            <Form.Label>Username</Form.Label>
            <Form.Control type='text' placeholder='Enter username' required onChange={(e) => setUserName(e.target.value)} />
          </Form.Group>
          <Form.Group className='mb-3' controlId='formGroupEmail' autoFocus='true'>
            <Form.Label>Email address</Form.Label>
            <Form.Control type='email' placeholder='Enter email' required onChange={(e) => setEmail(e.target.value)} />
          </Form.Group>
          <Form.Group className='mb-3' controlId='formGroupPassword' autoFocus='true'>
            <Form.Label>Password</Form.Label>
            <Form.Control type='password' placeholder='Password' onChange={(e) => setPassword(e.target.value)} required />
          </Form.Group>
          <Button className='btn btn-primary' style={{ width: '100%' }} type='submit' disabled={loading}>
            {loading ? 'Loading...' : 'Signup'}
          </Button>
        </Form>
        <div>
          <img src='/signup.avif' alt='Signup Image' width='400' />
          <p>
            Don't have any account! <Link to='/login' className='text-primary'>Login now</Link>
          </p>
        </div>
      </div>
   
      <Toaster position='top-right'  />
     
    </div>
  );
};

export default Signup;
