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
  const card = cardData.map((item)=>{
    return (<Card style={{ width: '18rem' }}>
            <div class="card-header">
              <b>{item.name}</b>
            </div>
            <ul class="list-group list-group-flush">
              <li class="list-group-item">Type: {item.type}</li>
              <li class="list-group-item">Price : {item.plan_price}/{item.unit}</li>
              <li class="list-group-item">Coverage</li>

              {item.cover.map((item)=>{
                return <li class="list-group-item">{item.detail} {item.coverage} THB</li>
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
              <li class="list-group-item"></li>
            </ul>
        </Card>)
  })
  return (<>
   {isLoading?<Loading/>: <Row>
      <Col>
       {card}
      </Col>
    </Row>
  }
  </>);
}

export default CardComp;