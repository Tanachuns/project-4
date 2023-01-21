import axios from "axios";
import React from 'react';

const CoverForm = (props) => {
    const [plan,setPlan] = React.useState([])
    React.useEffect(()=>{
        axios.get(process.env.REACT_APP_URL+"/plan").then(res=>{
            console.log(res);
            setPlan(res.data)
        }).catch(e=>console.log(e))
    },[])

    const plans = plan.map((item)=>{
        return <option value={item.id} >{item.name}</option>
    })
    return ( <>
    <form method="post" onSubmit={(e)=>props.editHandler(e)}>
        <div class="mb-3">
            <label class="form-label">ID</label>
            <input type="text" class="form-control" name="coverID" defaultValue={props.data.id} disabled/>
        </div>
        <label class="form-label">Plan</label>
        <select className="form-select" name="plan_id" defaultValue={props.data.plan_id} required>
                        <option selected disabled>Plan</option>
                        {plans}
                    </select>
         <div class="mb-3">
        <div class="mb-3">
            <label class="form-label">Detail</label>
            <input type="text" class="form-control" name="detail" defaultValue={props.data.detail} required/>
        </div>
        
            <label class="form-label">Coverage</label>
            <input type="number" class="form-control" name="coverage" defaultValue={props.data.coverage}/>
        </div>
        <br/>
        <input type="submit" className="btn btn-success" value="submit" />
    </form>
    </> );
}
 
export default CoverForm;