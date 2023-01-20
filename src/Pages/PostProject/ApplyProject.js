import React from "react";
import './Post_project.css'
import { VscAccount } from "react-icons/vsc";
import { VscMail } from "react-icons/vsc";
import { FcBusinesswoman } from "react-icons/fc";
import {  FcBusinessman } from "react-icons/fc"
import { Link } from "react-router-dom";

class ApplyProject extends React.Component {
    state = { 
        options:['Civil Engineer', 'Structural Engineer','Architect'],
        selectedOption: null
     } ;
   
    handleChange = e=>{
        this.setState({selectedOption :e.target.value});
    }
    render() { 
        return (
            <div className="background">
                <div className="text" >  <div className="img-middle"> < FcBusinessman className="middle"/><FcBusinesswoman className="middle"/> </div>Apply For The Project!!</div>
                <div className="textsubtitle ">Accurate information is essential !!</div> 
                <div className="inputForm">
                <div className="textsubtitle2"> </div>
               
                <div class="size">
               <input type="text" required></input>
                <span ><VscAccount /> Description </span>
                </div>

                <div  className = "inputBox">
                <select value={this.state.selectedOption} onChange ={this.handleChange} placeholder='SELECT THE JOB TYPE'>
                <option value={null}>SELECT THE JOB TYPE!!</option>
                    {
                        this.state.options.map(option =>(
                            <option key = {option} value={option}>
                                {option}
                            </option>
                        ))
                    }
                </select>
                
                </div>
                <div class="inputBox">
                    <input type="number" required></input>
                    <span><VscMail/>HOURLY RATE</span>
                </div>
                
                <div>
                    <label for="price" class="text-price">PRICE</label>
                    <div class="relative mt-1 rounded-md shadow-sm inputBox ittems">
                     
                      <input type="number" name="price" id="price" placeholder="0.00 $"/>
                    
                        <label for="currency" class="sr-only">Currency</label>
                        <select id="currency" name="currency">
                          <option>USD</option>
                          <option>CAD</option>
                          <option>EUR</option>
                        </select>

                    
                    </div>
                    </div>

                    <div >
                     <label for="file-upload" >
                    <span  className ="text2 inputBox">Upload a resume</span>
                    <input id="file-upload" name="file-upload" type="file" class=" inputBox text2"/>
                    <p class="text3">PNG, JPG, GIF up to 10MB</p>
                    </label>
           
                </div>
                </div>
                <div className="buttons">
                 <Link to ="/">
                <button className="button">Apply</button>
                </Link>
                </div>
                </div>
          
        );
    }
}
 
export default ApplyProject;