import Toggle from 'react-toggle'
import React from "react";
import  { SlidebarClient } from "../../components/slidebar/slidebar";
import {CardBody} from 'reactstrap'
import {CardText} from 'reactstrap'
import {CardLink} from 'reactstrap'
import {Card} from 'reactstrap'
import {CardTitle} from 'reactstrap'
import "react-toggle/style.css"
import SearchBar from "../../components/components/searchbar";
import '../Hire/AccountPageHire.css'
import { Link, Navigate } from "react-router-dom"
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { CheckTokenExpiration, GetCurrentUser } from "../../components/components/components";
import { useEffect } from 'react';
import { useState } from 'react';

const apiLink = "http://localhost:8080/api/v1/user";
function NavigationWorker({value}){

  const baconIsReady= true
  const worker = false;
  console.log(value.City)
  const history = useNavigate();
  const handleSignUp=(e)=>{
    history("/applicationhire",{ state: { worker:worker}});
  }
  const handleBaconChange=(event)=> {
    history("/loginas")
    // do something with event.target.checked
  }
  const viewPortfolio =(e)=>{
    history("/portfolio/"+value.clientID)
  }
  
 

  return(<>
         
         {value.City === "-" && <button className="b1"  onClick={(e)=>handleSignUp(e)}>Set up your account!!!!!!</button>}
        
         
          {value.City!=="-" && <button className="b1" onClick={(e)=>handleSignUp(e)} >Edit your profile!!!</button>}
          
    
          <button className="b1" onClick={(e)=>viewPortfolio(e)} >Portfolio!!!</button>
          
          <label>
          <Toggle
          defaultChecked={baconIsReady}
          onChange={(e)=>handleBaconChange(e)} />
          <span>switch</span>
          </label>
         
        
  </>
  )
}

class FirstPageForHire extends React.Component {
   state = { 
    projects: [],
    companyDetails:"",
    faceBookLink:"",
    instagramLink:"",
    websiteLink:"",
    language:[],
    userName:"",
    City:"",
    image:[],
    profileImage:"",
    baconIsReady: false,
    windowWidth: window.innerWidth,
    clientID:""
  
    } ; 
   

  imageElement = new Image();
   componentDidMount() {
    window.addEventListener('resize', this.handleResize); // Add event listener for resize
    this.fetchData();
    
  }
  componentWillUnmount() {
    window.removeEventListener('resize', this.handleResize); // Remove event listener on unmount
  }
  handleResize = () => {
    this.setState({ windowWidth: window.innerWidth }); // Update state with new window width on resize
  };
  setImage=(e)=>{
    
    let files = e.target.files;
   // console.log(files)
    let reader = new FileReader();
    reader.readAsDataURL(files[0]);
    reader.onload = (e) =>{
     
    this.setState({ image: files[0]}, () => { console.log(this.state.image) });
  
    }
  }

   fileUploadHandler = async (e) => {
      
    const formData = new FormData();
    
    formData.append("image",this.state.image);
    
    await CheckTokenExpiration();
    axios
      .post(apiLink+"/postProfileImage", formData, {
        headers: {
          Authorization: `Bearer ${GetCurrentUser().token}`
        }
      })
      
      .catch((err) => {
        console.log(err);
      });
  };

  
  
   fetchData =async() =>{
    await CheckTokenExpiration();
    try{
      const response =await axios.get(apiLink+'/getAllProjectDetailsANDClienDetails',{
      headers: {
        Authorization: "Bearer " +  GetCurrentUser().token
      }});
     
      console.log(response.data);
      if (response.data.ClientDetails && response.data.ClientDetails.companyDetails){
        this.setState(
          { projects:response.data.Projects,
             language:response.data.Languages,
             userName:response.data.UserName,
             City:response.data.City,
             companyDetails:response.data.ClientDetails.companyDetails,
            faceBookLink:response.data.ClientDetails.faceBookLink,
            instagramLink:response.data.ClientDetails.instagramLink,
            websiteLink:response.data.ClientDetails.websiteLink,
            profileImage:response.data.profileImage,
            clientID:response.data.ClientDetails.clientID
          }
          )
        
      }
     else{
      this.setState(
        { projects:response.data.Projects,
          City:response.data.City,
          userName:response.data.UserName,
           profileImage:response.data.profileImage
        }
        )
     }
      
    }catch(error){
      console.log(error);
    }
  } 
  
  render(
     
  ) { 
    const isDesktop = this.state.windowWidth >= 1120;
    console.log("isDesktop")
    console.log(isDesktop)
    return (
      <div className="background " >
         {!isDesktop && <SlidebarClient isDesktop={isDesktop}/> }
         <div className="devideLeft">
       {isDesktop && <SlidebarClient isDesktop={isDesktop}/> }
        </div>
        <div className="devideRight ">
          <div className="mostright ">
            <NavigationWorker value={this.state}></NavigationWorker>
          </div>
          </div>
           
         
           
        <div className="middleright ">
          
        <div className="col">
        <SearchBar options={this.state.projects} searchallProjects ={true} showcard = {true}></SearchBar> 
        { this.state.projects!=null && this.state.projects.slice(0, Math.ceil(this.state.projects.length / 2)).map(item => (
            
            <Card key={item.projectID} className="cards-pack" >
              
            <Link to={ `/viewproject/${item.projectID}`} key={item.projectID}>
            <img className="img-card" alt ="Sample" src={item.fileUplod.imagePath}/>
            </Link>

              <CardBody className="cardbody">
              <CardTitle tag="h5" className="cardtitle">
              {item.projectTitle}
              </CardTitle>
          
              <CardText className="cardtext">
              {item.smallDescription}
              </CardText>
              
              <CardLink href={"/portfolio/"+item.fk_userID.clientID} className="cardlink">
           
              ClientAccount_Link{item.fk_userID.clientID}
              <img className="img-profile" alt="Sample" src="https://picsum.photos/300/200" />
              </CardLink>
              
              <h1 className="price">{item.currencyType} {item.prizemaximum} - {item.prizeminimum}</h1>
              </CardBody>
          </Card>

          ))}
        
            </div>

        <div className="top-margin">
        { this.state.projects!=null  && this.state.projects.slice(Math.ceil(this.state.projects.length / 2)).map(item => (
             
             <Card key={item.projectID} className="cards-pack" >
               <Link to={`/viewproject/${item.projectID}`} key={item.projectID}>
              <img className="img-card" alt ="Sample" src={item.fileUplod.imagePath}/>
       
              </Link>
              <CardBody className="cardbody">
              <CardTitle tag="h5" className="cardtitle">
              {item.projectTitle}
              </CardTitle>
          
              <CardText className="cardtext">
              {item.smallDescription}
              </CardText>
              
              <CardLink href={"/portfolio/"+item.fk_userID.clientID} className="cardlink">
           
              ClientAccount_Link{item.fk_userID.clientID}
              <img className="img-profile" alt="Sample" src="https://picsum.photos/300/200" />
              </CardLink>
              
              <h1 className="price">{item.currencyType}  {item.prizeminimum} - {item.prizemaximum} </h1>
              </CardBody>
          </Card>

          ))}
        
          </div>
        
          <div className="profile-card">
          
          <img className="profile-photo" alt="Sample" src={this.state.profileImage} /> 
          <input   type="file"  value={this.state.file} onChange={(e)=>this.setImage(e)}/>
          <button className="button1" onClick={(e)=>this.fileUploadHandler(e)}>Upload a profile image</button>
          <div className="text-profile1">{this.state.userName}</div>

          <div className="text-profile">
          <hr className="line"></hr>
         <div className="font">From ----</div>
         {this.state.City != null && this.state.City}
         <hr className="line"></hr>
         <div className="font">About  -</div>
        {this.state.companyDetails}
         <hr className="line"></hr>
         <div className="font">FaceBookLink</div>
         {this.state.faceBookLink}

         <hr className="line"></hr>
         <div className="font">InstagramLink -</div>
          {this.state.instagramLink}
         
         <hr className="line"></hr>
         <div className="font">WebSite Link -</div>
         {this.state.websiteLink}
         <hr className="line"></hr>
    
         
          </div>
          </div>
          </div>
          
        </div>
      

    );
  }
}


export default FirstPageForHire ;