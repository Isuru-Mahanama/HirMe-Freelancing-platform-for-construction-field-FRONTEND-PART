import React from "react";
import { CardApplication, CheckTokenExpiration, GetCurrentUser } from "../../components/components/components";
import axios from "axios";
import '../PostProject/Post_project.css'
import { useParams, useSearchParams } from "react-router-dom";
const apiLink ="http://localhost:8080/api/v1/user";


class ViewAllApplications extends React.Component {
    constructor(props){
        super(props);
        this.state = { cardData :[ {
            projectID:"",
            jobtype : "",
            description:"",
            hourlyrate:"",
            ResumeLink :'resume',
            freelancerAccountLik:"",
            profileImage: "https://picsum.photos/300/200",
            projectApplicationID:""
        }] } 

       
        
    } 
    componentDidMount() {
     //   const parms = useParams();
       // console
        //const { location } = this.props;
       // const query = new URLSearchParams(location);
     //   console.log(query)
       // const email = query.get('projectID');
    //   const searchParams = useSearchParams(
    //let params = queryString.parse(this.props.location.search)
    console.log("this.state.cardData[0].projectID")
    const search = window.location.search;
    const projectId = new URLSearchParams(search).get('projectID');
    console.log(projectId)
    
   
    this.fetchData(projectId);
      }

    fetchData =async(projectId) =>{
        await CheckTokenExpiration();
        console.log(projectId)
        try{
         
          const response =await axios.get(apiLink+'/ViewAllApplicationCardsForTheProject/'+projectId,{
            headers: {
                Authorization: `Bearer ${GetCurrentUser().token}`
              }});
          
              console.log(response.data);
        
           if(response.data.Applications) {
            const cardData = response.data.Applications.map((application) => ({
              projectID:application.projectID,
              jobtype:application.selectedSubCategory,
              description:application.moreDescription,
              hourlyrate:application.hourlyRate,
              ResumeLink:application.resumeName,
              freelancerAccountLik:'/portfolio/'+application.freelancerID,
              projectApplicationID:application.projectApplicationID
            }));
            this.setState({ cardData });
            console.log("received data");
          } 
        }catch(error){
          console.log(error);
        }
      } 
    
   render(
       
    ) { 
        return (
            
            <div className="background" >
              
                    <CardApplication cardData = {this.state.cardData}/>
                  
            </div>
        );
    }
}
 
export default ViewAllApplications;