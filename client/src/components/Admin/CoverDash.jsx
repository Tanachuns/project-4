const CoverDash = (props) => {
    console.log(props.data);
    const th = Object.keys(props.data[0]).map((item)=>{
        return <th scope="col">{item}</th>
    })
    const td = props.data.map((item)=>{
        return  <tr>
      <th scope="row">{item.id}</th>
      <td>{item.plan_id}</td>
      <td>{item.detail}</td>
      <td>{item.coverage}</td>
    </tr>
    })
    return ( <>
    <h1>Cover</h1>
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
 
export default CoverDash;