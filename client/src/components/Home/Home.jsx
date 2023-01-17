import Container from "react-bootstrap/esm/Container";
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import { Route, Routes, Link, Navigate } from "react-router-dom";


import "./Home.css"
import HomeCard from "./HomeCard";

const Home = () => {
    return (<>
        <div className="home-banner">
            <Row>
                <Col>
                    <div className="banner-left">
                        <h1><b>Come Fly With Me</b></h1>
                        <h3>Come Fine with me</h3>
                    </div>
                </Col>
                <Col>
                    <div className="banner-right">
                        <Link to="/plan" ><button className="btn btn-success" type="button">Buy now</button></Link>
                    </div>
                </Col>
            
            
            </Row>
            </div>
            <br/>
            <Container>
                <h2>Plans</h2>
                <Row>
                        <HomeCard/>
                        <HomeCard/>
                        <HomeCard/>
                        <HomeCard/>
                </Row>
                <h2>Ads</h2>
                <Row>
                         <img src="https://www.wordstream.com/wp-content/uploads/2021/07/persuasive-ads-coca-cola-1.jpg" alt="" />
                </Row>
            </Container>
            </>
      );
}
 
export default Home;