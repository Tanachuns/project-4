import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import "./Footer.css"
const Footer = () => {
    return (  <div className="footer bg-dark text-light">
        <Row>
                <Col>
                    <div className="banner-left">
                        <h1>Come Fly With Me</h1>
                        Created by <a style={{textDecoration:"none" ,color:"gray"}} href="https://github.com/Tanachuns">@TanaChuns</a>
                    </div>
                </Col>
                <Col>
                    <div className="banner-right">
                        
                    </div>
                </Col>
            </Row> 
    </div>);
}
 
export default Footer;