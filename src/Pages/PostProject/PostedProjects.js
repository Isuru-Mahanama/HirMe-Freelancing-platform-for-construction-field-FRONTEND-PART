import React from "react";
import { Link } from "react-router-dom";
import './Post_project.css'

class PostedProjects extends React.Component {
    state = {  } 
    render() { 
        return (
            <div className="background">
                    <div >show all the client posted projects as gigs</div>
                    <div> click the gigs go to the list of  applications related to one gig</div>
                    <Link to = "/viewapplications">
                    <button className="button"> view all applications</button>
                    </Link>
            </div>
        );
    }
}
 
export default PostedProjects;