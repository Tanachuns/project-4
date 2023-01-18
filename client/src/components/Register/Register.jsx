import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import React from 'react';
import axios from 'axios';

import {toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const Register = (props) => {
  const [regdata,setRegData] = React.useState({})
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
      pending: 'Working🔧',
      success: 'Success 👌',
      error: {
        render({data}){
          return data.response.data.filed+" is already exists."
        }
      },
    },{
      position: toast.POSITION.TOP_CENTER
    }
  ).then((res) => {
        localStorage.setItem("jwt", res.data.token);
        props.onHide()
      })
    }
    else{
      toast.error("Password do not match.", {
        position: toast.POSITION.TOP_CENTER,
        autoClose: 2000
      });
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
        <form onChange={(e)=>{submitHandler(e)}} onSubmit={(e)=>regHandler(e)}>
        <div className="form-group row my-3" style={{maxHeight:"10%"}}>
            <div className="col-3">
                <input type="text" className="form-control" list="title" placeholder='Title' name='title' />
                <datalist id="title">
                <option>Mr.</option>
                <option>Miss.</option>
                <option>Mrs.</option>
                </datalist>
            </div>    
            <div className="col-4">
                <input type="text" className="form-control" name='first_name' id="first_name" placeholder="Firstname" required />
            </div>
            <div className="col-5">
            <input type="text" className="form-control" name='last_name' id="last_name" placeholder="Lastname" />
            </div>
        </div>
        <div className="form-group my-3">
            <div className="">
                <input type="text" className="form-control"name='citizen_id' id="citizen_id" placeholder="Citizen ID" />
            </div>
        </div>
        <div className="form-group my-3">
            <div>
                <input type="date" className="form-control" name='birth_date' id="birth_date"/>
            </div>  
        </div>
        <div className="form-group my-3">
            <div className="">
                <textarea rows="3" className="form-control" name='address' id="address" placeholder="Address"></textarea>
            </div>  
        </div>
        <div className="form-group my-3">
            <div className="">
                <input type="text" className="form-control" name='phone_number' id="phone_number" placeholder="(XX)X-XXX-XXXX" />
            </div>  
        </div>
        <div className="form-group my-3">
            <div className="">
                <input type="email" name="email" className="form-control" id="email" aria-describedby="emailHelp" placeholder="email" required/>
            </div>  
        </div>
        <div className="form-group my-3">
            <div className="">
                <input type="password" name="password" className="form-control" id="password" placeholder="Password" required/>
            </div>  
        </div>
        <div className="form-group my-3">
            <div className="">
                <input type="password" name="password2" className="form-control" id="confirmpassword" placeholder="Password Again" required/>
            </div>  
        </div>
        <button type="submit" className="btn btn-primary float-right">Register</button>
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