const Itinerary = (props) => {
    let countries = ""
    if(props.country[0] !== undefined){
        countries = props.country.map((item)=>{
            return <option value={item.cca3+"-"+item.name.common}>{item.cca3} - {item.name.common}</option>
        })
    }
    return (<>  
                <h1>Itinerary Details</h1>
                <form method="post" onChange={(e)=>props.change(e)} onSubmit={(e)=>props.next(e)}>
                    <div className="form-group my-3 text-start row">
                    <label htmlFor="formGroupExampleInput">Destination</label>
                    <select className="form-select" aria-label="Default select example" name="destination" defaultValue={props.plan.destination}>
                        <option selected disabled>Select Your Destination</option>
                        {countries}
                    </select>
                        </div>  
                    <div className="form-group my-3 text-start row">
                        <label className="align-start" htmlFor="formGroupExampleInput">Departure Date</label>
                        <div className="col">
                            <input type="date" className="form-control" name='departure_date' value={props.plan.departure_date}/>
                        </div>  
                        <div className="col">
                            <input type="date" className="form-control" name='return_date' value={props.plan.return_date}/>
                        </div>  
                    </div>
                     <div className="form-group my-3 row text-start">
                    <label htmlFor="">Type of travel</label>
                    <select className="form-select" aria-label="Default select example" name="type" value={props.plan.type}>
                        <option selected disabled>Select Your Type of travel</option>
                        <option value="individual">Individual</option>
                        <option value="group">Group</option>
                        <option value="family">Family</option>
                    </select>
                        </div>  
                    
                <button type="submit" className="btn btn-primary float-right">Next</button>
                </form>
            </>
      );
}
 
export default Itinerary;