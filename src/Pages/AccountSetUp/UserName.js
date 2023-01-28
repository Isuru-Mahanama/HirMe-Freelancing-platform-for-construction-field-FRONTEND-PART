import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useLocation } from "react-router-dom";
const UserName= (props) => {

    const[username,setuserName] = useState("");
    let history = useNavigate();
    const apiLink ="http://localhost:8080/api/v1/user";
    const location = useLocation();
    const email = location.state.email;
   
    const handleSignUp=(e)=>{
          e.preventDefault();     
          
          const user = { userName: username, email: email };
          
          fetch(apiLink+"/saveUserName", {
            method: "PUT",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify(user)
            
        })
        .then(res => res.json())
        .then(data => {
            console.log(data);
            if (data.success) {
                
                console.log("User Name is added.");
                // Redirect to the desired page
                history("/loginas",{ state: { email: email } });
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
                    <input type="text" placeholder="User Name" className="input" value={username} onChange = {(e)=>setuserName(e.target.value)}></input>
                    <div  className="Margin2"></div>
                    

                </div>
                    {/* <Marginer direction ="vertical" margin = {5}></Marginer> */}
                    <div  className="Margin"></div>
                    {/* <div  className="MutedLink">Forget your password?</div> */}
                    
                    <button class="button" onClick={(e)=>handleSignUp(e)}>Next</button>

                   
                    <div className="MutedLink" >
                    <h6>You can't change your username once you selected!! </h6>
                    </div>
                    
           

        </div>
     );
}
 
export default UserName