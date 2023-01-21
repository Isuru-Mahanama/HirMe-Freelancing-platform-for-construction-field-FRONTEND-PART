import React from "react";
import '../PostProject/Post_project.css';
import { MyApplications } from "../../components/components/components";
import SearchBar from "../../components/components/searchbar";
class AppliedProjects extends React.Component {
    constructor(props){
        super(props);
        this.state = { cardData :[ {
            projectTitle:"I want to build a small size house.",
            jobtype : "Civil Engineer",
            description:"hello, I am a freelancer and I have worked at Srila.. I can understand what your plan is",
            hourlyrate:100,
            ResumeLink :'resume',
            freelancerAccountLik:'/portfolio',
            profileImage: "https://picsum.photos/300/200",
            projectLink :'/viewproject',
            cardData:'20/20/2020'
        },
        {
            projectTitle:"I want to build a small size house.",
            jobtype : "Civil Engineer",
            description:"hello, I am a freelancer and I have worked at Srila.. I can understand what your plan is",
            hourlyrate:100,
            ResumeLink :'resume',
            freelancerAccountLik:'/portfolio',
            profileImage: "https://picsum.photos/300/200",
            projectLink :'/viewproject',
            cardData:'20/20/2020'
        }] } 
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