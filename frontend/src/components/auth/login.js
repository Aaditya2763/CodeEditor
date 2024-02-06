import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import React, { useEffect, useState } from 'react';
import toast from 'react-hot-toast';
import { useDispatch, useSelector } from 'react-redux';
import { Link, useNavigate } from 'react-router-dom';
import { loginUserAction } from '../../redux/actions/authActions';
const Login = () => {

  const [email, setEmail] = useState('');
  const [message, setmessage] = useState('');
  const [password, setPassword] = useState('');
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const storeData = useSelector((store) => store.auth);
  const { loading, appErr, serverErr,registered, user } = storeData;
 

 useEffect(() => {
   if(appErr||serverErr){
    setmessage(appErr||serverErr)
   }
 
  setTimeout(() => {
    setmessage("")
  }, 3000);

 }, [dispatch])
 

  const loginHandler = async (e) => {
    e.preventDefault();

    const user = {
     
      email: email,
      password: password,
    };

    try {
     
       await  dispatch(loginUserAction(user));
   
  

    } catch (error) {
      // Handle unexpected errors
      toast.error('An unexpected error occurred');
    
    }
   
  };
 
 

  if (user) {
      // Redirect to the login page
      navigate("/");
      return;
    }


  return (
  <div className='border mt-5 rounded' style={{width:1000,margin:"0px auto"}}>
    <h5 className='text-center mt-3'>Login</h5>
   <div className='d-flex column   justify-content-around align-items-center'>

   <Form style={{width:500}} onSubmit={loginHandler}>
   {message ?<p className='text-danger' >{message}</p>:<p>{""}</p>}

      <Form.Group className="mb-3" controlId="formGroupEmail" autoFocus='true'>
        <Form.Label>Email address</Form.Label>
        <Form.Control type="email" placeholder="Enter email" onChange={(e)=>setEmail(e.target.value)} required/>
      </Form.Group>
      <Form.Group className="mb-3" controlId="formGroupPassword" autoFocus='true'>
        <Form.Label>Password</Form.Label>
        <Form.Control type="password" placeholder="Password" onChange={(e)=>setPassword(e.target.value)} required />
      </Form.Group>
      <Button className="btn btn-primary" style={{width:"100%"}} type='submit'>{loading ? "loading":"Login"}</Button>
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