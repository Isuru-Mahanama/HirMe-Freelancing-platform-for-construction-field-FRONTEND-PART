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
import { PhoneNumber,Timezone} from "../../components/components/components";
import Selected from "../../components/Languages";
function ForgotNavigate(props){
    const navigation = useNavigate();
    const uselocation = useLocation();

    const email = uselocation.state.email;
   
    console.log(props.value.firstName)
    console.log(props.value.lastName)
    const accountSetUpClient=(e)=>{
          e.preventDefault();     
          const apiLink ="http://localhost:8080/api/v1/user";
          

          
         
          const address_languages={
            email:email,
            country:props.value.country,
            streetAddress:props.value.streetaddress,
            city :props.value.city,
            province : props.value.province,
            language:props.value.language,
            languageLevel:props.value.languageLevel
         }

          const user = { 
             email:email,
             firstName: props.value.firstName,
             lastName :props.value.lastName,
             displayEmail:props.value.displayEmail,
             postalCode:props.value.postalCode,
             company:props.value.company,
             location:props.value.location
            };
            
          
          
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
                
            return fetch(apiLink +"/saveAddress", {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify(address_languages)
            }).then(res => res.json())
            .then(data => {
                console.log(data);
                if (data.success) {
                    console.log("Address area added.");
                       
            return fetch(apiLink +"/saveLanguages", {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify(address_languages)
            }).then(res => res.json())
            .then(data => {
                console.log(data);
                if (data.success) {
                    console.log("Languages are added.");
                    console.log("Level"+address_languages.languageLevel)
                    navigation("/applicationHire2",{ state: { email: email } });
                } else {
                    console.log("Error:", data.message);
                }
            })
                    
                    
                } else {
                    console.log("Error:", data.message);
                }
            })

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
            lastName:"",
            displayEmail:'',
            country :"",
            streetaddress:"",
            city:"",
            state:"",
            province:"",
            postalCode:"",
            company:"",
            location:"",
            phoneNumber:"",
            timeZone:"",
            language:" ",
            languageLevel:"",
        }
       
    }
    changeFirstName=(e)=>{
        this.setState(
            {firstName:e.target.value}
            
        );
        
       }
    changeLastName=(e)=>{
        this.setState(
            {lastName:e.target.value}
        );
    }
    changeDisplayEmail=(e)=>{
        this.setState(
            {displayEmail:e.target.value}
        );
    }

    changeCountry=(e)=>{
        this.setState(
            {country:e.target.value}
        );
    }

    changeStreetAddress=(e)=>{
        this.setState(
            {streetaddress:e.target.value}
        );
    }

    changeCity=(e)=>{
        this.setState(
            {city:e.target.value}
        );
    }
    changeProvince=(e)=>{
        this.setState(
            {province:e.target.value}
        );
    }
    changePostalCode=(e)=>{
        this.setState(
            {postalCode:e.target.value}
        );
    }

    changeCompany=(e)=>{
        this.setState(
            {company:e.target.value}
        );
    }
    changeLocation=(e)=>{
        this.setState(
            {location:e.target.value}
        );
    }
 

    handleLaguage = (e) => {
        
        this.setState(
            {language:e.target.value})
    }

    handleLanguageLevel =(e) =>{
        this.setState(
            {languageLevel: e.target.value})
            console.log("THISis firstname:"+e.target.value);
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
                    <input type="text" required value={this.state.firstName}  onChange={(e)=>this.changeFirstName(e)}></input>
                   
                    <span ><VscAccount /> First Name</span>
                   
                </div>

                <div class="inputBox">
                    <input type="text" required value={this.state.lastName} onChange={(e)=>this.changeLastName(e)}></input>
                    <span><VscAccount />Last Name</span>
                </div>
                
                </div>

                <div class="inputBox">
                    <input type="text" required value={this.state.displayEmail} onChange={(e)=>this.changeDisplayEmail(e)}></input>
                    <span><VscMail/>Email</span>
                </div>

                <div class="inputBox">
                    <input type="text" required value={this.state.country} onChange={(e)=>this.changeCountry(e)}></input>
                    <span><VscHome/>Country</span>
                </div>
                <div className ="inputBox inputBoxAddress">
                    <input type="text" required value={this.state.streetaddress} onChange={(e)=>this.changeStreetAddress(e)}></input>
                    <span><RiHome3Line/>Street Address</span>
                </div>
                <div className="inputBoxForm">
                <div className ="inputBox">
                    <input type="text" required value={this.state.city} onChange={(e)=>this.changeCity(e)}></input>
                    <span><RiHome4Line/>City</span>
                </div>

                <div className ="inputBox">
                    <input type="text" required value={this.state.province} onChange={(e)=>this.changeProvince(e)}></input>
                    <span><RiHome8Fill/>State/Province</span>
                </div>

                <div className ="inputBox">
                    <input type="text" required value={this.state.postalCode} onChange={(e)=>this.changePostalCode(e)}></input>
                    <span><RiHome7Fill/>ZIP/Postal Code</span>
                </div>
                </div>
                <div className="inputBoxForm">
                <div className ="inputBox">
                    <input type="text" required value={this.state.company} onChange={(e)=>this.changeCompany(e)}></input>
                    <span><AiFillBank/>Company</span>
                </div>
          
                <div className ="inputBox">
                    <input type="text" required value={this.state.location} onChange={(e)=>this.changeLocation(e)}></input>
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
                <Selected className="widthBox" value={this.state} onChange={this.handleLaguage} onClick={this.handleLanguageLevel}></Selected>
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