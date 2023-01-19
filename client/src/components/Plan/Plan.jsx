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
    const pages = [<Itinerary country={country} />,<Package/>,<SubmitPlan/>,<Payment/>]
    
    React.useEffect(()=>{
      axios.get("https://restcountries.com/v3.1/all").then(res=>{
        setCountry(res.data)
      })
    },[])
     

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