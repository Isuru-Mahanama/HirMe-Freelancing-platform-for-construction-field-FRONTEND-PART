import React from "react";
import Slidebar from "../../components/slidebar/slidebar";
import './AccountPageHire.css';
import '../Application/Application.css'
import { useNavigate } from "react-router-dom";
import { useLocation } from "react-router-dom";
const FirstPageForHire = () => {
  
    let history = useNavigate();
    const location = useLocation();
    const email = location.state.email;
    
    const handleSignUp=(e)=>{
         history("/applicationhire",{ state: { email: email,setEditprofile : true}});
    }

    const editYourAccount=(e)=>{
      history("/applicationhire",{ state: { email: email , setEditprofile : false } });
    }
    
  return (
    <div>
      <div className="background" >
        <div className="devideLeft">
        <Slidebar></Slidebar>
        </div>
       
        <div className="devideRight">
        <button className="b1" onClick={(e)=>handleSignUp(e)} >Set up your account!!!</button>
       
        <button className="b1" onClick={(e)=>editYourAccount(e)} >Edit your profile!!!</button>
        
     
         
       
        </div>
      
      </div>
    </div>
    );
}
 
export default FirstPageForHire;
