import React from "react";
import Slidebar from "../../components/slidebar/slidebar";
import './AccountPageHire.css';
import '../Application/Application.css'
import { useNavigate } from "react-router-dom";
import { useLocation } from "react-router-dom";
const FirstPageForHire = () => {

    const location = useLocation();
    const halfsetup = location.state;
    

    let history = useNavigate();
    
   
    
    const handleSignUp=(e)=>{
         history("/applicationhire",{ state: { setEditprofile : true, setupyouraccount:true}});
    }

    const editYourAccount=(e)=>{
      history("/applicationhire",{ state: {  setEditprofile : false } });
    }
    
  return (
    <div>
      <div className="background" >
        <div className="devideLeft">
        <Slidebar></Slidebar>
        </div>
       
        <div className="devideRight">
        {halfsetup && <button className="b1" onClick={(e)=>handleSignUp(e)} >Set up your account!!!</button>}
       
        {!halfsetup && <button className="b1" onClick={(e)=>editYourAccount(e)} >Edit your profile!!!</button>}
        
       
        </div>
      
      </div>
    </div>
    );
}
 
export default FirstPageForHire;
