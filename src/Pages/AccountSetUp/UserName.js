import React from "react";
import { useNavigate } from "react-router-dom";

const UserName= (props) => {

    
    let history = useNavigate();
    
    
    const handleSignUp=()=>{
        
        history("/loginas");
    }
    
    return ( 
        <div className="BoxContainer_2 ">
            <div className="FormContainer">
                <div className="Input" ></div>
                    <input type="text" placeholder="User Name" className="input"></input>
                    <div  className="Margin2"></div>
                    

                </div>
                    {/* <Marginer direction ="vertical" margin = {5}></Marginer> */}
                    <div  className="Margin"></div>
                    {/* <div  className="MutedLink">Forget your password?</div> */}
                    
                    <button class="button" onClick={()=>handleSignUp()}>Next</button>

                   
                    <div className="MutedLink" >
                    <h6>You can't chanhe your username once you selected!! </h6>
                    </div>
                    
           

        </div>
     );
}
 
export default UserName