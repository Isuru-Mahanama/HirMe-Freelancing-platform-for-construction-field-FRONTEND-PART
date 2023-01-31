import React from "react";
import Slidebar from "../../components/slidebar/slidebar";
import './AccountPageHire.css';
import '../Application/Application.css'
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import { useLocation } from "react-router-dom";
const FirstPageForHire = () => {
  
    let history = useNavigate();
   
  
    
    const location = useLocation();
    const email = location.state.email;
    const handleSignUp=(e)=>{
         history("/applicationhire",{ state: { email: email } });
      
       
    }
    
  return (
    <div>
      <div className="background" >
        <div className="devideLeft">
        <Slidebar></Slidebar>
        </div>
       
        <div className="devideRight">
        <button className="b1" onClick={(e)=>handleSignUp(e)} >Set up your account!!!</button>
         
     
         <Link  to="/applicationWork2">
          <button className="b1" >Edit your profile!!!</button>
          </Link>
     
         
       
        </div>
      
      </div>
    </div>
    );
}
 
export default FirstPageForHire;
