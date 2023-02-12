import { useNavigate } from 'react-router-dom';


export default function Payment() {
  const navigate = useNavigate();
  return (    
    <form>
    <h1>Payment Details</h1>
   
    <h3>Total bill: Rs {JSON.parse(sessionStorage.getItem('trackOrder')).price} </h3>
    <div className="mb-3">
      <label>Name</label>
      <input
        type="text"
        className="form-control"
        placeholder="Enter Name"
      />
    </div>
    <div className="mb-3">
      <label>Email address</label>
      <input
        type="email"
        className="form-control"
        placeholder="Enter email"
      />
    </div>
    <div className="mb-3">
      <label>CardNumber</label>
      <input
        type="text"
        onKeyPress={(event) => {
          if (!/[0-9]/.test(event.key)) {
            event.preventDefault();
          }
        }}
        className="form-control"
        placeholder="16 Digit Card number"
      />
    </div>
    <div className="mb-3">
      <label>Expiration Date</label>
      <input
        type="text"
        className="form-control"
        placeholder="Expiration Data"
      />
    </div>
    <div className="mb-3">
      <label>CVV</label>
      <input
        type="text" onKeyPress={(event) => {
          if (!/[0-9]/.test(event.key)) {
            event.preventDefault();
          }
        }}
        className="form-control"
        placeholder="CVV"
      />
    </div>
    <div className="mb-3">
    
    </div>
    <div className="d-grid">
      <button type="submit" onClick={() => {
 alert("payment Successful");
 navigate("/");
}} className="btn btn-primary">
        Make Payment
      </button>
    </div>
       
  </form>
   
  )
}