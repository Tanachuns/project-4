import React from 'react';


import Container from "react-bootstrap/esm/Container";
import Filter from "./Filter";
import Package from './Package';

const Plan = () => {
    const [step,setStep] = React.useState(0)
    const pages = [<Filter/>,<Package/>]
    return ( <Container>
            {pages[step]}
            {step>0&&<button className="btn btn-primary" type="button" onClick={()=>{setStep(prev => prev-=1)}}>Back</button>}
            <button className="btn btn-primary" type="button" onClick={()=>{setStep(prev => prev+=1)}}>Next</button>
    </Container> );
}
 
export default Plan;