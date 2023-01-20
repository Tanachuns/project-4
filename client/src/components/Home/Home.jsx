import Container from "react-bootstrap/esm/Container";
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import {Link} from "react-router-dom";
import React from 'react';


import "./Home.css"
import Login from "../Login/Login"

const Home = () => {
  const [isLoggedIn,setIsLoggedIn] = React.useState(false)
  const [isAuth,setIsAuth] = React.useState(JSON.parse(localStorage.getItem('jwt'))!==null)
  const jwt = localStorage.getItem("jwt")
 React.useEffect(()=>{
    if(jwt){
      if(jwt.exp< new Date()){
        localStorage.removeItem('jwt')
      }
      else{
        setIsAuth(true)
      }
    }
    else{
      setIsAuth(false)
   }
  },[jwt])

    return (<>
        <div className="home-banner">
            <Row>
                <Col>
                    <div className="banner-left">
                         <img
                src="./src/images/logo.png"
                width="100"
                height="100"
                className="d-inline-block align-top"
                alt="React Bootstrap logo"
              />
                        <h1><b>Come Fly With Me</b></h1>
                        <h3>You're Fine with me</h3>
                    </div>
                </Col>
                <Col>
                    <div className="banner-right">
                         {isAuth? <Link to="/plan" ><button className="btn btn-success" type="button">Buy now</button></Link>:
                         <button onClick={(e)=>{
                            e.preventDefault() 
                            setIsLoggedIn(true)}
                            }  className="btn btn-success" type="button">Buy now</button>}
                       
                        
                    </div>
                </Col>
            
            </Row>
            </div>
            <br/>
            <Container>
                <h2>Plans</h2>
                
                <h2>Ads</h2>
                <Row>
                         <img src="https://www.wordstream.com/wp-content/uploads/2021/07/persuasive-ads-coca-cola-1.jpg" alt="" />
                </Row>
            </Container>
            <Login show={isLoggedIn} onHide={() => setIsLoggedIn(false)}/>

            </>
      );
}
 
export default Home;