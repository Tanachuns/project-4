import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import React from 'react';
import axios from 'axios';

import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const Register = (props) => {
  const [regdata,setRegData] = React.useState({})
  const regSuccess = () =>{toast.success("Register Success", {
        position: toast.POSITION.TOP_CENTER
      });};

  const regErr = () =>{toast.warn("Something went wrong, Try again", {
        position: toast.POSITION.TOP_CENTER,
        autoClose: 5000
      });};
  const submitHandler = (e) => {
    e.preventDefault()
    setRegData((prevState) => ({
      ...prevState,
      [e.target.name]: e.target.value,
    }));
    
  };

  const regHandler = (e)=>{
    
    e.preventDefault()
    if(e.target.elements.password2.value === e.target.elements.password.value){
      delete regdata.password2
      toast.promise(
      axios.post(process.env.REACT_APP_URL + "/auth/register", regdata),
    {
      pending: 'Registing',
      success: 'Success 👌',
      error: 'Something went wrong, Try Again',
    }
  ).then((res) => {
        localStorage.setItem("jwt", res.data.token);
        props.onHide()
      })
    }
  }


  
    return ( <><Modal
      {...props}
      size="lg"
      aria-labelledby="contained-modal-title-vcenter"
      centered
    >
      <Modal.Header closeButton>
        <Modal.Title id="contained-modal-title-vcenter">
          Register
        </Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <div className="col-md-6 m-auto">

    <form method='POST' onChange={(e)=>{submitHandler(e)}} onSubmit={(e)=>regHandler(e)}>
      <div className="form-group">
        <label htmlFor="first_name">Title</label><br/>
        <input type="text" list="title" placeholder='Enter Title' name='title' />
        <datalist id="title">
          <option>Mr.</option>
          <option>Miss.</option>
          <option>Mrs.</option>
        </datalist>
      </div>
      <div className="form-group">
         <label htmlFor="first_name">Firstname</label>
        <input type="text" className="form-control" name='first_name' id="first_name" placeholder="Enter Firstname" />
      </div>
      <div className="form-group">
         <label htmlFor="last_name">Lastname</label>
        <input type="text" className="form-control" name='last_name' id="last_name" placeholder="Enter Lastname" />
      </div>
      <div className="form-group">
         <label htmlFor="citizen_id">Citizen ID</label>
        <input type="text" className="form-control"name='citizen_id' id="citizen_id" placeholder="Enter Citizen ID" />
      </div>
      <div className="form-group">
         <label htmlFor="birth_date">Birth Date</label>
        <input type="date" className="form-control" name='birth_date' id="birth_date"/>
      </div>
      <div className="form-group">
         <label htmlFor="birth_date">Address</label>
        <input type="textarea" className="form-control" name='address' id="address" placeholder="Enter Address" />
      </div>
      <div className="form-group">
         <label htmlFor="phone_number">Phone Number</label>
        <input type="text" className="form-control" name='phone_number' id="phone_number" placeholder="(XX)X-XXX-XXXX" />
      </div>
    <div className="form-group">
      <label htmlFor="email">Email address</label>
      <input type="email" name="email" className="form-control" id="email" aria-describedby="emailHelp" placeholder="Enter email" required/>
      <small id="emailHelp" className="form-text text-muted">
        We'll never share your email with anyone else.
      </small>
    </div>
    
    <div className="form-group">
      <label htmlFor="password">Password</label>
      <input type="password" name="password" className="form-control" id="password" placeholder="Password" required/>
    </div>
    <div className="form-group">
      <label htmlFor="confirmpassword">Confirm Password</label>
      <input type="password" name="password2" className="form-control" id="confirmpassword" placeholder="Password Again" required/>
    </div>
    <br/>
    <button type="submit" className="btn btn-primary float-right">
      Register
    </button>
  </form>
</div>
      </Modal.Body>
      <Modal.Footer>
        <Button onClick={props.onHide}>Close</Button>
      </Modal.Footer>
    </Modal>
    </>
    
    );
}
 
export default Register;