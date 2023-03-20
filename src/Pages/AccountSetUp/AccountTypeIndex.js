import Loginas from "./AccountType";

const LoginAsIndex = () => {

    
    return ( 
        <div className ="bg-black">
        <div className="AppContainer " >
            <div className="TopContainer">
                <div className="backDrop"> </div>
                    <div className ="HeaderContainer">
                        <div className="HeaderText" >
                        <h2>Select  </h2>
                        <h2>Account Type!!!..</h2>
                        <div className = "SmallText"><h5>This can be changed latter!</h5></div>
                        </div>
                    </div>
            </div>
            <div className="InnerContainer">
            <Loginas></Loginas>
            </div>
            
        </div>
        </div>
     );
}
 
export default LoginAsIndex;

