import React from "react";
import Slidebar from "../../components/slidebar/slidebar";
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
import { CheckTokenExpiration, GetCurrentUser } from "../../components/components/components";
import Toggle from 'react-toggle'


const apiLink = "http://localhost:8080/api/v1/user";
function NavigationWorker({value}){

  const handleBaconChange=(event)=> {
    history("/loginas")
    // do something with event.target.checked
  }
  const worker = true;
  const baconIsReady= true

  const history = useNavigate();
  const handleSignUp=(e)=>{
    history("/applicationhire",{ state: { worker:worker}});
  }
  const gotoPortfolio=(e)=>{
    history("/portfolioFreelancer/"+value.freelancerID);
  }

  return(<>
         
         <button className="b1"  onClick={(e)=>handleSignUp(e)}>Set up your account!!!!!!</button>
        
          
     
          
          <button className="b1" onClick={(e)=>gotoPortfolio(e)}>Portfolio!!!</button>
         
          <label>
          <Toggle
          defaultChecked={baconIsReady}
          onChange={(e)=>handleBaconChange(e)} />
          <span>switch</span>
          </label>
         
        
  </>
  )
}

class AccountPageWorker extends React.Component {
   state = { 
    projects: [],
    freelancer:[],
    language:[],
    userName:"",
    City:"",
    education:[],
    moreDetails:"",
    category:[],
    image:[],
    profileImage:"",
    baconIsReady: false,
    freelancerID:""
    
    } ; 

  imageElement = new Image();
   componentDidMount() {
    this.fetchData();
    
  }
  setImage=(e)=>{
    
    let files = e.target.files;
   // console.log(files)
    let reader = new FileReader();
    reader.readAsDataURL(files[0]);
    reader.onload = (e) =>{
     
    this.setState({ image: files[0]}, () => { console.log(this.state.image) });
  
    }
  }
    
  
   fetchData =async() =>{
    await CheckTokenExpiration();
    try{
      const response =await axios.get(apiLink+'/getAllProjectDetails',{
      headers: {
        Authorization: "Bearer " + GetCurrentUser().token
      }});
     
      console.log(response.data);
      if (response.data.FreelancerDetails ){
        this.setState(
          { projects:response.data.Projects,
            freelancer:response.data.FreelancerDetails.cerificates,
             language:response.data.Languages,
            userName:response.data.UserName,
            City:response.data.City,
            education:response.data.FreelancerDetails.freelancerEducationDetails,
            moreDetails:response.data.FreelancerDetails.moreDetail,
            category:response.data.FreelancerDetails.categoryDetails,
            profileImage:response.data.profileImage,
            freelancerID:response.data.FreelancerDetails.freelancerID
          }
          )
        
      }
     else{
      this.setState(
        { projects:response.data.Projects,
          userName:response.data.UserName,
          profileImage:response.data.profileImage
        }
        )
     }
      
    }catch(error){
      console.log(error);
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
  render(
     
  ) { 
    
    return (
      <div className="background" >
         <div className="devideLeft">
       <Slidebar></Slidebar> 
        </div>
        <div className="devideRight">
          <div className="mostright">
            <NavigationWorker value={this.state}></NavigationWorker>
          </div>
          </div>
          <SearchBar options={this.state.projects} searchallProjects ={true} showcard = {true}></SearchBar> 
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
              
              <CardLink href={"/portfolio/"+item.fk_userID.clientID} className="cardlink">
           
              ClientAccount_Link{item.fk_userID.clientID}
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
           
              ClientAccount_Link
              <img className="img-profile" alt="Sample" src="https://picsum.photos/300/200" />
              </CardLink>
              
              <h1 className="price">{item.currencyType} {item.prizemaximum} - {item.prizeminimum}</h1>
              </CardBody>
          </Card>

          ))}
        
          </div>
          
          <div className="profile-card">
          <img className="profile-photo" alt="Sample" src="http://localhost:8080/api/v1/user/profileimage.jpg" /> 
          <input   type="file"  value={this.state.file} onChange={(e)=>this.setImage(e)}/>
          <button className="button1" onClick={(e)=>this.fileUploadHandler(e)}>Upload a profile image</button>
         
          <div className="text-profile1">{this.state.userName}</div>

          <div className="text-profile">
          <hr className="line"></hr>
         <div className="font">From ----</div>
         {this.state.category!= null && this.state.City}
         <hr className="line"></hr>
         <div className="font">Category -</div>

         {this.state.category!= null && this.state.category.map(category=>(
            <li key={category.categoryId}>{category.category}-{category.esubCategoryName}  </li>
          ))}
         <hr className="line"></hr>
         <div className="font">Description about me, -</div>
         {this.state.moreDetails!=null && this.state.moreDetails}

         <hr className="line"></hr>
         <div className="font">Languages -</div>
         {this.state.language !=null && this.state.language.language} - {this.state.language !=null && this.state.language.languageLevel}
         
         <hr className="line"></hr>
         <div className="font">Education -</div>
          {this.state.education != null && this.state.education.map(education=>(
      
          <li key={education.educationID} >{education.title} - {education.major} - {education.school}  </li>
          ))}
         <hr className="line"></hr>
         <div className="font">Certification -</div>

         {this.state.freelancer!= null && this.state.freelancer.map(cerificate=>(
            <li key={ cerificate.freelancerCertificatesDetailsID} >{cerificate.certificate}-{cerificate.cerifiedfrom}  </li>
          ))}
         
          </div>
          </div>
          </div>
          
        </div>
      

    );
  }
}


export default AccountPageWorker ;