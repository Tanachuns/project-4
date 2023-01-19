import React, { useReducer } from 'react';
import axios from 'axios'
import jwt_decode from "jwt-decode";



import Container from "react-bootstrap/esm/Container";
import Breadcrumb from 'react-bootstrap/Breadcrumb';
import Itinerary from "./Itinerary";
import Package from './Package';
import Loading from "../Loainding/Loading";
import Summary from './Summary';

const Plan = () => {
    const user = jwt_decode(JSON.parse(localStorage.getItem('jwt')).value);
    const [step,setStep] = React.useState(0)
    const [country,setCountry] = React.useState([])
    const [plan,setPlan] = React.useState({
      user_id:user.id
    })
    const [userDetail,setUserDetail] = React.useState({})
    const [isLoading,setIsLoading] = React.useState(true)
    
    React.useEffect(()=>{
      axios.get("https://restcountries.com/v3.1/all").then(res=>{
        setCountry(res.data)
      })
      axios.get(process.env.REACT_APP_URL+"/user/"+user.id,{
            headers: {'Authorization': 'Bearer '+JSON.parse(localStorage.getItem('jwt')).value}
        }).then((res)=>{
            setUserDetail(res.data)
        }).then(()=>{
            setIsLoading(false)
        })
    },[])

    const submitHandler = (e) => {
    e.preventDefault()
    setPlan((prevState) => ({
      ...prevState,
      [e.target.name]: e.target.value,
    }));
  };

    const nextHandler = (e)=>{
      if(e){
        e.preventDefault()
      }
      setStep(prev=>prev+=1)
    }
    

    const pages = [
    <Itinerary country={country} next={(e)=>nextHandler(e)} change={(e)=>submitHandler(e)} plan={plan}/>,
    <Package next={(e)=>nextHandler(e)} change={(e)=>submitHandler(e)} setPlan={setPlan} plan={plan}/>,
    <Summary user={userDetail} plan={plan} />]


    return ( <>
    {isLoading?<Loading/>:
    <Container>
     <Breadcrumb className="d-flex justify-content-center">
      <Breadcrumb.Item onClick={()=>{setStep(0)}} active={step===0} >Itinerary Details</Breadcrumb.Item>
      <Breadcrumb.Item onClick={()=>{setStep(1)}} active={step===1}>Choose Plan</Breadcrumb.Item>
      <Breadcrumb.Item onClick={()=>{setStep(2)}} active={step===2}>Summary&Payment</Breadcrumb.Item>
    </Breadcrumb>
    {pages[step]}
    </Container>}
    </> );
}
 
export default Plan;