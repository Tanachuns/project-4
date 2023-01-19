
import Container from "react-bootstrap/esm/Container";
import Table from 'react-bootstrap/Table';
import React from 'react';
import axios from 'axios'
import jwt_decode from "jwt-decode";
import Loading from "../Loainding/Loading";


const Insutance = () => {
    const [insurance,setInsuence] = React.useState([])
    const user = jwt_decode(JSON.parse(localStorage.getItem('jwt')).value);
    const [isLoading,setIsLoading] = React.useState(true)

    React.useEffect(()=>{
        axios.get(process.env.REACT_APP_URL+"/user/insurance/"+user.id,{
            headers: {'Authorization': 'Bearer '+ JSON.parse(localStorage.getItem('jwt')).value
}
        }).then((res)=>{
            setInsuence(res.data.insurance)
        }).then(()=>{
            setIsLoading(false)
        }).catch(e=>{
          console.log(e);
        })
    },[user.id])
    

    return ( <>
   {isLoading?<Loading/>: <Container>
        <h1>My Insurance</h1>
        <Table striped bordered hover>
      <thead>
        <tr>
          <th>No.</th>
          <th>Plan</th>
          <th>Price</th>
          <th>Destination</th>
          <th>Deperture Date</th>
          <th>Return Date</th>
          <th>Payment Status</th>
        </tr>
      </thead>
      <tbody>
            
    {insurance.map((item,index)=>{
        return (<tr key={index}>
          <td>{item.id}</td>
          <td>{item.plan.name}</td>
          <td>{item.total_price}</td>
          <td>{item.destination}</td>
          <td>{item.departure_date.split("T")[0]}</td>
          <td>{item.return_date.split("T")[0]}</td>
          <td>{item.payment_status?"Succeeded":"Processing"}</td>
        </tr>)
    })}
      </tbody>
    </Table>        
    </Container>}
    </> );
}
 
export default Insutance;