
const Loading = () => {
    return ( <div style={{height:"100vh",position: "relative"}}>
    <div style={{
        position: "absolute",
        top:"50%",
        left:"50%"
        }} className="spinner-border text-primary" role="status">
  <span className="visually-hidden">Loading...</span>
</div>
</div> );
}
 
export default Loading;