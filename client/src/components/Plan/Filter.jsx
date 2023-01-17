

const Filter = () => {
    return (<>  
                <h1>Filter</h1>
                <form>
                    <div className="form-group">
                        <label htmlFor="formGroupExampleInput">Example label</label>
                        <input type="text" className="form-control" id="formGroupExampleInput" placeholder="Example label" />
                    </div>
                    <div className="form-group">
                        <label htmlFor="formGroupExampleInput2">Another label</label>
                        <input type="text" className="form-control" id="formGroupExampleInput2" placeholder="Another label" />
                    </div>
                </form>
            </>
      );
}
 
export default Filter;