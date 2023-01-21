import Button from 'react-bootstrap/Button';
import Col from 'react-bootstrap/Col';
import Card from 'react-bootstrap/Card';
import Row from 'react-bootstrap/esm/Row';
import React from 'react';
import axios from 'axios';

import Loading from '../Loainding/Loading';


function CardComp(props) {
  const [isLoading,setIsLoading] = React.useState(true)
  const [cardData,setCardData] = React.useState([])

  React.useEffect(()=>{
    axios.get(process.env.REACT_APP_URL+'/plan').then((res)=>{
      setCardData(res.data)
    }).then(()=>{
            setIsLoading(false)
        })
  },[])
  const card = cardData.filter((item)=>{
    return item.type === props.plan.type
  }).map((item)=>{
    return (      <Col>
      <Card style={{ width: '18rem' }}>
            <div className="card-header">
              <b>{item.name}</b>
            </div>
            <ul className="list-group list-group-flush">
              <li className="list-group-item">Type: {item.type}</li>
              <li className="list-group-item">Price : {item.plan_price}/{item.unit}</li>
              <li className="list-group-item">Coverage</li>

              {item.cover.map((item)=>{
                return <li className="list-group-item">{item.detail} {item.coverage} THB</li>
              })}
              <Button onClick={()=>{
                props.setPlan(() => ({
                ...props.plan,
                plan_id: item.id,
                name: item.name,
                price: item.plan_price
              }) 
                )
                props.next()
              }}>Choose</Button>
              <li className="list-group-item"></li>
            </ul>
        </Card>
        </Col>
)
  })
  console.log(cardData);
  console.log("card",card);
  return (<>
   {isLoading?<Loading/>: <Row>

       {card.length===0?<p>No plan for your type of travel.</p>:card}
      
    </Row>
  }
  </>);
}

export default CardComp;