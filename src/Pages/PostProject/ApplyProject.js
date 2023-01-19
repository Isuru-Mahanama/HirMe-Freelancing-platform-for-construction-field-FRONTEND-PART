import React from "react";
import './Post_project.css'

class ApplyProject extends React.Component {
    state = {  } 
    render() { 
        return (
            <div className="background">
                <div>description</div>
                <div>selct the role</div>
                <div>hourly rate</div>
                <div>any kind of resume</div>
                <button className="button">Apply</button>
            </div>
        );
    }
}
 
export default ApplyProject;