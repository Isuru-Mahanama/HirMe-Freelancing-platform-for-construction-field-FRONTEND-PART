import React, { useState } from "react";

import { Link } from "react-router-dom";

import { useNavigate } from "react-router-dom";



const SignupForm = (props) => {
    
    const apiLink ="http://localhost:8080/api/v1/user"
    let history = useNavigate();
    
    const [email,setEmail] = useState(" ");
    const[password,setPassword] = useState("");
    
    function handleLogout(){
        setEmail(" ");
    }
    const handleSignUp=(e)=>{
          e.preventDefault();     
          const user = { email };
          fetch(apiLink+"/saveUser", {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify(user)
        })
        .then(res => res.json())
        .then(data => {
            console.log(data);
            if (data.success) {
                console.log("User is added.");
                // Redirect to the desired page
                history("/userName");
            } else {
                console.log("Error:", data.message);
            }
        })
        .catch(error => {
            console.error("Error:", error);
        });
    }
    
    return ( 
        <div className="BoxContainer_2 ">
            <div className="FormContainer">
                <div className="Input" ></div>
                    <input type="email" placeholder="Email" className="input" value={email} onChange = {(e)=>setEmail(e.target.value)} ></input>
                    <div  className="Margin2"></div>
                    <input type="password" placeholder="Password" className="input" value={password} onChange={(e)=>setPassword(e.target.value)}></input>

                </div>

                    {/* <Marginer direction ="vertical" margin = {5}></Marginer> */}
                    <div  className="Margin"></div>
                    {/* <div  className="MutedLink">Forget your password?</div> */}
                    
                    <button class="button" onClick={(e)=>handleSignUp(e)}>SigUp</button>
                    <button onClick={handleLogout}>Logout</button>
                   
                    <div className="MutedLink" >
                    <Link to={'/signin'}><h6 style={{}}>Already have an account?</h6></Link>
                        <div className="BoldLink" href ="#"></div>
                    </div>
                    
           

        </div>
     );
}
 
export default SignupForm;