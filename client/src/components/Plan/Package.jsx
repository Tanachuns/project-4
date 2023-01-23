import Container from "react-bootstrap/esm/Container";
import Row from "react-bootstrap/esm/Row";
import CardComp from "../CardComp/CardComp"
const Package = (props) => {
    return ( <Container>
        <Row>
                <CardComp setPlan={props.setPlan} next={props.next} plan={props.plan}/>
                </Row>
    </Container>  );
}
 
export default Package;