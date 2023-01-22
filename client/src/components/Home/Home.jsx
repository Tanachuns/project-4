import Container from "react-bootstrap/esm/Container";
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import {Link} from "react-router-dom";
import React from 'react';


import "./Home.css"
import Login from "../Login/Login"
import CardComp from "../CardComp/CardComp";

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
        <div className="home-banner" style={{background:"url(https://www.voyagemanager.com/images/bg-02.webp)"}}>
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
                        <h3>Fly with peace of mind, fly with us.</h3>
                        {isAuth? <Link to="/plan" ><button className="btn " type="button" style={{backgroundColor:"#FFA500"}}>Buy now</button></Link>:
                         <button style={{backgroundColor:"#FFA500"}} onClick={(e)=>{
                            e.preventDefault() 
                            setIsLoggedIn(true)}
                            }  className="btn btn-success" type="button">Buy now</button>}  
                    </div>
                </Col>
                <Col>
                    <div className="banner-right">
                                  
                    </div>
                </Col>
            
            </Row>
            </div>
              <img src="" alt="" />
                   
            <Container style={{marginTop:"1em"}} >
              <Row>
                  <h2>Why Come Fly With Me</h2>
                  <p>Don't let unexpected events ruin your vacation plans! Get travel insurance with us and enjoy peace of mind on your next trip. Our coverage includes protection for trip cancellation, medical emergencies, lost luggage, and more. With our reliable and affordable coverage, you can focus on your travels and leave the worries behind. Don't wait, get your travel insurance with us today!</p>
                </Row> 
                <Row>
                <h2>Plans</h2>
                <CardComp/>
                </Row>
                <Row>
                  <h2>FAQ</h2>
                <div class="accordion">
  <div class="accordion-item">
    <h2 class="accordion-header" id="headingOne">
      <button class="accordion-button" type="button" data-bs-toggle="collapse" data-bs-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne">
        What is travel insurance?
      </button>
    </h2>
    <div id="collapseOne" class="accordion-collapse collapse show" aria-labelledby="headingOne" >
      <div class="accordion-body">
        Travel insurance is a type of insurance that covers unexpected events that may occur during a trip, such as trip cancellation, medical emergencies, lost luggage, and more. It can also provide financial protection in case of unexpected events that may occur before or after the trip.
      </div>
    </div>
  </div>
  <div class="accordion-item">
    <h2 class="accordion-header" id="headingTwo">
      <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseTwo" aria-expanded="false" aria-controls="collapseTwo">
        Who should consider getting travel insurance?
      </button>
    </h2>
    <div id="collapseTwo" class="accordion-collapse collapse" aria-labelledby="headingTwo" >
      <div class="accordion-body">
        Anyone planning a trip, should consider getting travel insurance. It can be particularly important for older travelers, those with pre-existing medical conditions, or those traveling to remote or dangerous locations.
      </div>
    </div>
  </div>
  <div class="accordion-item">
    <h2 class="accordion-header" id="headingThree">
      <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseThree" aria-expanded="false" aria-controls="collapseThree">
        What types of coverage does travel insurance offer?
      </button>
    </h2>
    <div id="collapseThree" class="accordion-collapse collapse" aria-labelledby="headingThree">
      <div class="accordion-body">
        Travel insurance typically covers a range of unexpected events, including trip cancellation or interruption, medical emergencies, accidental death or injury, lost or stolen luggage, and travel delay. Some policies may also offer additional coverage options such as rental car damage and trip interruption due to weather.
      </div>
    </div>
  </div>
</div>
                </Row>
            </Container>
            <Login show={isLoggedIn} onHide={() => setIsLoggedIn(false)}/>

            </>
      );
}
 
export default Home;