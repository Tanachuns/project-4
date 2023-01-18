
import Container from "react-bootstrap/esm/Container";
import Table from 'react-bootstrap/Table';
import React from 'react';
import axios from 'axios'
import jwt_decode from "jwt-decode";


const Insutance = () => {
    const [insurance,setInsuence] = React.useState([])
    const user = jwt_decode(localStorage.getItem('jwt'));

    React.useEffect(()=>{
        axios.get(process.env.REACT_APP_URL+"/user/insurance/"+user.id,{
            headers: {'Authorization': 'Bearer '+localStorage.getItem('jwt')}
        }).then((res)=>{
            setInsuence(res.data.insurance)
            console.log(res.data);
        })
    },[])
    console.log(insurance);
    const insurElement = insurance.map((item)=>{
        item.return_date = item.return_date.split("T")
        item.deperture_date = item.deperture_date.split("T")
        return (<tr>
          <td>{item.id}</td>
          <td>{item.plan.name}</td>
          <td>{item.total_price}</td>
          <td>{item.destination}</td>
          <td>{item.return_date[0]}</td>
          <td>{item.deperture_date[0]}</td>
          <td>{item.payment_status.toString()}</td>
        </tr>)
    })
    return ( <>
    <Container>
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
    </Container>
    </> );
}
 
export default Insutance;