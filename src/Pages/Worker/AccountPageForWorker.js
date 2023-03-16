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
import { useLocation } from "react-router-dom";

const apiLink = "http://localhost:8080/api/v1/user";
function NavigationWorker(props){

  const location = useLocation();
  const email = location.state.email;
  const worker = true;
  console.log(email);
  const history = useNavigate();
  const handleSignUp=(e)=>{
    history("/applicationhire",{ state: { email: email,worker:worker}});
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

class AccountPageWorker extends React.Component {
   state = { 
    projects: []
    
    } ; 

  imageElement = new Image();
   componentDidMount() {
    this.fetchData();
    
  }
   
    
  
   fetchData =async() =>{
    try{
      const response =await axios.get(apiLink+'/getAllProjectDetails');
     
      this.setState({ projects:response.data})
      
      //console.log("currencty"+this.state.projectTitle)
      console.log(this.state)
      console.log("kkkkkkkkkkk")
    // console.log(this.state.images[0])
    }catch(error){
      console.log(error);
    }
  } 
  
  render(
     
  ) { 
    
    return (
      <div className="background" >
         <div className="devideLeft">
        <Slidebar></Slidebar>
        </div>
        <div className="devideRight">
          <div className="mostright">
            <NavigationWorker></NavigationWorker>
          </div>
          </div>
          <SearchBar options={this.state.options}></SearchBar>
        <div className="middleright">
        <div className="col">
        {this.state.projects.slice(0, Math.ceil(this.state.projects.length / 2)).map(item => (
            
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
           
              FreelancerAccount_Link
              <img className="img-profile" alt="Sample" src="https://picsum.photos/300/200" />
              </CardLink>
              
              <h1 className="price">{item.currencyType} {item.prizemaximum} - {item.prizeminimum}</h1>
              </CardBody>
          </Card>

          ))}
        
            </div>

        <div className="col">
        {this.state.projects.slice(Math.ceil(this.state.projects.length / 2)).map(item => (
             
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
           
              FreelancerAccount_Link
              <img className="img-profile" alt="Sample" src="https://picsum.photos/300/200" />
              </CardLink>
              
              <h1 className="price">{item.currencyType} {item.prizemaximum} - {item.prizeminimum}</h1>
              </CardBody>
          </Card>

          ))}
        
          </div>
          
          <div className="profile-card">
          <img className="profile-photo" alt="Sample" src="https://picsum.photos/300/200" /> 
          <div className="text-profile1">userName</div>

          <div className="text-profile">
          <hr className="line"></hr>
         <div className="font">From ----</div>
         Pilimathalawa
         <hr className="line"></hr>
         <div className="font">Member -</div>
         Since 2020
         <hr className="line"></hr>
         <div className="font">Description about me,, -</div>
         <hr className="line"></hr>
         <div className="font">Languages -</div>
         Sinhala
         English
         <hr className="line"></hr>
         <div className="font">Education -</div>
         <hr className="line"></hr>
         <div className="font">Certification -</div>
         <div>Kandy Girls' High School</div>
          </div>
          </div>
          </div>
          
        </div>
      

    );
  }
}


export default AccountPageWorker ;