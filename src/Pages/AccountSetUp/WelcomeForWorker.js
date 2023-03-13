import { useLocation, useNavigate } from "react-router-dom";
import './image.css'

const WelcomeForeWorker = () => {

    let history = useNavigate();
    const location = useLocation();
    const email = location.state.email;
    
    const getStarted=()=>{
        
        history("/firstPageforworker",{ state: { email: email } });
    }
    return ( 
        <div>
        <div class ="bg-slate-800">
        <div className="AppContainer " >
            <div className="TopContainer">
                <div className="backDrop"> </div>
                    <div className ="HeaderContainer">
                        <div className="HeaderText" >
                        <h2>Welcome to </h2>
                        <h2>HiReMe!!!</h2>
                        
                        </div>
                    </div>
            </div>
            <div className="InnerContainer">
           

            </div>
            
        </div>
       
        </div>
        <div style={{display : "flex" , flexDirection :'row' , alignItems: 'center', justifyContent: 'center'}}>
        <img class=" rounded-full image " src="/images/1_c.jpeg" alt="" width="220" height="550"/>
        <img class=" rounded-full image" src="/images/2_c.jpeg" alt="" width="220" height="550"/>
        <img class=" rounded-full image" src="/images/3_c.jpeg" alt="" width="220" height="500"/>
        <img class=" rounded-full image" src="/images/4_c.jpeg" alt="" width="220" height="500"/>
        <img class=" rounded-full image" src="/images/5_c.jpeg" alt="" width="220" height="500"/>
        <img class=" rounded-full image" src="/images/6_c.jpeg" alt="" width="220" height="500"/>
        </div>
        <div class="text-white text-center text-4xl">
        <button class="button text-white text-center text-4xl"  onClick={()=>getStarted()} >Get Started</button>
        </div>
        </div>
     );
}
 
export default WelcomeForeWorker;
