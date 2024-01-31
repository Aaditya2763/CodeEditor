import Button from 'react-bootstrap/Button';
import React,{useState} from 'react'
import Form from 'react-bootstrap/Form';
import { Link } from 'react-router-dom';
import { useDispatch, useSelector } from "react-redux";
import { registerUserAction } from '../../redux/actions/authActions';
const Signup = () => {
  const [userName, setuserName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const dispatch = useDispatch();

  const storeData=useSelector(store=>store.auth);
  const {loading,appErr,serverErr,registered,userAuth}=storeData;
  
  const registerHandler = async (e) => {
    e.preventDefault();
const user={
  userName:userName,
 
  email:email,
  password:password
}
    try {
      dispatch(registerUserAction(user))
      setuserName("")
        setEmail("")
        setPassword("")
        
    
    } catch (error) {
      console.log("hello")
    }
    }
   
  return (
  <div className='border mt-5 rounded' style={{width:1000,margin:"0px auto"}}>
    <h5 className='text-center mt-3'>Signup</h5>
   <div className='d-flex column   justify-content-around align-items-center'>
   <Form style={{width:500}} onSubmit={registerHandler}>
   <Form.Group className="mb-3" controlId="formGroupUsername" autoFocus='true' >
        <Form.Label>Username</Form.Label>
        <Form.Control type="text" placeholder="Enter username" required  onChange={(e)=>setuserName(e.target.value)}/>
      </Form.Group>
      <Form.Group className="mb-3" controlId="formGroupEmail" autoFocus='true' >
        <Form.Label>Email address</Form.Label>
        <Form.Control type="email" placeholder="Enter email" required onChange={(e)=>setEmail(e.target.value)}/>
      </Form.Group>
      <Form.Group className="mb-3" controlId="formGroupPassword" autoFocus='true'>
        <Form.Label>Password</Form.Label>
        <Form.Control type="password" placeholder="Password" onChange={(e)=>setPassword(e.target.value)}   required/>
      </Form.Group>
      <Button className="btn btn-primary" style={{width:"100%"}} type='submit'>{loading?"loading":"Signup"}</Button>
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