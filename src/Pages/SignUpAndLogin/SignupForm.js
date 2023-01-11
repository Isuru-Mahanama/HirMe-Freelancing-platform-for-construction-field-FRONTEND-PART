import React from "react";

import { Link } from "react-router-dom";

import { useNavigate } from "react-router-dom";



const SignupForm = (props) => {

    
    let history = useNavigate();
    
    
    const handleSignUp=()=>{
        
        history("/userName");
    }
    
    return ( 
        <div className="BoxContainer_2 ">
            <div className="FormContainer">
                <div className="Input" ></div>
                    <input type="email" placeholder="Email" className="input"></input>
                    <div  className="Margin2"></div>
                    <input type="password" placeholder="Password" className="input"></input>

                </div>

                    {/* <Marginer direction ="vertical" margin = {5}></Marginer> */}
                    <div  className="Margin"></div>
                    {/* <div  className="MutedLink">Forget your password?</div> */}
                    
                    <button class="button" onClick={()=>handleSignUp()}>SigUp</button>

                   
                    <div className="MutedLink" >
                    <Link to={'/signin'}><h6 style={{}}>Already have an account?</h6></Link>
                        <div className="BoldLink" href ="#"></div>
                    </div>
                    
           

        </div>
     );
}
 
export default SignupForm;