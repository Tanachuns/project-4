import React from 'react';
import axios from 'axios'


import Container from "react-bootstrap/esm/Container";
import Breadcrumb from 'react-bootstrap/Breadcrumb';
import Itinerary from "./Itinerary";
import Package from './Package';
import SubmitPlan from './SubmitPlan'
import Payment  from "./Payment";

const Plan = () => {
    const [step,setStep] = React.useState(0)
    const [country,setCountry] = React.useState([])
    const [plan,setPlan] = React.useState({})
    
    React.useEffect(()=>{
      axios.get("https://restcountries.com/v3.1/all").then(res=>{
        setCountry(res.data)
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
      e.preventDefault()
      console.log(plan);
      
      setStep(prev=>prev+=1)
    }
    

    const pages = [
    <Itinerary country={country} next={(e)=>nextHandler(e)} change={(e)=>submitHandler(e)} plan={plan}/>,
    <Package/>,
    <SubmitPlan/>,
    <Payment/>]


    return ( <>
    <Container>
     <Breadcrumb className="d-flex justify-content-center">
      <Breadcrumb.Item onClick={()=>{setStep(0)}} active={step===0} >Itinerary Details</Breadcrumb.Item>
      <Breadcrumb.Item onClick={()=>{setStep(1)}} active={step===1}>Choose Plan</Breadcrumb.Item>
      <Breadcrumb.Item onClick={()=>{setStep(2)}} active={step===2}>Submit Plan</Breadcrumb.Item>
      <Breadcrumb.Item onClick={()=>{setStep(3)}} active={step===3}>Summary&Payment</Breadcrumb.Item>
    </Breadcrumb>
    {pages[step]}
    </Container>
    </> );
}
 
export default Plan;