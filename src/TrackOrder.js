import BootstrapTable from "react-bootstrap-table-next";
import "bootstrap/dist/css/bootstrap.min.css";
import "react-bootstrap-table-next/dist/react-bootstrap-table2.min.css";
import "./styles.css";


 //let  products = [] //{ sessionStorage.getItem('trackOrder') !== null? JSON.parse(sessionStorage.getItem("trackOrder")): null};
 
 //[ 
  //  { id: 321, name: "Item list", price: 100 , status:"Out for Delivery"},
  //  { id: 256, name: "Item list", price: 102 , status:"Delivered"},
  //  { id: 2654, name: "Item list", price: 1200 , status:"Preparing"}
//];


export default function TrackOrder() {
 
// For displaying data
const columns= [
{
  dataField: "id",
  text: "Order Id",
  sort: true
},
{
  dataField: "name",
  text: "Name",
  sort: true
},
{
  dataField: "status",
  text: "Order Status"
}

];
const styles = {
    border: '2px solid rgba(0, 0, 1, 0.1)'};
  return (    
    <div style={styles}>
        <h1 className="h2">Track Orders</h1>
        {sessionStorage.getItem('trackOrder') !== null &&    
        <BootstrapTable
          keyField="id"
          data={[JSON.parse(sessionStorage.getItem('trackOrder'))]}
          columns={columns}
        />
        }
        {sessionStorage.getItem('trackOrder') === null &&  
        <div> 
        <br></br> 
        <br></br> 
        <br></br> 
        <br></br> 
        <h6>No Orders</h6>
        </div>
        }
        
      </div>
   
  )
}


    