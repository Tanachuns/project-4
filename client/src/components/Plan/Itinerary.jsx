const Itinerary = (props) => {
    let countries = ""
    if(props.country[0] !== undefined){
        console.log(props.country[0].cca3);
        countries = props.country.map((item)=>{
            return <option value={item.cca3+"-"+item.name.common}>{item.cca3} - {item.name.common}</option>
        })
    }
    
    return (<>  
                <h1>Itinerary Details</h1>
                <form>
                    <label htmlFor="formGroupExampleInput">Destination</label>
                   <select className="form-select" aria-label="Default select example" onChange={(e)=>{console.log(e.target.value)}}>
                        <option selected disabled>Select Your Destination</option>
                        {countries}
                    </select>
                    
                </form>
            </>
      );
}
 
export default Itinerary;