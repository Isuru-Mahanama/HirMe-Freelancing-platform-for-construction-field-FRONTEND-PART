import React from "react";
import { Link } from "react-router-dom";
import '../PostProject/Post_project.css';

class AppliedProjects extends React.Component {
    state = {  } 
    render() { 
        return (
            <div className="background">
                    <div >show all the freelancer applied projects as gigs</div>
                  
                    <Link to = "/viewoneapplication">
                    <button className="button"> view the applocation</button>
                    </Link>
            </div>
        );
    }
}
 
export default AppliedProjects;