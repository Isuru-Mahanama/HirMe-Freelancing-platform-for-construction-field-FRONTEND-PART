import React from "react";
import { CategoryPicker, DataPicker, PrizeSelector } from "../../components/components/components";
import { VscAccount } from "react-icons/vsc";
import { VscMail } from "react-icons/vsc";
import './Post_project.css'
import 'react-phone-number-input/style.css';
import { FcReadingEbook } from "react-icons/fc";
import {Multiselect} from 'multiselect-react-dropdown';
import { useState } from "react";

export const ArchitectureSubCategory = (props) => {
    
  const[selected,setSelcted] = useState([]);
    return (
      <div className="multiselect">
        <Multiselect value={selected} onChange={setSelcted} options={props.data} displayValue="asubCategoryName" ></Multiselect>
      </div>
);
}

class PostAProject extends React.Component {
  constructor(props){
    super(props);
    this.state ={
         projectTitle:"",
         smallDescription:"",
         projectInDetail:"",
         file:"",
         category:"",
         startDate:"",
         endDate:"",
         prize:""
    }
  }
  render() { 
    return (
 <div className="background">
               
    <div className="pageDown">
        <div className="text" ><FcReadingEbook className="middle moddle"/>Project</div>
        
        <div className="inputForm2">
        <div className="textsubtitle2"> Project Information</div>
      
        <div className="inputBoxForm">
        <div class="inputBox">
        <span></span> 
            <input type="text" required value={this.state.projectTitle}></input>
           <span ><VscAccount /> Project Title</span>
           
        </div>
       
        </div>
        <div className="">
        <div class="size2">
            <input type="text" required className="" value={this.state.smallDescription}></input>
            <span><VscAccount />Small description about your project</span>
            
        </div>
        
       
  
        <div class="size">
            <input type="text" required className="" value={this.state.projectInDetail}></input>
            <span><VscAccount />Tell us more about your project</span>
            
        </div>

        
       
        </div>

        <div >
            <label for="file-upload" >
            <span  className ="text2 inputBox">Upload a file or drag or drop</span>
            <input id="file-upload" name="file-upload" type="file" class=" inputBox text2" value={this.state.file}/>
            <p class="text3">PNG, JPG, GIF up to 10MB</p>
            </label>
           
        </div>

       <hr></hr>
        <div className ="">
            <CategoryPicker required ></CategoryPicker>
          
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

