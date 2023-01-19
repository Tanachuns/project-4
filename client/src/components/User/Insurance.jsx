
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
        })
    },[user.id])
    console.log(insurance);
    const insurElement = insurance.map((item,index)=>{
        item.return_date = item.return_date.split("T")
        item.deperture_date = item.deperture_date.split("T")
        return (<tr key={index}>
          <td>{item.id}</td>
          <td>{item.plan.name}</td>
          <td>{item.total_price}</td>
          <td>{item.destination}</td>
          <td>{item.return_date[0]}</td>
          <td>{item.deperture_date[0]}</td>
          <td>{item.payment_status?"Succeeded":"Processing"}</td>
        </tr>)
    })
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
            {insurElement}
      </tbody>
    </Table>        
    </Container>}
    </> );
}
 
export default Insutance;