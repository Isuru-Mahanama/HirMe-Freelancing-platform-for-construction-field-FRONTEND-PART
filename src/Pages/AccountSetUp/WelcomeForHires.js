import { useNavigate } from "react-router-dom";
import './image.css'

const Welcome = (props) => {

    let history = useNavigate();
    
   
    const getStarted=()=>{
     
        history("/firstPageforHire");
    }
    return ( 
        <div>
           
        <div className ="bg-slate-800">
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
        <img className=" rounded-full image " src="/images/1_c.jpeg" alt="" width="220" height="550"/>
        <img className=" rounded-full image" src="/images/2_c.jpeg" alt="" width="220" height="550"/>
        <img className=" rounded-full image" src="/images/3_c.jpeg" alt="" width="220" height="500"/>
        <img className=" rounded-full image" src="/images/4_c.jpeg" alt="" width="220" height="500"/>
        <img className=" rounded-full image" src="/images/5_c.jpeg" alt="" width="220" height="500"/>
        <img className=" rounded-full image" src="/images/6_c.jpeg" alt="" width="220" height="500"/>
        </div>
        <div className="text-white text-center text-4xl">
        <button className="button text-white text-center text-4xl"  onClick={()=>getStarted()} >Get Started</button>
        </div>
        </div>
     );
}
 
export default Welcome;

