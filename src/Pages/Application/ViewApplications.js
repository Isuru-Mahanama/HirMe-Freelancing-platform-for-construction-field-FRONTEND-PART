import React from "react";
import { CardApplication } from "../../components/components/components";
import '../PostProject/Post_project.css'


class ViewAllApplications extends React.Component {
    constructor(props){
        super(props);
        this.state = { cardData :[ {
            jobtype : "Civil Engineer",
            description:"hello, I am a freelancer and I have worked at Srila.. I can understand what your plan is",
            hourlyrate:100,
            ResumeLink :'resume',
            freelancerAccountLik:'/portfolio',
            profileImage: "https://picsum.photos/300/200",
        },
        {
            jobtype : "Civil Engineer",
            description:"hello, I am a freelancer and I have worked at Srila.. I can understand what your plan is",
            hourlyrate:100,
            ResumeLink :'resume',
            freelancerAccountLik:'/portfolio',
            profileImage: "https://picsum.photos/300/200",
        }] } 
    } 
   render(
       
    ) { 
        return (
            
            <div >
                    <CardApplication cardData = {this.state.cardData}/>
                   
            </div>
        );
    }
}
 
export default ViewAllApplications;