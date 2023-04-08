import React from "react";
import '../PostProject/Post_project.css';
import { GetCurrentUser, MyApplications } from "../../components/components/components";
import SearchBar from "../../components/components/searchbar";
import axios from "axios";
const apiLink = "http://localhost:8080/api/v1/user";

class AppliedProjects extends React.Component {
   
       state = { cardData :[ {
            projectTitle:"",
            jobtype : "",
            description:"",
            hourlyrate:"",
            ResumeLink :'resume',
            clientLink:'',
            profileImage: "https://picsum.photos/300/200",
            projectLink :'',
            cardData:'20/20/2020',
            projectID:'',
            fileName:'',
            applicationDate:''

        }
       ] } 
       componentDidMount(){
        this.fetchData();
    }
    
    token = GetCurrentUser();

    
   fetchData =async() =>{
        try{
          const response =await axios.get(apiLink+"/getAllApplicationDetails",{
            headers: {
                Authorization: "Bearer " + this.token.token
              }});
          
         // console.log(response.data.Projects.projectTitle  );
          console.log(response.data);
        //  console.log(response.data.Client.companyDetails);
          if(response.data) {
            const cardData = response.data.Applications.map((project) => ({
              projectTitle:project.projectTitle,
              description: project.moreDescription ,
              jobtype: project.selectedSubCategory,
              projectID:project.projectIDD,
             clientLink:"/portfolio/"+ project.clientID,
             // profileImage: project.profileImage,
                price: project.selectedCurrency,
                prizeminimum:project.hourlyRate, 
               projectLink: "/viewproject/"+project.projectIDD,
               fileName:project.resumeName,
               applicationDate:project.applicationDate

            }));
            
            
            
            this.setState({ cardData });
            console.log(response.data);

           
          }
        }catch(error){
          console.log(error);
        }
      } 
 
   

    render() { 
        return (
            <div className="background">

                    make it to search by date
                    <SearchBar options={this.state.options}></SearchBar>
                     <MyApplications cardData = {this.state.cardData}/>
                  
                 
            </div>
        );
    }
}
 
export default AppliedProjects;