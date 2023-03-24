import React from "react";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
 //import {Marginer} from "../Marginer";
import { Link } from "react-router-dom";

 const apiLink ="http://localhost:8080/api/v1/user"
const LoginForm = () => {

    const history = useNavigate();
    const [email,setEmail] = useState(" ");
    const[password,setPassword] = useState("");

    const handleSignUp=(e)=>{
       
        e.preventDefault();     
        
        const user = { email ,password};

        fetch(apiLink+"/authenticate", {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify(user)
      })
      .then(res => res.json())
      .then(data => {
        
          console.log(data);
          if (data != null) {
              console.log("User is added.");
              // Redirect to the desired page
              history("/userName" );
              
          } else {
              console.log("Error:", data.message);
          }
      })
      .catch(error => {
          console.error("Error:", error);
      });
  }
  
    return ( 
        <>
        <div className="BoxContainer_2 InnerContainer">
            <div className="FormContainer ">
         
                    <input type="email" placeholder="Email" className="input" value={email} onChange = {(e)=>setEmail(e.target.value)}></input>
          
                    <div  className="Margin2"></div>
                    <input type="password" placeholder="Password" className="input" value={password} onChange={(e)=>setPassword(e.target.value)} ></input>

            </div>
        </div>
                    {/* <Marginer direction ="vertical" margin = {5}></Marginer> */}
                    <div  className="Margin InnerContainer2" >
                    <div  className="MutedLink texts ">Forget your password?</div>
                    
                    <button className="button texts" onClick={(e)=>handleSignUp(e)}>Sigin</button>

                   
                    <div className="MutedLink texts" href ="#">Dont't have an account?{" "}
                    <div className="MutedLink" >
                    <Link to={'/admin'}><h6 style={{}}>Login as admin?</h6></Link>
                        
                    </div>
                    </div>
                    </div>
           
        </>
     );
}
 
export default LoginForm;