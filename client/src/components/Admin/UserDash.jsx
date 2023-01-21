const UserDash = (props) => {
    console.log(props.data);
    const th = Object.keys(props.data[0]).map((item)=>{
        return <th scope="col">{item}</th>
    })
    const td = props.data.map((item)=>{
        return  <tr>
      <th scope="row">{item.id}</th>
      <th scope="row">{item.title}</th>
      <th scope="row">{item.email}</th>
      <th scope="row">{item.first_name}</th>
      <th scope="row">{item.last_name}</th>
      <th scope="row">{item.citizen_id}</th>
      <th scope="row">{item.birth_date!==undefined&&item.birth_date.split("T")[0]}</th>
      <th scope="row">{item.address}</th>
      <th scope="row">{item.phone_number}</th>
      <th scope="row">-</th>
      <th scope="row">{item.is_admin?"true":"false"}</th>

    </tr>
    })
    return ( <>
    <h1>Users</h1>
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
 
export default UserDash;