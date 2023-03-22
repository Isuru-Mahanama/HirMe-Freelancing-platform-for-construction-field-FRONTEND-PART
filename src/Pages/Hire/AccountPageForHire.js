
import React from "react";
import  { SlidebarClient } from "../../components/slidebar/slidebar";
import {CardBody} from 'reactstrap'
import {CardText} from 'reactstrap'
import {CardLink} from 'reactstrap'
import {Card} from 'reactstrap'
import {CardTitle} from 'reactstrap'
import SearchBar from "../../components/components/searchbar";
import '../Hire/AccountPageHire.css'
import { Link } from "react-router-dom"
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { GetCurrentUser } from "../../components/components/components";



const apiLink = "http://localhost:8080/api/v1/user";
function NavigationWorker(props){

  const worker = false;
  
  const history = useNavigate();
  const handleSignUp=(e)=>{
    history("/applicationhire",{ state: { worker:worker}});
  }

  return(<>
         
         <button className="b1"  onClick={(e)=>handleSignUp(e)}>Set up your account!!!!!!</button>
        
          <Link  to="/setupworker">
          <button className="b1" >Edit your profile!!!</button>
          </Link>
     
          <Link  to="/portfolio">
          <button className="b1" >Portfolio!!!</button>
          </Link>
        
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
  
    } ; 

  imageElement = new Image();
   componentDidMount() {
    this.fetchData();
    
  }
   
    token =GetCurrentUser();
  
   fetchData =async() =>{
    try{
      const response =await axios.get(apiLink+'/getAllProjectDetailsANDClienDetails',{
      headers: {
        Authorization: "Bearer " + this.token.token
      }});
     
      console.log(response.data);
      if (response.data.ClientDetails  && response.data.ClientDetails.companyDetails){
        this.setState(
          { projects:response.data.Projects,
             language:response.data.Languages,
             userName:response.data.UserName,
             City:response.data.City,
             companyDetails:response.data.ClientDetails.companyDetails,
            faceBookLink:response.data.ClientDetails.faceBookLink,
            instagramLink:response.data.ClientDetails.instagramLink,
            websiteLink:response.data.ClientDetails.websiteLink,
          }
          )
        
      }
     else{
      this.setState(
        { projects:response.data.Projects,
          userName:response.data.UserName,
        }
        )
     }
      
    }catch(error){
      console.log(error);
    }
  } 
  
  render(
     
  ) { 
    
    return (
      <div className="background" >
         <div className="devideLeft">
       <SlidebarClient/>
        </div>
        <div className="devideRight">
          <div className="mostright">
            <NavigationWorker></NavigationWorker>
          </div>
          </div>
          <SearchBar options={this.state.options}></SearchBar>
        <div className="middleright">
        <div className="col">
          
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
              
              <CardLink href="/portfolio" className="cardlink">
           
              {this.state.userName}
              <img className="img-profile" alt="Sample" src="https://picsum.photos/300/200" />
              </CardLink>
              
              <h1 className="price">{item.currencyType} {item.prizemaximum} - {item.prizeminimum}</h1>
              </CardBody>
          </Card>

          ))}
        
            </div>

        <div className="col">
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
              
              <CardLink href="/portfolio" className="cardlink">
           
              {this.state.userName}
              <img className="img-profile" alt="Sample" src="https://picsum.photos/300/200" />
              </CardLink>
              
              <h1 className="price">{item.currencyType} {item.prizemaximum} - {item.prizeminimum}</h1>
              </CardBody>
          </Card>

          ))}
        
          </div>
          
          <div className="profile-card">
          <img className="profile-photo" alt="Sample" src="https://picsum.photos/300/200" /> 
          <div className="text-profile1">{this.state.userName}</div>

          <div className="text-profile">
          <hr className="line"></hr>
         <div className="font">From ----</div>
         {this.state.City!= null && this.state.City}
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