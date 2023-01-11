import React from "react";
import './index.css'
import { VscAccount } from "react-icons/vsc";
import { VscMail } from "react-icons/vsc";
import {VscHome } from "react-icons/vsc";
import { RiHome3Line } from "react-icons/ri";
import {RiHome4Line } from "react-icons/ri";
import {RiHome8Fill } from "react-icons/ri";
import {RiHome7Fill } from "react-icons/ri";

class WorkApplications extends React.Component {
    state = {  } 
    render() { 
        return (
           <>
            <div className="background">
                <div className="text" >Profile</div>
                <div className="textsubtitle ">This information will be displayed publicly so be careful what you share.</div> 
                <div className="inputForm">
                <div className="textsubtitle2"> Personal Information</div>
               <div className="inputBoxForm">
                <div class="inputBox">
                <span></span> 
                    <input type="text" required></input>
                   
                    <span ><VscAccount /> First Name</span>
                   
                </div>

                <div class="inputBox">
                    <input type="text" required></input>
                    <span><VscAccount />Last Name</span>
                </div>
                
                </div>

                <div class="inputBox">
                    <input type="text" required></input>
                    <span><VscMail/>Email</span>
                </div>

                <div class="inputBox">
                    <input type="text" required></input>
                    <span><VscHome/>Country</span>
                </div>
                <div className ="inputBox inputBoxAddress">
                    <input type="text" required></input>
                    <span><RiHome3Line/>Street Address</span>
                </div>
                <div className="inputBoxForm">
                <div className ="inputBox">
                    <input type="text" required></input>
                    <span><RiHome4Line/>City</span>
                </div>

                <div className ="inputBox">
                    <input type="text" required></input>
                    <span><RiHome8Fill/>State/Province</span>
                </div>

                <div className ="inputBox">
                    <input type="text" required></input>
                    <span><RiHome7Fill/>ZIP/Postal Code</span>
                </div>
                </div>
               
                </div>
                <div class="buttons">
                    <button className="button texts">Next</button>
                </div>
            </div>
            </>
            
        );
    }
}
 
export default WorkApplications;