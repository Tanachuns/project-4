import Container from "react-bootstrap/esm/Container";
import Payment from "./Payment";
import React from 'react';
import { toast } from 'react-toastify';


const Summary = (props) => {
  const [isShowPayment,setIsShowPayment] = React.useState(false)
    const confirmHandler = ()=>{
          if(props.plan.price===undefined){
              toast.warn("Choose Your Plan First.",{
      position: toast.POSITION.TOP_CENTER
    })
            }
          else{
            console.log("props",props.plan.total_price);
            setIsShowPayment(true)
          }
          }
   
    return (<> <Container>
        <div className="table-responsive">
        <table className="table">
          <tbody>
            <h3>User Details</h3>
            <tr>
              <th scope="row">Firstname</th>
              <td>{props.user.first_name}</td>
            </tr>
            <tr>
              <th scope="row">Lastname</th>
              <td>{props.user.last_name}</td>
            </tr>
            <tr>
              <th scope="row">Birthdate</th>
              <td>{props.user.birth_date.split("T")[0]}</td>
            </tr>
            <tr>
              <th scope="row">Citizen ID</th>
              <td>{props.user.citizen_id}</td>
            </tr>
            <tr>
              <th scope="row">Email</th>
              <td>{props.user.email}</td>
            </tr>
            <tr>
              <th scope="row">Address</th>
              <td>{props.user.address}</td>
            </tr>
            <tr>
              <th scope="row">Phone Number</th>
              <td>{props.user.phone_number}</td>
            </tr>
<br/>
            <h3>Insurance Details</h3>
            <tr>
              <th scope="row">Plan</th>
              <td>{props.plan.name}</td>
            </tr>
            <tr>
              <th scope="row">Type</th>
              <td>{props.plan.type}</td>
            </tr>
            <tr>
              <th scope="row">Destination</th>
              <td>{props.plan.destination}</td>
            </tr>
            <tr>
              <th scope="row">Departure</th>
              <td>{props.plan.departure_date}</td>
            </tr>
            <tr>
              <th scope="row">Return</th>
              <td>{props.plan.return_date}</td>
            </tr>
            <tr>
              <th scope="row">Plan Price</th>
              <td>{props.plan.price} THB</td>
            </tr>
            <tr>
              <th scope="row">Total(include 10% service charge)</th>
               <td>{props.plan.price+(props.plan.price*0.1)} THB</td>
            </tr>
          </tbody>
        </table>
        <button onClick={()=>confirmHandler()} className="btn btn-success" type="button">Payment</button>
        </div>
        
    </Container> 
    <Payment insurance={props.plan} show={isShowPayment} onHide={() => setIsShowPayment(false)}/></> );
}
 
export default Summary;