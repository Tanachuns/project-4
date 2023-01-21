const PaymentDash = (props) => {
     console.log(props.data.cover);
    const th = Object.keys(props.data[0]).map((item)=>{
        return <th scope="col">{item}</th>
    })
    const td = props.data.map((item)=>{
        return  <tr>
      <th scope="row">{item.id}</th>
      <td>{item.plan_id}</td>
      <td>{item.user_id}</td>
      <td>{item.total_price}</td>
      <td>{item.destination}</td>
      <td>{item.departure_date!==undefined&&item.departure_date.split("T")[0]}</td>
      <td>{item.return_date!==undefined&&item.return_date.split("T")[0]}</td>
      <td>{item.payment_status!==undefined&&item.payment_status.toString()}</td>
      <td><button onClick={()=>props.confirmPayment(item)} className="btn btn-success" type="button">confirm</button></td>

    </tr>
    })
    return ( <>
    <h1>Payment</h1>
    <table class="table">
  <thead>
    <tr>
      {th}
    <th scope="col">Confirm</th>
    </tr>
  </thead>
  <tbody>
    {td}
  </tbody>
</table>
    </> );
}
 
export default PaymentDash;