import axios from "axios";
import {toast } from 'react-toastify';
const UserDash = (props) => {
     if (props.data.length===0) {
      return <h1>Users</h1>
    }
    
    const deleteRow = (id) =>{
      toast.promise(
      axios.post(process.env.REACT_APP_URL + "/user/"+id+"/delete",id,{
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

    const setAdmin= (id) =>{
      toast.promise(
      axios.post(process.env.REACT_APP_URL + "/user/"+id+"/update",{
        is_admin:true
      },{
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
    })
  }
    

    const th = Object.keys(props.data[0]).map((item)=>{
        return <th scope="col">{item}</th>
    })
    const td = props.data.map((item)=>{
        return  <tr>
      <th scope="row">{item.id}</th>
      <th scope="row">{item.title}</th>
      <th scope="row">{item.email}</th>
      <th scope="row">{item.first_name}</th>
      <th scope="row">{item.last_name}</th>
      <th scope="row">{item.citizen_id}</th>
      <th scope="row">{item.birth_date!==undefined&&item.birth_date!==null&&item.birth_date.split("T")[0]}</th>
      <th scope="row">{item.address}</th>
      <th scope="row">{item.phone_number}</th>
      <th scope="row">-</th>
      <th scope="row">{item.is_admin?"true":"false"}</th>
      <td><button onClick={
        ()=>props.showModal({
        name:"Confirm Delete",
        desc:"Delete id "+item.id,
        func: ()=>deleteRow(item.id)
      })
        } className="btn btn-danger" type="button">Delete</button></td>
        <td><button onClick={
        ()=>props.showModal({
        name:"Confirm Set Admin",
        desc:"Set id "+item.id+" to be Admin?",
        func: ()=>setAdmin(item.id)
      })
        } className="btn btn-warning" type="button">Set Admin</button></td>

    </tr>
    })
    return ( <>
    <h1>Users</h1>
    <table className="table">
  <thead>
    <tr>
      {th}
      <th>delete</th>
      <th>Set Admin</th>

      
    </tr>
  </thead>
  <tbody>
    {td}
  </tbody>
</table>
    </> );
}
 
export default UserDash;