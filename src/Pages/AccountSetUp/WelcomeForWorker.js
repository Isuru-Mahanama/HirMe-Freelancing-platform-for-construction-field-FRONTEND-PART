import { useNavigate } from "react-router-dom";

const WelcomeForWorker = () => {

    let history = useNavigate();
    
    
    const getStarted=()=>{
        
        history("/firstPageforworker");
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
        <img class=" rounded-full " src="/images/1_c.jpeg" alt="" width="220" height="550"/>
        <img class=" rounded-full " src="/images/2_c.jpeg" alt="" width="220" height="550"/>
        <img class=" rounded-full " src="/images/3_c.jpeg" alt="" width="220" height="550"/>
        <img class=" rounded-full " src="/images/4_c.jpeg" alt="" width="220" height="550"/>
        <img class=" rounded-full " src="/images/5_c.jpeg" alt="" width="220" height="550"/>
        <img class=" rounded-full " src="/images/6_c.jpeg" alt="" width="220" height="550"/>
        </div>
        <div class="text-white text-center text-4xl">
        <button class="button text-white text-center text-4xl"  onClick={()=>getStarted()} >Get Started</button>
        </div>
        </div>
     );
}
 
export default WelcomeForWorker;

