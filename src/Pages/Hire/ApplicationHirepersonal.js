import React from "react";
import ProgressBar from "../../components/progressbar/progressbar";
import { VscAccount } from "react-icons/vsc";
import { VscMail } from "react-icons/vsc";
import {VscHome } from "react-icons/vsc";
import { RiHome3Line } from "react-icons/ri";
import {RiHome4Line } from "react-icons/ri";
import {RiHome8Fill } from "react-icons/ri";
import {RiHome7Fill } from "react-icons/ri";
import {AiFillBank} from "react-icons/ai";
import {  useLocation, useNavigate } from "react-router-dom";
import { VscLocation } from "react-icons/vsc";
import { FcBusinesswoman } from "react-icons/fc";
import {  FcBusinessman } from "react-icons/fc"
import 'react-phone-number-input/style.css';
import {Languages, PhoneNumber,Timezone} from "../../components/components/components";
function ForgotNavigate(props){
    const navigation = useNavigate();
    const uselocation = useLocation();

    const email = uselocation.state.email;
   
    console.log(props.value.firstName)
    const accountSetUpClient=(e)=>{
          e.preventDefault();     
          const apiLink ="http://localhost:8080/api/v1/user";
          const user = { email:email, firstName: props.value.firstName};
          console.log("Email is passed:"+email);

          fetch(apiLink+"/setUpUserAccount", {
            method: "PUT",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify(user)
            
        })
        .then(res => res.json())
        .then(data => {
            console.log(data);
            if (data.success) {
                
                console.log("First Name is added.");
                // Redirect to the desired page
                
                navigation("/applicationHire2");
            } else {
                console.log("Error:", data.message);
            }
        })
        .catch(error => {
            console.error("Error:", error);
        });
       
    }
    return(<>
    
    <button class = "button" onClick={(e)=>accountSetUpClient(e)} >Next</button>
    </>
    )
}
class ApplicationHire extends React.Component {
    constructor(props){
        super(props);
        this.state={
            firstName:"",
            lastName:""
        }
       
    }
    changState=(e)=>{
        this.setState(
            {firstName:e.target.value}
        );
       }
   
    
    
   
    render() { 
        return (
            <div className="background">
               
                
        
            <div className="pageUp">
           <ProgressBar></ProgressBar>
            </div>

            <div className="pageDown">
                <div className="text" >  <div className="img-middle"> < FcBusinessman className="middle"/><FcBusinesswoman className="middle"/> </div>Profile</div>
                <div className="textsubtitle ">This information will be displayed publicly so be careful what you share.</div> 
                <div className="inputForm">
                <div className="textsubtitle2"> Personal Information</div>
               <div className="inputBoxForm">
                <div class="inputBox">
                <span></span> 
                    <input type="text" required value={this.state.firstName}  onChange={(e)=>this.changState(e)}></input>
                   
                    <span ><VscAccount /> First Name</span>
                   
                </div>

                <div class="inputBox">
                    <input type="text" required></input>
                    <span><VscAccount />Last Name</span>
                </div>
                
                </div>

                <div class="inputBox">
                    <input type="text" required></input>
                    <span><VscMail/>Email</span>
                </div>

                <div class="inputBox">
                    <input type="text" required></input>
                    <span><VscHome/>Country</span>
                </div>
                <div className ="inputBox inputBoxAddress">
                    <input type="text" required></input>
                    <span><RiHome3Line/>Street Address</span>
                </div>
                <div className="inputBoxForm">
                <div className ="inputBox">
                    <input type="text" required></input>
                    <span><RiHome4Line/>City</span>
                </div>

                <div className ="inputBox">
                    <input type="text" required></input>
                    <span><RiHome8Fill/>State/Province</span>
                </div>

                <div className ="inputBox">
                    <input type="text" required></input>
                    <span><RiHome7Fill/>ZIP/Postal Code</span>
                </div>
                </div>
                <div className="inputBoxForm">
                <div className ="inputBox">
                    <input type="text" required></input>
                    <span><AiFillBank/>Company</span>
                </div>
              {/*   
                <div className ="inputBox">
                    <input type="text" required></input>
                    <span><VscCompassActive/>Time Zone</span>
                </div>
 */}
                <div className ="inputBox">
                    <input type="text" required></input>
                    <span><VscLocation/>Location</span>
                </div>
                </div>
                <div className="inputBoxForm">
                <div >
                <PhoneNumber></PhoneNumber>
                 </div>

                 <div  >
                <Timezone></Timezone>
                 </div>
                 </div>
               
                <div className="inputBox">
                    <Languages className="widthBox"></Languages>

                
                </div>
                
             
                </div>
                
                <div className="buttons">
               
                <ForgotNavigate  value={this.state}></ForgotNavigate>
                
               
                </div>

                
            </div>
            </div>
           
          
        );

}
}
export default ApplicationHire;