import React from "react";
import ProgressBar from "../../components/progressbar/progressbar";
import { VscAccount } from "react-icons/vsc";
import { VscMail } from "react-icons/vsc";
import {VscHome } from "react-icons/vsc";
import { RiHome3Line } from "react-icons/ri";
import {RiHome4Line } from "react-icons/ri";
import { MdReceipt} from "react-icons/md";
import 'react-phone-number-input/style.css';
import { FcReadingEbook } from "react-icons/fc";
import { IoAddCircleSharp} from "react-icons/io5";
import { CategoryPicker, DataPicker } from "../../components/components/components";


class ApplicationWork2 extends React.Component {
    constructor(props){
        super(props);
        this.value ={};
        this.state = {
             items: [],
             award:[],
             startDate:"",
             endDate:"",
             moreDetail:"",
             currentIndex:1,
             education: [
                { major: '', school: '',title:'',year:'' }
          
             ],
             cerificates:[
                {certificate:'',cerifiedfrom:'',year:''}
              
             ],
             Ecategory:[],
             Ccategory:[],
             Acategory:[]
        };
        this.handleClick = this.handleClick.bind(this);
        //this.handleInputChange = this.handleInputChange.bind(this);
        this.handleClickAward = this.handleClickAward.bind(this);
        
    }
    
    setECategory=(selectedList,subcategory)=>{
        console.log({selectedList});
        this.setState({category:"Engineering"})
        this.setState({ Ecategory: selectedList }, () => {
          console.log("Ecategory:",this.state.Ecategory[0].esubCategoryName);
        })
     
      console.log("Achitecture:"+this.state.Acategory);
    }
  
  setCCategory = (selectedList) => {
    this.setState({ Ccategory: selectedList });
  };
  
  setACategory = (selectedList) => {
    this.setState({ Acategory: selectedList });
  };

    setStartDate =(e)=>{
        this.setState({startDate:e});
       }

    setMoreDetaile =(e)=>{
        
        this.setState({moreDetail:e.target.value});
       }

    setEndDate =(e)=>{
        this.setState({endDate:e});
      }

      handleInputChange=(e,index,name)=>{
        const updatedEducation = [...this.state.education];
        if(index!==0){
            updatedEducation[index]={ major: '', school: '',title:'',year:'' }
        }
        console.log(index)
        
        if(name ==='year'){
            updatedEducation[index][name] = e;  
        }else{
            updatedEducation[index][name] = e.target.value;
        }
       
        
        this.setState({ education: updatedEducation });
      }

      
      updateArray=(e,index,name)=>{
          const newEducation = { major: '', school: '', title: '', year: '' };
            this.setState(prevState => ({
                education: prevState.education.concat(newEducation)
              }));
      }

      updateCertificateArray=(e,index,name)=>{
        const newCertificates =  {certificate:'',cerifiedfrom:'',year:''};
          this.setState(prevState => ({
            cerificates: prevState.cerificates.concat(newCertificates)
            }));
    }

      updateDetails=(e,index,name)=>{
        
        const updatedEducation = [...this.state.education];
       
        console.log(index)
        
        if(name ==='year'){
            updatedEducation[index][name] = e;  
        }else{
            updatedEducation[index][name] = e.target.value;
        }
        this.setState({ education: updatedEducation });
      }

      handleAwards=(e,index,name)=>{
        
        
        const updatedCertificates = [...this.state.cerificates];
        if(name ==='year'){
            updatedCertificates[index][name] = e;  
        }else{
            updatedCertificates[index][name] = e.target.value;
        }
       
        
        this.setState({ cerificates: updatedCertificates });
      }


    handleClickAward(){
        this.updateCertificateArray();
    }
    handleClick(e){
        this.updateArray();
        console.log("update the array")  
    }
   
    setValue(){
        this.setState({});
    }
   
    render() { 
        const  education  = this.state.education;
        const cerificates = this.state.cerificates;

        console.log(education)
        console.log(cerificates)
        return (
            <div className="background">

            <div className="pageUp">
            <ProgressBar></ProgressBar>
            </div>

            <div className="pageDown">
                <div className="text" ><FcReadingEbook className="middle moddle"/>Education</div>
                <div className="textsubtitle ">This information will be displayed publicly so be careful what you share.</div> 
                <div className="inputForm">
                <div className="textsubtitle2"> Education Information</div>
                <div className="size">
            <input type="text" required value={this.state.moreDetail} onChange={this.setMoreDetaile}></input>
            <span><VscAccount />Tell us more about you</span>
            </div>

             {education.map((edu, index,name) => (
          
                 <div key={index}>
 
                <div className="inputBoxForm">
                <div className="inputBox">
                    <input type="text"   onChange={(e)=>this.handleInputChange(e,index,"school")} required></input>
                   
                    <span ><VscAccount /> School / University</span>
                </div>
                </div>

                <div className="inputBoxForm">
                <div class="inputBox">
                    <input type="text" required onChange={(e)=>this.handleInputChange(e,index,"title")}></input>
                    <span><VscAccount />Title</span>
                </div>

                <div className="inputBox dateTo">
                
                <label className="date"><VscMail />Year</label>
                <DataPicker required value={this.state.education[index].year} onChange={(e)=>this.handleInputChange(e,index,"year")}></DataPicker>
               
                </div> 
                  <div className="inputBox">
                    <input type="text" required onChange={(e)=>this.handleInputChange(e,index,"major")}></input>
                    <span><VscHome/>Major</span>
                </div>
                </div>
                <label className="add-item"> Add School/University</label>
                < IoAddCircleSharp className ="add"  onClick={(e)=>this.handleClick(e)}/>
                {this.state.items} 
              
                <hr className="dotted"></hr>
               
                </div>
                 ))}

            {cerificates.map((crt, index,name) => (
             
             <div key={index}>
                <div className ="inputBox inputBoxAddress space"> 
                   <input type="text" required  onChange={(e)=>this.handleAwards(e,index,"certificate")}></input>
                   <span><RiHome3Line/>Certificate or award</span>
               </div>

               <div className="inputBoxForm">
                <div className ="inputBox">
                    <input type="text" required  onChange={(e)=>this.handleAwards(e,index,"cerifiedfrom")}></input>
                    <span><MdReceipt/>certified from</span>
                </div>
                <div className="inputBox dateTo">
                
                <label className="date"><VscMail/>Year</label>
                <DataPicker required value={this.state.cerificates[index].year} onChange={(e)=>this.handleAwards(e,index,"year")}></DataPicker>
                   
                </div>    
                </div>
                <label className="add-item"> Add More Awards</label>
                < IoAddCircleSharp class ="add"  onClick={this.handleClickAward}/>
                {this.state.award} 
                <hr></hr>
               
                </div>
                 ))}
         
            <CategoryPicker required value={this.state}   onChange={this.setCategory} setECategory={this.setECategory}
                  setCCategory={this.setCCategory}
                setACategory={this.setACategory}>

            </CategoryPicker>
            
            <div className="inputBoxForm">

            <div className="inputBox dateTo">

            <label className="date"><VscMail/>From</label>
            <DataPicker required value={this.state.startDate} onChange={this.setStartDate}></DataPicker>
   
            </div>    
            <div className="inputBox dateTo">

            <label className="date"><VscMail/>To</label>
            <DataPicker required value={this.state.endDate} onChange={this.setEndDate}></DataPicker>
            </div>    
            </div>
                </div>
                <div className="buttons">
               
                <button className = "button"  >Submit</button>
              
                </div>
            </div>
            </div>
           
        );

}
}
export default ApplicationWork2;