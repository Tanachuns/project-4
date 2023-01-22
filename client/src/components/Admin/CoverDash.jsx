import axios from "axios";
import {toast } from 'react-toastify';
import CoverForm from "./CoverForm";


const CoverDash = (props) => {
    if (props.data.length===0) {
      return <h1>Cover</h1>
    }
    const deleteRow = (id) =>{
      toast.promise(
      axios.post(process.env.REACT_APP_URL + "/cover/"+id+"/delete",id, {
            headers: {'Authorization': 'Bearer '+   JSON.parse(localStorage.getItem('jwt')).value}
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
  ).then((res) => {
        setTimeout(() => {
            window.location.reload(false)
        }, 2000);
      })
    }

     const editHandler = (e)=>{
      e.preventDefault()
      toast.promise(
      axios.post(process.env.REACT_APP_URL + "/cover/"+e.target.coverID.value+"/update", {
        plan_id:parseInt(e.target.plan_id.value),
        coverage:parseInt(e.target.coverage.value),
        detail:e.target.detail.value,
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
      e.preventDefault()
      toast.promise(
       axios.post(process.env.REACT_APP_URL + "/cover/"+e.target.coverID.value, {
        plan_id:parseInt(e.target.plan_id.value),
        coverage:parseInt(e.target.coverage.value),
        detail:e.target.detail.value,
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
      <td>{item.plan_id}</td>
      <td>{item.detail}</td>
      <td>{item.coverage}</td>
      <td><button onClick={
        ()=>props.showModal({
        name:"Edit Cover",
        desc:<CoverForm editHandler={(e)=>editHandler(e)} data={item}/>,
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
    <h1>Cover</h1>
    <table className="table">
  <thead>
    <tr>
      {th}
      <th>update</th>
      <th>delete</th>
    </tr>
  </thead>
  <tbody>
    {td}
  </tbody>
</table>
<button onClick={
        ()=>props.showModal({
        name:"Create Coverage",
        desc:<CoverForm editHandler={(e)=>createHandler(e)} data={{}}/>,
        func: ()=>{},
        button:true
      })
        } className="btn btn-success" type="button">Add</button>
    </> );
}
 
export default CoverDash;