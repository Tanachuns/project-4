import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';

import React from 'react';
import axios from 'axios'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';


function Login(props) {
  const [logindata,setLoginData] = React.useState({})
 const toastId = React.useRef(null);
  const loginSuccess = () =>{
    if(! toast.isActive(toastId.current)) {
      toastId.current = toast.success("Login Success", {
        position: toast.POSITION.TOP_CENTER
      });
    }
    };

  const loginErr = () =>{toast.warn("Email or Password is Incorrect", {
        position: toast.POSITION.TOP_CENTER,
        autoClose: 5000
      });};

  const submitHandler = (e) => {
    e.preventDefault()
    setLoginData((prevState) => ({
      ...prevState,
      [e.target.name]: e.target.value,
    }));
  };

  const loginHandler = (e)=>{
    e.preventDefault()
    toast.promise(
    axios.post(process.env.REACT_APP_URL + "/auth/login", logindata),
    {
      pending: 'Logging',
      success: 'Success 👌',
      error: 'Email or password is incorrect.',
    }
  ).then((res) => {
        localStorage.setItem("jwt", res.data.token);
        props.onHide()
      })
  }

  return (
    <>
    <Modal
      {...props}
      size="lg"
      aria-labelledby="contained-modal-title-vcenter"
      centered
    >
      <Modal.Header closeButton>
        <Modal.Title id="contained-modal-title-vcenter">
          Login
        </Modal.Title>
      </Modal.Header>
      <Modal.Body>
       <div className="col-md-6 m-auto">
         <form method='POST' onChange={(e)=>{submitHandler(e)}} onSubmit={(e)=>loginHandler(e)}>
           <div className="form-group">
             <label htmlFor="email">Email address</label>
             <input type="email" name="email" className="form-control" id="email" aria-describedby="emailHelp" placeholder="Enter email" />
             <small id="emailHelp" className="form-text text-muted">
               Email that you have used while registration.
             </small>
           </div>
           <div className="form-group">
             <label htmlFor="password">Password</label>
             <input type="password" name="password" className="form-control" id="password" placeholder="Password" />
           </div>
           <br/>
           <button type="submit" className="btn btn-primary float-right">
             Login
           </button>
         </form>
       </div>
      </Modal.Body>
      <Modal.Footer>
        <Button onClick={props.onHide}>Close</Button>
      </Modal.Footer>
    </Modal>
    </>
  );}
export default Login