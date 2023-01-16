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
        this.state = { items: [],award:[] };
        this.handleClick = this.handleClick.bind(this);
       
        this.handleClickAward = this.handleClickAward.bind(this);
        
    }
    
    handleClickAward(){
        this.setState(prevState => ({
            award: [...prevState.award, this.renderAwards()]
          }));
    }
    handleClick(){
        this.setState(prevState => ({
            items: [...prevState.items, this.renderInputs()]
          }));
        
    }
   
    setValue(){
        this.setState({});
    }

    
   

    renderInputs(){
        return(
            <div>
                 <hr class="dotted"></hr>
                <div className="inputBoxForm">
                <div class="inputBox space">
                <span></span> 
                    <input type="text" required></input>
                   
                    <span ><VscAccount /> School / University</span>
                   
                </div>
               
                </div>
                <div className="inputBoxForm">
                <div class="inputBox">
                    <input type="text" required></input>
                    <span><VscAccount />Title</span>
                </div>
                
                <div class="inputBox dateTo">
                
                <label className="date"><VscMail/>Year</label>
                <DataPicker required  ></DataPicker>
                   
                   

                   
                </div>    
                <div class="inputBox">
               
                    <input type="text" required></input>
                    <span><VscHome/>Major</span>
                </div>

                
              
                </div>
               
            </div>
        )
    }

    renderAwards(){
        return(
            <div>
                 <hr class="dotted"></hr>
                 <div className ="inputBox inputBoxAddress space">
                   
                   <input type="text" required></input>
                   <span><RiHome3Line/>Cirtificate or award</span>
               </div>
               <div className="inputBoxForm">
               <div className ="inputBox">
                   <input type="text" required></input>
                   <span><RiHome4Line/>certified from</span>
               </div>

               <div class="inputBox dateTo">
                
                <label className="date"><VscMail/>Year</label>
                <DataPicker required  ></DataPicker>
                   
                 </div>    
              
               
               </div>
               
            </div>
        )
    }
    render() { 
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
              
                <div className="inputBoxForm">
                <div class="inputBox">
                <span></span> 
                    <input type="text" required></input>
                   
                    <span ><VscAccount /> School / University</span>
                   
                </div>
               
                </div>
                <div className="inputBoxForm">
                <div class="inputBox">
                    <input type="text" required></input>
                    <span><VscAccount />Title</span>
                </div>
                <div class="inputBox dateTo">
                
                <label className="date"><VscMail/>Year</label>
                <DataPicker required  ></DataPicker>
                   
                   

                   
                </div>    
               

                

                <div class="inputBox">
                    <input type="text" required></input>
                    <span><VscHome/>Major</span>
                </div>
              
               
                
                </div>
                <label className="add-item"> Add School/University</label>
                < IoAddCircleSharp class ="add"  onClick={this.handleClick}/>
                {this.state.items} 
                
                <hr class="dotted"></hr>
               
                <div className ="inputBox inputBoxAddress space">
                   
                    <input type="text" required></input>
                    <span><RiHome3Line/>Certificate or award</span>
                </div>
                <div className="inputBoxForm">
                <div className ="inputBox">
                    <input type="text" required></input>
                    <span><MdReceipt/>certified from</span>
                </div>

                <div class="inputBox dateTo">
                
                <label className="date"><VscMail/>Year</label>
                <DataPicker required  ></DataPicker>
                   
                </div>    

               
                
                </div>
                <label className="add-item"> Add More Awards</label>
                < IoAddCircleSharp class ="add"  onClick={this.handleClickAward}/>
                {this.state.award} 
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
               
                </div>
             
                <div className="buttons">
               
                <button class = "button"  >Submit</button>
              
                </div>
            </div>
            </div>
           
          
        );

}
}
export default ApplicationWork2;