import SignupForm from "./SignupForm";

const SignupIndex = () => {

    
    return ( 
        <div class ="bg-slate-800">
        <div  >
            <div className="TopContainer">
                <div className="backDrop"> </div>
                    <div className ="HeaderContainer">
                        <div className="HeaderText" >
                        <h2>Create </h2>
                        <h2>An Account..</h2>
                        <div className = "SmallText"><h5>Please signup to continue!</h5></div>
                        </div>
                    </div>
            </div>
            <div className="InnerContainer">
            <SignupForm></SignupForm>
            </div>
            
        </div>
        </div>
     );
}
 
export default SignupIndex;

