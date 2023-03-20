
import LoginForm from "./LoginForm";

const AccountBox = () => {

    
    return ( 
        <div className ="backgroundLoginSignup">
        <div >
            <div className="TopContainer">
                <div className="backDrop"> </div>
                    <div className ="HeaderContainer">
                        <div className="HeaderText" >
                        <h2 className="texts">Welcome</h2>
                        <h2 className="texts">Back</h2>
                        <div className = "SmallText"><h5 className="texts">Please sign in to continue!</h5></div>
                        </div>
                    </div>
            </div>
            
            <LoginForm></LoginForm>
        
            
        </div>
        </div>
     );
}
 
export default AccountBox;

