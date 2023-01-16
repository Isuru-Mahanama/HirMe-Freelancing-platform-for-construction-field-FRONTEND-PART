import React from "react";
import Slidebar from "../../components/slidebar/slidebar";
//import './AccountPageHire.css';
import '../Hire/AccountPageHire.css'
import { Link } from "react-router-dom";

class AccountPageWorker extends React.Component {
  
  
   state = {  } ;
   
  render(
      
  ) { 
    
    return (
      <div className="background" >
        <div className="devideLeft">
        <Slidebar></Slidebar>
        </div>
       
        <div className="devideRight">
          <Link  to="/setupworker">
          <button className="b1" >Set up your account!!!!!!</button>
          </Link>
       
       
         <Link  to="/setupworker">
          <button className="b1" >Edit your profile!!!</button>
          </Link>
     
          <Link  to="/portfolio">
          <button className="b1" >Portfolio!!!</button>
          </Link>
         
       
        </div>
      
      </div>

    );
  }
}


export default AccountPageWorker ;