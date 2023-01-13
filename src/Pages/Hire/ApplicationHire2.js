import React from "react";
import ProgressBar from "../../components/progressbar/progressbar";
import { VscAccount } from "react-icons/vsc";
import { VscMail } from "react-icons/vsc";
import {VscHome } from "react-icons/vsc";
import { RiHome3Line } from "react-icons/ri";
import {RiHome4Line } from "react-icons/ri";
import {RiHome8Fill } from "react-icons/ri";
import {RiHome7Fill } from "react-icons/ri";
import {AiFillBank} from "react-icons/ai";
import { Link } from "react-router-dom";
import { VscLocation } from "react-icons/vsc";
import 'react-phone-number-input/style.css';
import { FcReadingEbook } from "react-icons/fc";
class ApplicationHire2 extends React.Component {
    constructor(props){
        super(props);
        this.value ={};
    }
    
    
    setValue(){
        this.setState({});
    }
    render() { 
        return (
            <div className="background">
               
                
        
            <div className="pageUp">
           <ProgressBar></ProgressBar>
            </div>

            <div className="pageDown">
                <div className="text" ><FcReadingEbook className="middle moddle"/>Edducation</div>
                <div className="textsubtitle ">This information will be displayed publicly so be careful what you share.</div> 
                <div className="inputForm">
                <div className="textsubtitle2"> Edducation Information</div>
               <div className="inputBoxForm">
                <div class="inputBox">
                <span></span> 
                    <input type="text" required></input>
                   
                    <span ><VscAccount /> School / University</span>
                   
                </div>

                <div class="inputBox">
                    <input type="text" required></input>
                    <span><VscAccount />Title</span>
                </div>
                
                </div>

                <div class="inputBox">
                    <input type="text" required></input>
                    <span><VscMail/>Year</span>
                </div>

                <div class="inputBox">
                    <input type="text" required></input>
                    <span><VscHome/>Major</span>
                </div>
                <div className ="inputBox inputBoxAddress">
                    <input type="text" required></input>
                    <span><RiHome3Line/>Cirtificate or award</span>
                </div>
                <div className="inputBoxForm">
                <div className ="inputBox">
                    <input type="text" required></input>
                    <span><RiHome4Line/>certified from</span>
                </div>

                <div className ="inputBox">
                    <input type="text" required></input>
                    <span><RiHome8Fill/>year</span>
                </div>

                <div className ="inputBox">
                    <input type="text" required></input>
                    <span><RiHome7Fill/>category</span>
                </div>
                </div>
                <div className="inputBoxForm">
                <div className ="inputBox">
                    <input type="text" required></input>
                    <span><AiFillBank/>sub category</span>
                </div>
              {/*   
                <div className ="inputBox">
                    <input type="text" required></input>
                    <span><VscCompassActive/>Time Zone</span>
                </div>
 */}
                <div className ="inputBox">
                    <input type="text" required></input>
                    <span><VscLocation/>from</span>
                </div>

                <div className ="inputBox">
                    <input type="text" required></input>
                    <span><VscLocation/>to</span>
                </div>
                </div>
              
                 </div>
               
                
             
                
                
                <div className="buttons">
                <Link to= "/applicationHire2">
                <button class = "button"  >Next</button>
                </Link>
                </div>
            </div>
            </div>
           
          
        );

}
}
export default ApplicationHire2;