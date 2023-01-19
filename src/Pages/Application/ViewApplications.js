import React from "react";
import { Link } from "react-router-dom";
import '../PostProject/Post_project.css'

class ViewAllApplications extends React.Component {
    state = {  } 
    render() { 
        return (
            <div className="background">
                    <div show all the applications></div>
                    <div> click the gig type application to view the application</div>
                    <Link to = "/viewoneapplication">
                    <button className="button"> view one application</button>
                    </Link>
            </div>
        );
    }
}
 
export default ViewAllApplications;