import axios from "axios";
import {toast } from 'react-toastify';
const PaymentDash = (props) => {
    if (props.data.length===0) {
      return <h1>Payment</h1>
    }

    const deleteRow = (id) =>{
      toast.promise(
      axios.post(process.env.REACT_APP_URL + "/user/"+id+"/delete",id,{
            headers: {'Authorization': 'Bearer '+JSON.parse(localStorage.getItem('jwt')).value}
        }).catch(e=>console.log(e)),
    {
      pending: 'Pending',
      success: 'Success 👌',
      error: "Something went wrong",
    },{
      position: toast.POSITION.TOP_CENTER
    }
  )
    }

    const th = Object.keys(props.data[0]).map((item)=>{
        return <th scope="col">{item}</th>
    })
    const td = props.data.map((item)=>{
        return  <tr>
      <th scope="row">{item.id}</th>
      <td>{item.plan_id}</td>
      <td>{item.user_id}</td>
      <td>{item.total_price}</td>
      <td>{item.destination}</td>
      <td>{item.departure_date!==undefined&&item.departure_date.split("T")[0]}</td>
      <td>{item.return_date!==undefined&&item.return_date.split("T")[0]}</td>
      <td>{item.payment_status!==undefined&&item.payment_status.toString()}</td>
      <td><button onClick={()=>props.showModal({
        name:"Confirm Payment",
        desc:"Confirm "+item.plan_id+" Payment?",
        func: ()=>props.confirmPayment(item)
      })} className="btn btn-success" type="button">confirm</button></td>
      <td><button onClick={()=>deleteRow(item.id)} className="btn btn-danger" type="button">Delete</button></td>


    </tr>
    })

    return ( <>
    <h1>Payment</h1>
    <table class="table">
  <thead>
    <tr>
      {th}
    <th scope="col">Confirm</th>
      <th>delete</th>

    </tr>
  </thead>
  <tbody>
    {td}
  </tbody>
</table>
    </> );
}
 
export default PaymentDash;