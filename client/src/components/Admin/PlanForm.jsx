const PlanForm = (props) => {
    return ( <>
    <form method="post" onSubmit={(e)=>props.editHandler(e)}>
        <div class="mb-3">
            <label class="form-label">ID</label>
            <input type="text" class="form-control" name="planID" defaultValue={props.data.id} disabled/>
        </div>
        <div class="mb-3">
            <label class="form-label">Name</label>
            <input type="text" class="form-control" name="name" defaultValue={props.data.name} required/>
        </div>
        <select className="form-select" name="type" defaultValue={props.data.type} required>
                        <option selected disabled>Type</option>
                        <option value="individual" >individual</option>
                        <option value="group" >group</option>
                        <option value="family" >family</option>
                    </select>
         <div class="mb-3">
            <label class="form-label">Price</label>
            <input type="number" class="form-control" name="plan_price" defaultValue={props.data.plan_price}/>
        </div>
         <select className="form-select" name="unit" defaultValue={props.data.unit} required>
                        <option selected disabled>Unit</option>
                        <option value="trip" >Trip</option>
                        <option value="day" >Day</option>
                        <option  value="month" >Month</option>
                        <option  value="year" >Year</option>
        </select>
        <br/>
        <input type="submit" value="submit" />
    </form>
    </> );
}
 
export default PlanForm;