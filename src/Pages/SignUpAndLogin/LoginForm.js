import React, { useEffect } from "react";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
 //import {Marginer} from "../Marginer";
import { Link } from "react-router-dom";
import { GetCurrentUser } from "../../components/components/components";

 const apiLink ="http://localhost:8080/api/v1/user"
const LoginForm = () => {

    const history = useNavigate();
    const [email,setEmail] = useState(" ");
    const[password,setPassword] = useState("");

    const handleSignUp=(e)=>{
       
    function validateEmail(email) {
        const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        return regex.test(email);
        }

        const user = { email ,password};
        // perform email and password validation here
        if (email.trim() === "") {
          alert("Please enter your email.");
         return;
        }
        if (!validateEmail(email)) {
            alert("Please enter a valid email address");
            return;
          }
  
       if (password.trim() === "") {
           alert("Please enter your password.");
        return;
        }
  

        fetch(apiLink+"/authenticate", {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify(user)
      })
      .then(res => {
        console.log(res)
        if(res.status === 403){
             // display error message to user
           alert("Yor email address or password is wrong");
      } 
      if(res.status === 200){
        return res.json();
        
      }else {
      // handle other errors
      console.error(res);
        }
      }).then(data => {
        // use token from response
       
        localStorage.setItem(
            "user",
            JSON.stringify({
                token: data.token,
                refreshToken:data.refreshToken,
            })
        )
       getUserName();
        // do something with token, such as save it in local storage or use it for authenticated requests
    })
      .catch(error => {
        console.log(error)
      });
  }

  const getUserName=(e)=>{
    console.log(GetCurrentUser().token);
      fetch(apiLink+ "/getUserName", {
        method: "GET",
        headers: { "Content-Type": "application/json",
                    "Authorization": `Bearer ${ GetCurrentUser().token}` },
        
    })
    .then(res => {
        if (res.ok) {
            return res.text();
            // if response is successful, convert to JSON
        } else {
            throw new Error("Network response was not ok.");
        }
    })
    .then(data => {
        console.log(data);
       if(data!=null){
        history('/loginas')
       }
       if(data==null){
        history('/username')
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