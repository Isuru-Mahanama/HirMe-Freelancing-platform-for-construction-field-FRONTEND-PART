import React from "react";
import { CategoryPicker, DataPicker, PrizeSelector } from "../../components/components/components";
import { VscAccount } from "react-icons/vsc";
import { VscMail } from "react-icons/vsc";
import './Post_project.css'
import 'react-phone-number-input/style.css';
import { FcReadingEbook } from "react-icons/fc";
import {Multiselect} from 'multiselect-react-dropdown';
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useLocation } from "react-router-dom";
import axios from "axios";
import { useEffect } from "react";

const apiLink ="http://localhost:8080/api/v1/user";
export const ArchitectureSubCategory = (props) => {
    
  const[selected,setSelcted] = useState([]);
    return (
      <div className="multiselect">
        <Multiselect value={selected} onChange={setSelcted} options={props.data} displayValue="asubCategoryName" ></Multiselect>
      </div>
);
}
function FetcheingDatata(props){

  const navigation = useNavigate();
  const uselocation = useLocation();

  const email = uselocation.state.email;
  
    const project ={
      email :email,
      projectTitle:props.value.projectTitle,
      smallDescription:props.value.smallDescription,
      projectInDetail:props.value.projectInDetail,
      file:props.value.file,
      category:props.value.category,
      startDate:props.value.startDate,
      endDate:props.value.endDate,
      prize:props.value.prize
    }

   
async function postProject(url, data) {
  try {
    const response = await axios.post(url, data);
    console.log(response.data);
  } catch (error) {
    console.error(error);
  }
}

const SaveProjectDetails =(e)=>{
  postProject(apiLink+"/postProject",project);
}
  console.log("Here"+email);
  console.log(props.value.projectTitle);
  return(<>
    <button class = "button" onClick={(e)=>SaveProjectDetails(e)} >Submit</button>
    </>
    )

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

   setProjectTitle=(e)=>{
    this.setState({projectTitle:e.target.value});
   }

   setSmallDescription=(e)=>{
    this.setState({smallDescription:e.target.value});
   }

   setProjectInDetail=(e)=>{
    this.setState({projectInDetail:e.target.value});
   }

   setFile=(e)=>{
    this.setState({file:e.target.value});
   }

   setStartDate =(e)=>{
    this.setState({startDate:e.target.value});
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
            <input type="text" required value={this.state.projectTitle} onChange={this.setProjectTitle}></input>
           <span ><VscAccount /> Project Title</span>
           
        </div>
       
        </div>
        <div className="">
        <div class="size2">
            <input type="text" required className="" value={this.state.smallDescription} onChange={this.setSmallDescription}></input>
            <span><VscAccount />Small description about your project</span>
            
        </div>
        
       
  
        <div class="size">
            <input type="text" required className="" value={this.state.projectInDetail} onChange={this.setProjectInDetail}></input>
            <span><VscAccount />Tell us more about your project</span>
        </div>
        </div>
        <div >
            <label for="file-upload" >
            <span  className ="text2 inputBox">Upload a file or drag or drop</span>
            <input id="file-upload" name="file-upload" type="file" class=" inputBox text2" value={this.state.file} onChange={this.setFile}/>
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
        <DataPicker required value={this.state} onChange={this.setStartDate}></DataPicker>
           
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
        <FetcheingDatata  value={this.state}></FetcheingDatata >
        </div>
       
               
               
      
    </div>
    </div>
    );
  }
}
 
export default PostAProject;

