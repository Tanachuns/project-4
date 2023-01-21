import axios from "axios";
import {toast } from 'react-toastify';


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
      <th>delete</th>
    </tr>
  </thead>
  <tbody>
    {td}
  </tbody>
</table>
    </> );
}
 
export default CoverDash;