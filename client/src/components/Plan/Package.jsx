import Container from "react-bootstrap/esm/Container";
import CardComp from "../CardComp/CardComp"
const Package = (props) => {
    return ( <Container>
                <CardComp setPlan={props.setPlan} next={props.next} plan={props.plan}/>
    </Container>  );
}
 
export default Package;