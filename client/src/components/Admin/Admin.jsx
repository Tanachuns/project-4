import React from 'react';
import PlanDash from './PlanDash';

import SideBar from "./SideBar";
import UserDash from './UserDash';
import PaymentDash from "./PaymentDash"
import CoverDash from "./CoverDash"
import axios from 'axios';
import Loading from '../Loainding/Loading';
import jwt_decode from "jwt-decode";

import { toast } from 'react-toastify';



const Admin = () => {
    const user = jwt_decode(JSON.parse(localStorage.getItem('jwt')).value);
    console.log(user.is_admin);
    const [page,setPage] = React.useState(0)
    const [state,setState] = React.useState({page:0,url:"/user"})
    const [isAuth,setIsAuth] = React.useState(JSON.parse(localStorage.getItem('jwt'))!==null&&user.is_admin)
    const [isLoading,setIsLoading] = React.useState(true)
    const [data,setData] = React.useState([])
    
    React.useEffect(()=>{
        console.log(state);
         axios.get(process.env.REACT_APP_URL+state.url,{
            headers: {'Authorization': 'Bearer '+JSON.parse(localStorage.getItem('jwt')).value}
        }).then((res)=>{
            setData(res.data)
        }).then(()=>{
            setIsLoading(false)
        })
    },[state])

    const confirmPayment = (data) =>{
        toast.promise(
         axios.post(process.env.REACT_APP_URL + "/insurance/"+data.id+"/update", {
            ...data,
            payment_status:true
         }),
    {
      pending: 'Pending',
      success: 'Success 👌',
      error: 'Something went wrong.',
    },{
      position: toast.POSITION.TOP_CENTER
    }
        )
    }

    const pages = [
    <UserDash data={data}/>,
    <PaymentDash confirmPayment={(data)=>{confirmPayment(data)}} data={data}/>,
    <PlanDash data={data}/>,
    <CoverDash data={data}/>
    ]

    return (<>{isAuth?<div className="row m-0" style={{height:"100vh"}} >
        <div className="col-2 p-3  bg-dark bg-gradient text-white" style={{height:"100%"}}>
            <SideBar clickHandler={(n)=>{setState(n)}}/>
        </div>
        <div className="col-10 p-3" style={{height:"100%"}}>
             {isLoading?<Loading/>:pages[state.page]}
        </div>
    </div>:<h2 className="text-center">You are not admin.</h2>}</>
     );
}
 
export default Admin;