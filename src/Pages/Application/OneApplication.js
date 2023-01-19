import React from "react";
import { Link } from "react-router-dom";
import '../PostProject/Post_project.css'

class ViewOneApplication extends React.Component {
    state = {  } 
    render() { 
        return (
            <div className="background">
                    
                    <div> View One Application</div>
                    <Link to = "">
                    <button className="button"> Hire the freelancer</button>
                    </Link>
                    <button className="button"> message</button>
            </div>
        );
    }
}
 
export default ViewOneApplication;