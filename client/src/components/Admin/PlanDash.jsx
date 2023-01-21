const PlanDash = (props) => {
    console.log(props.data.cover);
    const th = Object.keys(props.data[0]).map((item)=>{
        return <th scope="col">{item}</th>
    })
    const td = props.data.map((item)=>{
        return  <tr>
      <th scope="row">{item.id}</th>
      <td>{item.name}</td>
      <td>{item.type}</td>
      <td>{item.plan_price}</td>
      <td>{item.unit}</td>
      <td>{item.cover!==undefined&&item.cover.map(item=>item.id+",")}</td>
    </tr>
    })
    return ( <>
    <h1>Plan</h1>
    <table class="table">
  <thead>
    <tr>
      {th}
    </tr>
  </thead>
  <tbody>
    {td}
  </tbody>
</table>
    </> );
}
 
export default PlanDash;