
import Container from "react-bootstrap/esm/Container";
import React from 'react';
import axios from 'axios'
import jwt_decode from "jwt-decode";
import {toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Loading from "../Loainding/Loading";



const Detail = () => {
    const user = jwt_decode(localStorage.getItem('jwt'));
    const [userDetail,setUserDetail] = React.useState({})
    const [isLoading,setIsLoading] = React.useState(true)
    React.useEffect(()=>{
        axios.get(process.env.REACT_APP_URL+"/user/"+user.id,{
            headers: {'Authorization': 'Bearer '+localStorage.getItem('jwt')}
        }).then((res)=>{
            setUserDetail(res.data)
        }).then(()=>{
            setIsLoading(false)
        })
    },[user.id])

    const submitHandler = (e) => {
    e.preventDefault()
    setUserDetail((prevState) => ({
      ...prevState,
      [e.target.name]: e.target.value,
    }));
    
  };


  const editHandler = (e)=>{
    
    e.preventDefault()
    if(e.target.elements.password2.value === e.target.elements.password.value){
      delete userDetail.password2
      toast.promise(
      axios.post(process.env.REACT_APP_URL + "/user/"+user.id+"/update", userDetail,{
            headers: {'Authorization': 'Bearer '+localStorage.getItem('jwt')}
        }),
    {
      pending: 'Working🔧',
      success: 'Success 👌',
      error: "Something went wrong",
    },{
      position: toast.POSITION.TOP_CENTER
    }
  ).then((res) => {
        localStorage.setItem('jwt',res.data.token)
        delete res.data.token
        delete res.data.expireIn
        setUserDetail(res.data)
        setTimeout(() => {
            window.location.reload(false)
        }, 2000);
      })
    }
    else{
      toast.error("Password do not match.", {
        position: toast.POSITION.TOP_CENTER,
        autoClose: 2000
      });
    }
  }
    
    
    return ( <>
    {isLoading?<Loading/>:<Container >
        <h1>My Insurance</h1>
    <div className="d-flex justify-content-center my-5">
    <form onChange={(e)=>{submitHandler(e)}} onSubmit={(e)=>editHandler(e)}>
        <div className="form-group row my-3" style={{maxHeight:"10%"}}>
            <div className="col-2">
                <input type="text" className="form-control" list="title" placeholder='Title' name='title' value={userDetail.title}/>
                <datalist id="title">
                <option>Mr.</option>
                <option>Miss.</option>
                <option>Mrs.</option>
                </datalist>
            </div>    
            <div className="col-5">
                <input type="text" className="form-control" name='first_name' id="first_name" placeholder="Firstname" required value={userDetail.first_name} />
            </div>
            <div className="col-5">
            <input type="text" className="form-control" name='last_name' id="last_name" placeholder="Lastname" value={userDetail.last_name}/>
            </div>
        </div>
        <div className="form-group my-3">
            <div className="">
                <input type="text" className="form-control"name='citizen_id' id="citizen_id" placeholder="Citizen ID" value={userDetail.citizen_id} />
            </div>
        </div>
        <div className="form-group my-3">
            <div>
                <input type="date" className="form-control" name='birth_date' id="birth_date" value={userDetail.birth_date?userDetail.birth_date.split("T")[0]:null} />
            </div>  
        </div>
        <div className="form-group my-3">
            <div className="">
                <textarea rows="3" className="form-control" name='address' id="address" placeholder="Address" value={userDetail.address}></textarea>
            </div>  
        </div>
        <div className="form-group my-3">
            <div className="">
                <input type="text" className="form-control" name='phone_number' id="phone_number" placeholder="(XX)X-XXX-XXXX" value={userDetail.phone_number}/>
            </div>  
        </div>
        <div className="form-group my-3">
            <div className="">
                <input type="email" name="email" className="form-control" id="email" aria-describedby="emailHelp" placeholder="email" required value={userDetail.email}/>
            </div>  
        </div>
        <div className="form-group my-3">
            <div className="">
                <input type="password" name="password" className="form-control" id="password" placeholder="Password" required value={userDetail.password}/>
            </div>  
        </div>
        <div className="form-group my-3">
            <div className="">
                <input type="password" name="password2" className="form-control" id="confirmpassword" placeholder="Password Again" required value={userDetail.password}/>
            </div>  
        </div>
        <button type="submit" className="btn btn-warning float-right">Edit</button>
  </form>        
        </div>
    </Container>}
    </> );
}
 
export default Detail;