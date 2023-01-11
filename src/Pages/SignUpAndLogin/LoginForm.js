import React from "react";
 //import {Marginer} from "../Marginer";


const LoginForm = () => {
    return ( 
        <div className="BoxContainer_2 ">
            <div className="FormContainer">
         
                    <input type="email" placeholder="Email" className="input"></input>
          
                    <div  className="Margin2"></div>
                    <input type="password" placeholder="Password" className="input" ></input>

                </div>
                    {/* <Marginer direction ="vertical" margin = {5}></Marginer> */}
                    <div  className="Margin"></div>
                    <div  className="MutedLink texts ">Forget your password?</div>
                    
                    <button class="button texts">Sigin</button>

                   
                    <div className="MutedLink texts" href ="#">Dont't have an account?{" "}
                        <div className="BoldLink" href ="#"></div>
                    </div>
                    
           

        </div>
     );
}
 
export default LoginForm;