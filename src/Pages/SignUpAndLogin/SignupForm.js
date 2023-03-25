import React, { useState } from "react";
import { Link } from "react-router-dom";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { useEffect } from "react";
import { GetCurrentUser } from "../../components/components/components";

const apiLink ="http://localhost:8080/api/v1/user"

const SignupForm = (props) => {
    
    
    let history = useNavigate();
    
    const [email,setEmail] = useState(" ");
    const[password,setPassword] = useState("");
    const [token, setAccessToken] = useState("");
    const [refreshToken, setRefreshToken] = useState("");

    
    
    
    useEffect(() => {
       console.log(GetCurrentUser().token)
        const user = JSON.parse(localStorage.getItem("user"));
        if (user && user.accessToken) {
            setAccessToken(user.token);
            setRefreshToken(user.refreshToken);
        }
    }, []);
    
    function handleLogout(){
        
        axios
        .post(apiLink+"/logout")
        .then((res) => {
          console.log("Logged out sucessfully");
          localStorage.removeItem("user");
       
          setEmail("");
          setPassword("");
          setAccessToken("");
          setRefreshToken("");
          
        })
        .catch((err) => {
          console.log(err);
        });
    }
    const handleSignUp=(e)=>{
        
          const user = { email ,password};

          
          
          fetch(apiLink+"/register", {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify(user)
        })
        .then((res => res.json()))
        
        .then(data => {
            console.log(data.token)
            setAccessToken(data.token);
            setRefreshToken(data.refreshToken);
            localStorage.setItem(
                "user",
                JSON.stringify({
                    token: data.token,
                    refreshToken:data.refreshToken,
                })
            )
            if (data != null) {
                console.log("User is added.");
                // Redirect to the desired page
                history('/username')
             //   console.log(GetCurrentUser().token)
                
                
            } else {
                console.log("Error:", data.message);
            }
        })
        .catch(error => {
            console.error("Error:", error);
        });

   
    }
    const refreshTokens = () => {
        axios.post(apiLink + "/refresh", { refreshToken: refreshToken })
        .then((response) => {
            console.log(response.data);
            setAccessToken(response.data.token);
            localStorage.setItem(
                "user",
                JSON.stringify({
                    token: response.data.token,
                    refreshToken: refreshToken,
                })
            );
        })
        .catch((error) => {
            console.error("Error: ", error);
        });
    }
      axios.interceptors.response.use(
        (response) => {
            return response;
        },
        (error) => {
            const originalRequest = error.config;
            if (
                error.response.status === 401 &&
                originalRequest.url === apiLink + "/api/v1/user"
            ) {
                console.log("Access token expired, refreshing token...");
                refreshTokens();
                return axios(originalRequest);
            }
            return Promise.reject(error);
        }
    );
    
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
                    
                    <button className="button" onClick={(e)=>handleSignUp(e)}>SigUp</button>
                    <button onClick={handleLogout}>Logout</button>
                   
                    <div className="MutedLink" >
                    <Link to={'/signin'}><h6 >Already have an account?</h6></Link>  
                    </div>
                    
           

        </div>
     );
}
 
export default SignupForm;