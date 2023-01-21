import axios from "axios";
import {toast } from 'react-toastify';
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
      <th>delete</th>

    </tr>
  </thead>
  <tbody>
    {td}
  </tbody>
</table>
    </> );
}
 
export default PlanDash;