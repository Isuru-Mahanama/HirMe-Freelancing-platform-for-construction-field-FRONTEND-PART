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
import { CheckTokenExpiration, GetCurrentUser, PhoneNumber,Timezone} from "../../components/components/components";
import Selected from "../../components/Languages";
import axios from "axios";


const apiLink ="http://localhost:8080/api/v1/user";
function ForgotNavigate({ value, handleCircle, handleClick1 }){
    const navigation = useNavigate();
    const uselocation = useLocation();
    const worker = uselocation.state.worker;
  //  console.log(worker);
   

    const accountSetUpClient = async (e) => {
      
          const address_languages={
            country:value.country,
            streetAddress:value.streetaddress,
            city :value.city,
            province : value.province,
            language:value.language,
            languageLevel:value.languageLevel
         }

          const user = { 
             firstName: value.firstName,
             lastName :value.lastName,
             displayEmail:value.displayEmail,
             postalCode:value.postalCode,
             company:value.company,
             location:value.location,
            // timeZone:props.value.selectedTimezone.value,
             timeZone:value.timeZoneValue + value.timeZoneLabel,
             phoneNumber:value.phoneNumber
            };
            
          console.log("TimeZone"+ value.timeZone)
          await CheckTokenExpiration();
          fetch(apiLink+"/setUpUserAccount", {
            method: "PUT",
            headers: { 
                "Content-Type": "application/json",
                "Authorization": `Bearer ${GetCurrentUser().token}`
              },
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
                headers: { "Content-Type": "application/json",
                           "Authorization": `Bearer ${GetCurrentUser().token}`  },
                body: JSON.stringify(address_languages)
            }).then(res => res.json())
            .then(data => {
                console.log(data);
                if (data.success) {
                    console.log("Address area added.");
                       
            return fetch(apiLink +"/saveLanguages", {
                method: "POST",
                headers: { "Content-Type": "application/json",
                          "Authorization": `Bearer ${GetCurrentUser().token}`  },
                body: JSON.stringify(address_languages)
            }).then(res => res.json())
            .then(data => {
                console.log(data);
                if (data.success) {
                    console.log("Languages are added.");
                    console.log("Level"+address_languages.languageLevel)
                    if(worker){
                        console.log("Go to worker"+worker)
                        navigation("/applicationWork2");
                    }
                    if(!worker){
                        navigation("/applicationHire2");
                    }
                   
                    
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

     const GoingToNextPage = () => {
       handleClick1();
       accountSetUpClient();
    }
     
    
    return(<>
    
   
    

 
        <button className="button btns" disabled ={value.active>0?false:true} onClick={handleClick1}>Prev</button>
        <button className="button btns " disabled ={value.active>=value.circle-1?true:false}onClick={GoingToNextPage}>Next</button>
 

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
            phoneNumber:null,
            timeZoneValue:{},
            language:{},
            languageLevel:{},
            selectedTimezone :{},
            timeZoneLabel:"",
            circle: 3,
            active:0
            
        }
       
    }

     handleClick1 = () => {
    
        if(this.state.active<=0){
            this.setState({active:0})
             
        }else{
            this.setState({active:this.state.active-1})
        }  
      }

      handleCircle = () => {
    
        if( this.state.active>=this.state.circle){
            this.setState({active:this.state.circle})
       }else{
        this.setState({active:this.state.active+1})
       }
    }
    componentDidMount() {
        this.fetchData();
      }

     fetchData =async() =>{
        console.log("Hi its fetching data from user")
        await CheckTokenExpiration();
        try{
          const response =await axios.get(apiLink+'/getalluserandfreelancerDetais',{
          headers: {
            Authorization: "Bearer " +  GetCurrentUser().token
          }});
         
          console.log(response.data);
          if (response.data.UserName){
            this.setState(
              { 
                firstName:response.data.FirstName,
                lastName:response.data.LastName,
                displayEmail:response.data.DisplayEmail,
                country:response.data.Address.country,
                streetaddress:response.data.Address.streetAddress,
                city:response.data.Address.city,
                province:response.data.Address.province,
                postalCode:response.data.PostalCode,
                company:response.data.Company,
                location:response.data.Location,
                phoneNumber:response.data.PhoneNumber,
                timeZoneValue:response.data.TimeZone,
                language:response.data.Languages.language,
                languageLevel:response.data.Languages.languageLevel
                
              }
              )
            
          }

        }catch(error){
          console.log(error);
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
    }

    handlePhoneNumber =(e) =>{
        console.log("phone"+e);
        this.setState(
            {phoneNumber: e})
    }

    setSelectedTimezone =(e) =>{
       
        console.log(e.label);
        this.setState(
            {
                timeZoneValue: e.value,
                timeZoneLabel: e.label}
            //{time:e.label}
            )}
   
    render() { 
        return (
            <div className="background">
               
           <div className="pageUp">
            
           <ProgressBar active={this.state.active} circle={this.state.circle}></ProgressBar>
            
            </div>
            <div className="pageDown">
                <div className="text" >  <div className="img-middle"> < FcBusinessman className="middle"/><FcBusinesswoman className="middle"/> </div>Profile</div>
                <div className="textsubtitle ">This information will be displayed publicly so be careful what you share.</div> 
                <div className="inputForm">
                <div className="textsubtitle2"> Personal Information</div>
               <div className="inputBoxForm">
                <div className="inputBox">
                <span></span> 
                    <input type="text" required value={this.state.firstName}  onChange={(e)=>this.changeFirstName(e)}></input>
                    <span ><VscAccount /> First Name</span>
                </div>

                <div className="inputBox">
                    <input type="text" required value={this.state.lastName} onChange={(e)=>this.changeLastName(e)}></input>
                    <span><VscAccount />Last Name</span>
                </div>
                
                </div>

                <div className="inputBox">
                    <input type="text" required value={this.state.displayEmail} onChange={(e)=>this.changeDisplayEmail(e)}></input>
                    <span><VscMail/>Email</span>
                </div>

                <div className="inputBox">
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
                <PhoneNumber value={  this.state.phoneNumber } onChange={this.handlePhoneNumber}></PhoneNumber>
                 </div>

                 <div  >
                <Timezone value={this.state} onChange={this.setSelectedTimezone} ></Timezone>
                 </div>
                 </div>
               
                <div className="inputBox">
                <Selected className="widthBox" value={this.state} onChange={this.handleLaguage} onClick={this.handleLanguageLevel}></Selected>
                </div>
                
             
                </div>
                
                <ForgotNavigate  value={this.state} handleCircle={this.handleCircle} handleClick1={this.handleClick1}></ForgotNavigate>
               
            
                
                
            </div>
        

            </div>
           
          
        );

}
}
export default ApplicationHire;