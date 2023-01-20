import Container from "react-bootstrap/esm/Container";
import CardComp from "../CardComp/CardComp"
const Package = (props) => {
    console.log("plasdasdasan",props.plan);
    return ( <Container>
        <div className="row">
            <CardComp setPlan={props.setPlan} next={props.next} plan={props.plan}/>
        </div>
    </Container>  );
}
 
export default Package;