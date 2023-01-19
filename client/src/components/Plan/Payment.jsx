import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import QRCode from 'qrcode.react';

import React from 'react';
import { redirect } from "react-router-dom";
import axios from 'axios'
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const generatePayload = require('promptpay-qr');


function Payment(props) {
    console.log(props.insurance);
    const amount = props.insurance.price+(props.insurance.price*0.1)
    const promptPay = generatePayload("0819478436",  {amount})
    const doneHandler = ()=>{
        props.insurance.total_price = amount
        delete props.insurance.name
        delete props.insurance.price
        delete props.insurance.type
        toast.promise(
        axios.post(process.env.REACT_APP_URL + "/insurance", props.insurance),
    {
      pending: 'Pending',
      success: {onClose: () => window.location.href ="/user/insurance",
        render(){
          return "Success"
        }},
      error: 'Something went wrong.',
    },{
      position: toast.POSITION.TOP_CENTER
    }
  )
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
          Payment
        </Modal.Title>
      </Modal.Header>
      <Modal.Body>
       <div className="text-center">
      <img src="https://pp.js.org/img/PromptPay-logo.jpg" alt="propmt" width={150} /><br/>
      <QRCode value={promptPay} />
      <h3>Total : {amount} THB</h3>
    </div>
      </Modal.Body>
      <Modal.Footer>
        <Button className="btn-success" onClick={()=>doneHandler()}>Buy</Button>
      </Modal.Footer>
    </Modal>
    </>
  );}
export default Payment