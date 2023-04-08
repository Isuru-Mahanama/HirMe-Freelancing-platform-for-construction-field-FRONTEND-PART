import React from "react";
import './Post_project.css'
import { CardData, CheckTokenExpiration, GetCurrentUser } from "../../components/components/components";
import axios from "axios";
const apiLink ="http://localhost:8080/api/v1/user";

class PostedProjects extends React.Component {
         state = { cardData :[ {
            projectID:"",
            title: "",
            description: "",
            prizeminimum:"",
            prizemaximum:"",
            image: "",
            freelancerLink: "",
            profileImage: "https://picsum.photos/300/200",
            price: "",
            projectLink :"",
            applicationLink:"/viewapplications"
          
        }] } 

      
       token = GetCurrentUser();
       
        componentDidMount(){
            this.fetchData();
        }
        
       fetchData =async() =>{
            try{
              await CheckTokenExpiration();
              const response =await axios.get(apiLink+'/CientPostedProjects',{
                headers: {
                    Authorization: "Bearer " + this.token.token
                  }});
              
             // console.log(response.data.Projects.projectTitle  );
              console.log(response.data.Projects);
            //  console.log(response.data.Client.companyDetails);
              if(response.data.Projects ) {
                const cardData = response.data.Projects.map((project) => ({
                  projectID:project.projectID,
                  title: project.projectTitle,
                  description: project.smallDescription,
                  image: project.fileUplod.imagePath,
               
                  freelancerLink:"/portfolio/"+ response.data.ClientDetails.clientID,
                 // profileImage: project.profileImage,
                  price: project.currencyType,
                  prizeminimum:project.prizeminimum, 
                  prizemaximum:project.prizemaximum,
                  projectLink: "/viewproject/"+project.projectID,
                 // applicationLink: project.applicationLink,
                }));
                this.setState({ cardData });
                
              }
            }catch(error){
              console.log(error);
            }
          } 
     
       
    
    render() { 
       
        return (
            <div className="background">
                    <CardData cardData={this.state.cardData}/>
                  
            </div>
        );
    }
}
 
export default PostedProjects;