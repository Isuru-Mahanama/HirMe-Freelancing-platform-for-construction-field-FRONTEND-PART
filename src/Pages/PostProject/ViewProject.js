import React from "react";
import { Link } from "react-router-dom";
import './Post_project.css'

class ViewProject extends React.Component {
    state = {  } 
    render() { 
        return (
            <div className="background">

            <div className="text">Title of the project</div>
                <div>project Information</div>
                
                <div>project small description</div>
                <div>project large description</div>
                <div>attached resume</div>
                <div>Categories selected</div>
                <div>project starting time</div>
                <div>project ending time</div>
                <div>budget role</div>
                <div>within a table cvilEngineer , hourly rate</div>
                <div>full budget range for the project</div>
                <Link to ="/applyproject">
                <button className="button">Apply</button>
                </Link>
            </div>
        );
    }
}
 
export default ViewProject;