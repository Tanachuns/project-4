
import Container from "react-bootstrap/esm/Container";
import Table from 'react-bootstrap/Table';
import React from 'react';
import axios from 'axios'
import jwt_decode from "jwt-decode";



const Insutance = () => {
    // const [insurance,setInsuence] = React.useState([])
    // const user = jwt_decode(localStorage.getItem('jwt'));

    // React.useEffect(()=>{
    //     axios.get(process.env.REACT_APP_URL+"/user/insurance/"+user.id,{
    //         headers: {'Authorization': 'Bearer '+localStorage.getItem('jwt')}
    //     }).then((res)=>{
    //         setInsuence(res.data.insurance)
    //         console.log(res.data);
    //     })
    // },[])
    // console.log(insurance);
    // const insurElement = insurance.map((item)=>{
    //     item.return_date = item.return_date.split("T")
    //     item.deperture_date = item.deperture_date.split("T")
    //     return (<tr>
    //       <td>{item.id}</td>
    //       <td>{item.plan.name}</td>
    //       <td>{item.total_price}</td>
    //       <td>{item.destination}</td>
    //       <td>{item.return_date[0]}</td>
    //       <td>{item.deperture_date[0]}</td>
    //       <td>{item.payment_status?"Succeeded":"Processing"}</td>
    //     </tr>)
    // })
    return ( <>
    <Container >
        <h1>My Insurance</h1>

    {/* <form onChange={(e)=>{submitHandler(e)}} onSubmit={(e)=>regHandler(e)}> */}
        <div className="d-flex justify-content-center my-5">
            <form className="" >
        <div className="form-group row my-3" style={{maxHeight:"10%"}}>
            <div class="col-2">
                <input type="text" className="form-control" list="title" placeholder='Title' name='title' />
                <datalist id="title">
                <option>Mr.</option>
                <option>Miss.</option>
                <option>Mrs.</option>
                </datalist>
            </div>    
            <div class="col-5">
                <input type="text" className="form-control" name='first_name' id="first_name" placeholder="Firstname" required />
            </div>
            <div class="col-5">
            <input type="text" className="form-control" name='last_name' id="last_name" placeholder="Lastname" />
            </div>
        </div>
        <div className="form-group my-3">
            <div class="">
                <input type="text" className="form-control"name='citizen_id' id="citizen_id" placeholder="Citizen ID" />
            </div>
        </div>
        <div className="form-group my-3">
            <div>
                <input type="date" className="form-control" name='birth_date' id="birth_date"/>
            </div>  
        </div>
        <div className="form-group my-3">
            <div class="">
                <textarea rows="3" className="form-control" name='address' id="address" placeholder="Address"></textarea>
            </div>  
        </div>
        <div className="form-group my-3">
            <div class="">
                <input type="text" className="form-control" name='phone_number' id="phone_number" placeholder="(XX)X-XXX-XXXX" />
            </div>  
        </div>
        <div className="form-group my-3">
            <div class="">
                <input type="email" name="email" className="form-control" id="email" aria-describedby="emailHelp" placeholder="email" required/>
            </div>  
        </div>
        <div className="form-group my-3">
            <div class="">
                <input type="password" name="password" className="form-control" id="password" placeholder="Password" required/>
            </div>  
        </div>
        <div className="form-group my-3">
            <div class="">
                <input type="password" name="password2" className="form-control" id="confirmpassword" placeholder="Password Again" required/>
            </div>  
        </div>
        <button type="submit" className="btn btn-warning float-right">Edit</button>
  </form>        
        </div>
    </Container>
    </> );
}
 
export default Insutance;