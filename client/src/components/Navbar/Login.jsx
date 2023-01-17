import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';

function Login(props) {
  return (
    <Modal
      {...props}
      size="lg"
      aria-labelledby="contained-modal-title-vcenter"
      centered
    >
      <Modal.Header closeButton>
        <Modal.Title id="contained-modal-title-vcenter">
          Login
        </Modal.Title>
      </Modal.Header>
      <Modal.Body>
       <div className="col-md-6 m-auto">
         <form method='POST' action={process.env.REACT_APP_URL+"/auth/login"}>
           <div className="form-group">
             <label htmlFor="email">Email address</label>
             <input type="email" name="email" className="form-control" id="email" aria-describedby="emailHelp" placeholder="Enter email" />
             <small id="emailHelp" className="form-text text-muted">
               Email that you have used while registration.
             </small>
           </div>
           <div className="form-group">
             <label htmlFor="password">Password</label>
             <input type="password" name="password" className="form-control" id="password" placeholder="Password" />
           </div>
           <div className="form-check">
             <input type="checkbox" name="checkbox" className="form-check-input" id="remember" />
             <label className="form-check-label" htmlFor="remember">
               Remember me
             </label>
           </div>
           <button type="submit" className="btn btn-primary float-right">
             Login
           </button>
         </form>
       </div>
      </Modal.Body>
      <Modal.Footer>
        <Button onClick={props.onHide}>Close</Button>
      </Modal.Footer>
    </Modal>
  );}
export default Login