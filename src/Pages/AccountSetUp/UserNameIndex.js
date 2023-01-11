import UserName from "./UserName";

const UserNameIndex = () => {

    
    return ( 
        <div class ="bg-slate-800">
        <div className="AppContainer " >
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
            <UserName></UserName>
            </div>
            
        </div>
        </div>
     );
}
 
export default UserNameIndex;

