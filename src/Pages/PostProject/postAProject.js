import React from "react";
import { CategoryPicker, DataPicker, PrizeSelector } from "../../components/components/components";
import { VscAccount } from "react-icons/vsc";
import { VscMail } from "react-icons/vsc";
import './Post_project.css'
import 'react-phone-number-input/style.css';
import { FcReadingEbook } from "react-icons/fc";


class PostAProject extends React.Component {
  state = {  } 
  render() { 
    return (
 <div className="background">
               
    <div className="pageDown">
        <div className="text" ><FcReadingEbook className="middle moddle"/>Project</div>
        
        <div className="inputForm">
        <div className="textsubtitle2"> Project Information</div>
      
        <div className="inputBoxForm">
        <div class="inputBox">
        <span></span> 
            <input type="text" required></input>
           <span ><VscAccount /> Project Title</span>
           
        </div>
       
        </div>
        <div className="">
  
        <div class="size">
            <input type="text" required className=""></input>
            <span><VscAccount />Tell us more about your project</span>
            
        </div>
        
       
        </div>

        <div >
            <label for="file-upload" >
            <span  className ="text2 inputBox">Upload a file or drag or drop</span>
            <input id="file-upload" name="file-upload" type="file" class=" inputBox text2"/>
            <p class="text3">PNG, JPG, GIF up to 10MB</p>
            </label>
           
        </div>

       <hr></hr>
        <div className="">
        
        <div className ="">
            
            {/* <input type="text" required></input> */}
            {/* <span><RiHome7Fill/>category</span> */}
            <CategoryPicker required ></CategoryPicker>
                
        </div>
       
      {/*   
        <div className ="inputBox">
            <input type="text" required></input>
            <span><VscCompassActive/>Time Zone</span>
        </div>
*/}
        </div>
      
        <div className="inputBoxForm">

        <div class="inputBox dateTo">
        
        <label className="date"><VscMail/>From</label>
        <DataPicker required  ></DataPicker>
           
        </div>    
        <div class="inputBox dateTo">
        
        <label className="date"><VscMail/>To</label>
        <DataPicker required  ></DataPicker>
        </div>    
         </div>
       
       <hr></hr>
         <div class="inputBox dateTo">
        
        <label className="date"><VscMail/></label>
        <PrizeSelector></PrizeSelector>
        </div>    
        </div>
     
      
        <div className="buttons">
       
        <button class = "button"  >Submit</button>
      
        </div>

      
    </div>
    </div>
    );
  }
}
 
export default PostAProject;

