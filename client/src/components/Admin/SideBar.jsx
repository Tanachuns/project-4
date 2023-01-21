const SideBar = (props) => {
    return ( <>
    <nav className="nav flex-column">
        <h2>Admin</h2>
        <a className="nav-link" onClick={(n)=>props.clickHandler({page:0,url:'/user'})} >Users</a>
        <a className="nav-link" onClick={(n)=>props.clickHandler({page:1,url:'/insurance'})}>Payment</a>
        <a className="nav-link" onClick={(n)=>props.clickHandler({page:2,url:'/plan'})}>Plans</a>
        <a className="nav-link" onClick={(n)=>props.clickHandler({page:3,url:'/cover'})}>Coverage</a>

    </nav>
       </> );
}
 
export default SideBar;