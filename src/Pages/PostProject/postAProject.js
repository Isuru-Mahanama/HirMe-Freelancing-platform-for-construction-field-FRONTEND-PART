import React from "react";
import { CategoryPicker, DataPicker, PrizeSelector } from "../../components/components/components";
import { VscAccount } from "react-icons/vsc";
import { VscMail } from "react-icons/vsc";
import './Post_project.css'
import 'react-phone-number-input/style.css';
import { FcReadingEbook } from "react-icons/fc";
import {Multiselect} from 'multiselect-react-dropdown';
import { useLocation } from "react-router-dom";
import axios from "axios";


const apiLink ="http://localhost:8080/api/v1/user";
export const ArchitectureSubCategory = ({value,onSelect,onRemove,data,displayValue}) => {
    
    return (
      <div className="multiselect">
      <Multiselect
     options={data}
     selectedValues={value}
     onSelect={onSelect}
     onRemove={onRemove}
     displayValue="asubCategoryName"
   />
       
     </div>
);
}
function FetcheingDatata(props){
  
  const uselocation = useLocation();

  const email = uselocation.state.email;
 
    const project ={
      email :email,
      projectTitle:props.value.projectTitle,
      smallDescription:props.value.smallDescription,
      moreDescription:props.value.projectInDetail,
      Ecategory: props.value.Ecategory.map((item) => {
        return {
          esubCategoryName: item.esubCategoryName,
          esubCategoryID: item.esubCategoryID
        };
      }),
      //Ecategory:props.value.Ecategory,
      //file:props.value.file,
      Acategory: props.value.Acategory.map((item) => {
        return {
          esubCategoryName: item.asubCategoryName,
          esubCategoryID: item.asubCategoryID
        };
      }),
      Ccategory: props.value.Ccategory.map((item) => {
        return {
          esubCategoryName: item.csubCategoryName,
          esubCategoryID: item.csubCategoryID
        };
      }),
      
     category:props.value.category,
     startDate:props.value.startDate,
     endDate:props.value.endDate,
     projectType:props.value.projectType,
     prizeminimum:props.value.prizeminimum,
     prizemaximum:props.value.prizemaximum,
     currencyType:props.value.currencyType
    }


   
const fileUploadHandler = () => {
  const formData = new FormData();
  formData.append("file", props.value.files);
  formData.append("image",props.value.image);
  console.log(project)
 // console.log("this is object"+this.project.endDate)
  formData.append("projectDTO", JSON.stringify(project));
  console.log(props.value.image)
  axios
    .post(apiLink+"/postProjectFile", formData)
    .then((res) => {
      console.log(res.data);
    })
    .catch((err) => {
      console.log(err);
    });
};


  console.log("Here"+email);
  
  return(<>
    
    <button class="button" onClick={fileUploadHandler}>Submit</button>
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
         files:[],
         fileByteArray: null,
         category:"",
         Ecategory:[],
         Ccategory:[],
         Acategory:[],
         startDate:"",
         endDate:"",
         image:[],
        projectType: 0.0,
        prizeminimum:"",
        prizemaximum:"",
        currencyType:""
    }
  }

 
  setEECategory = (selectedList) => {
    this.setState({ Ecategory: selectedList });
  };
  
  setCCategory = (selectedList) => {
    this.setState({ Ccategory: selectedList });
  };
  
  setACategory = (selectedList) => {
    this.setState({ Acategory: selectedList });
  };
  

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
    let files = e.target.files;
    let reader = new FileReader();
    reader.readAsDataURL(files[0]);
    reader.onload = (e) =>{
     
    this.setState({ files: files[0] }, () => { console.log(this.state.files) });
  
    }
  }
  setImage=(e)=>{
    
    let files = e.target.files;
   // console.log(files)
    let reader = new FileReader();
    reader.readAsDataURL(files[0]);
    reader.onload = (e) =>{
     
    this.setState({ image: files[0]}, () => { console.log(this.state.image) });
  
    }
  }

   setStartDate =(e)=>{
    this.setState({startDate:e});
   }

   setEndDate =(e)=>{
    this.setState({endDate:e});
   }
  
  
   setPrize =(getuser,minimumvalue,MaximumValue,currencyType) =>{
    
    this.setState({projectType:getuser});
    this.setState({prizeminimum:minimumvalue});
    this.setState({prizemaximum:MaximumValue});
    this.setState({currencyType:currencyType});
    console.log("Prize:"+this.state.prizemaximum)
   }
   setECategory=(selectedList,subcategory)=>{
    console.log({selectedList});
    this.setState({category:"Engineering"})
    this.setState({ Ecategory: selectedList }, () => {
      console.log("Ecategory:",this.state.Ecategory[0].esubCategoryName);
    })
 
  console.log("Achitecture:"+this.state.Acategory);
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
        </div><div >
            <label for="file-upload" >
            <span  className ="text2 inputBox">Upload a Image or drag or drop(This will appear with your project)</span>
            <input id="file-upload"  type="file" className=" inputBox text2" value={this.state.file} onChange={(e)=>this.setImage(e)}/>
            <p class="text3">PNG, JPG, GIF up to 10MB</p>
            </label> 
           
        </div>
        <div >
            <label for="file-upload" >
            <span  className ="text2 inputBox">Upload a file or drag or drop</span>
            <input id="file-upload"  type="file" className=" inputBox text2" value={this.state.file} onChange={(e)=>this.setFile(e)}/>
            <p class="text3">PNG, JPG, GIF up to 10MB</p>
            </label> 
           
        </div>

       <hr></hr>
        <div className ="">
            <CategoryPicker required value={this.state}   onChange={this.setCategory} setECategory={this.setECategory}
          setCCategory={this.setCCategory}
          setACategory={this.setACategory}>

        </CategoryPicker>
            
        </div>
      
        <div className="inputBoxForm">

        <div class="inputBox dateTo">
        
        <label className="date"><VscMail/>From</label>
        <DataPicker required value={this.state.startDate} onChange={this.setStartDate}></DataPicker>
           
        </div>    
        <div class="inputBox dateTo">
        
        <label className="date"><VscMail/>To</label>
        <DataPicker required value={this.state.endDate} onChange={this.setEndDate}></DataPicker>
        </div>    
         </div>
       
       <hr></hr>
         <div class="inputBox dateTo">
        
        <label className="date"><VscMail/></label>
        <PrizeSelector required value={this.state} onChange={this.setPrize}></PrizeSelector>
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

