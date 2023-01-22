import React from 'react';
import PlanDash from './PlanDash';

import SideBar from "./SideBar";
import UserDash from './UserDash';
import PaymentDash from "./PaymentDash"
import CoverDash from "./CoverDash"
import axios from 'axios';
import Loading from '../Loainding/Loading';
import jwt_decode from "jwt-decode";
import CustomModal from './CustomModal';

import { toast } from 'react-toastify';



const Admin = () => {
    const user = jwt_decode(JSON.parse(localStorage.getItem('jwt')).value);
    const [page,setPage] = React.useState(0)
    const [state,setState] = React.useState({page:0,url:"/user"})
    const [isAuth,setIsAuth] = React.useState(JSON.parse(localStorage.getItem('jwt'))!==null&&user.is_admin)
    const [isLoading,setIsLoading] = React.useState(true)
    const [data,setData] = React.useState([])
    const [isShow,setIsShow] = React.useState(false)
    const [showData,setShowData] = React.useState({
        name:"",
        desc:"",
        confirm:()=>{}
    })
    
    React.useEffect(()=>{
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
      success: {onClose: () => window.location.reload(false),
        render(){
          return "Success"
        }},
      error: {onClose: () =>window.location.reload(false),
        render(){
          return 'Something went wrong.'
        }}
    },{
      position: toast.POSITION.TOP_CENTER
    }
        )
    }

    const showModal = (inp)=>{
        setShowData({
        name:inp.name,
        desc:inp.desc,
        confirm:()=>inp.func,
        button:inp.button
    })
        setIsShow(true)
    }

    const pages = [
    <UserDash showModal={(inp)=>showModal(inp)} data={data}/>,
    <PaymentDash showModal={(inp)=>showModal(inp)} confirmPayment={(data)=>{confirmPayment(data)}} data={data}/>,
    <PlanDash showModal={(inp)=>showModal(inp)} data={data}/>,
    <CoverDash showModal={(inp)=>showModal(inp)} data={data}/>
    ]

    return (<>{isAuth?<div className="row m-0" style={{height:"100vh"}} >
        <div className="col-2 p-3  bg-dark bg-gradient text-white" style={{height:"100%",minWidth:"200px"}}>
            <SideBar clickHandler={(n)=>{setState(n)}}/>
        </div>
        <div className="col-10 p-3" style={{height:"100%"}}>
             {isLoading?<Loading/>:pages[state.page]}
        </div>
    </div>:<h2 className="text-center">You are not admin.</h2>}
    <CustomModal showData={showData} show={isShow} onHide={() => setIsShow(false)}/>
    </>
     );
}
 
export default Admin;