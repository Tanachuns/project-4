import axios from "axios";
import {toast } from 'react-toastify';
import PlanForm from "./PlanForm";
const PlanDash = (props) => {
    if (props.data.length===0) {
      return <h1>Plan</h1>
    }

     const deleteRow = (id) =>{
      toast.promise(
      axios.post(process.env.REACT_APP_URL + "/plan/"+id+"/delete",id,{
            headers: {'Authorization': 'Bearer '+JSON.parse(localStorage.getItem('jwt')).value}
        }),
    {
      pending: 'Pending',
      success: {onClose: () => window.location.reload(false),
        render(){
          return "Success"
        }},
      error: {
        render(){
          return 'Something went wrong.'
        }}
    },{
      position: toast.POSITION.TOP_CENTER
    }
  )
    }

   const editHandler = (e)=>{
    console.log({
        name:e.target.name.value,
        plan_price:e.target.plan_price.value,
        type:e.target.type.value,
        unit:e.target.unit.value
      });
      e.preventDefault()
      toast.promise(
      axios.post(process.env.REACT_APP_URL + "/plan/"+e.target.planID.value+"/update", {
        name:e.target.name.value,
        plan_price:parseInt(e.target.plan_price.value),
        type:e.target.type.value,
        unit:e.target.unit.value
      },{
            headers: {'Authorization': 'Bearer '+   JSON.parse(localStorage.getItem('jwt')).value}
        }),
    {
      pending: 'Pending',
      success: 'Success 👌',
      error: "Something went wrong",
    },{
      position: toast.POSITION.TOP_CENTER
    }
  )
    }

    const createHandler = (e)=>{
    console.log({
        name:e.target.name.value,
        plan_price:e.target.plan_price.value,
        type:e.target.type.value,
        unit:e.target.unit.value
      });
      e.preventDefault()
      toast.promise(
      axios.post(process.env.REACT_APP_URL + "/plan/"+e.target.planID.value, {
        name:e.target.name.value,
        plan_price:parseInt(e.target.plan_price.value),
        type:e.target.type.value,
        unit:e.target.unit.value
      },{
            headers: {'Authorization': 'Bearer '+   JSON.parse(localStorage.getItem('jwt')).value}
        }),
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
      <td>{item.name}</td>
      <td>{item.type}</td>
      <td>{item.plan_price}</td>
      <td>{item.unit}</td>
      <td>{item.cover!==undefined&&item.cover.map(item=>item.id+",")}</td>
       <td><button onClick={
        ()=>props.showModal({
        name:"Edit Plan",
        desc:<PlanForm editHandler={(e)=>editHandler(e)} data={item}/>,
        func: ()=>{},
        button:true
      })
        } className="btn btn-warning" type="button">Edit</button></td>
      <td><button onClick={
        ()=>props.showModal({
        name:"Confirm Delete",
        desc:"Delete id "+item.id,
        func: ()=>deleteRow(item.id)
      })
        } className="btn btn-danger" type="button">Delete</button></td>
        
    </tr>
    })
    return ( <>
    <h1>Plan</h1>
    <table className="table">
  <thead>
    <tr>
      {th}
      <th>edit</th>
      <th>delete</th>

    </tr>
  </thead>
  <tbody>
    {td}
  </tbody>
</table>
<button onClick={
        ()=>props.showModal({
        name:"Edit Plan",
        desc:<PlanForm editHandler={(e)=>createHandler(e)} data={{}}/>,
        func: ()=>{},
        button:true
      })
        } className="btn btn-success" type="button">Add</button>
    </> );
}
 
export default PlanDash;