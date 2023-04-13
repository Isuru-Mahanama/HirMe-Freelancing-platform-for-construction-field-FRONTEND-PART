import React, { useEffect, useState } from "react";
import ProgressBar from "../../components/progressbar/progressbar";
import { VscAccount } from "react-icons/vsc";
import { useNavigate } from "react-router-dom";
import 'react-phone-number-input/style.css';
import { FcReadingEbook } from "react-icons/fc";
import { CheckTokenExpiration, GetCurrentUser } from "../../components/components/components";

const apiLink ="http://localhost:8080/api/v1/user";
function NavigationHire({ value, handleCircle, handleClick1,setClientDetals }){
    const navigation = useNavigate();
    const worker = false;
    const [halfsetup,setup] = useState(true);
    const history = useNavigate();

    const getStarted =async() =>{
     
            const clientDetails={
                companyDetails:value.companyDetails,
                websiteLink : value.websiteLink,
                faceBookLink :value.faceBookLink,
                instagramLink :value.instagramLink
               };
        await CheckTokenExpiration();
        fetch(apiLink +"/setUpClientAccount",{
                method :"PUT",
                headers: { "Content-Type": "application/json",
                        "Authorization": `Bearer ${ GetCurrentUser().token}`  },
                body:JSON.stringify(clientDetails)
            })
        .then(res => res.json())
        .then(data => {
            console.log(data);
        if (data.success) {
            console.log("CLient details are added is added.");
            navigation('/firstPageforHire',{ state: { setupyouraccount:false } });
            
            fetch(apiLink + "/checkclienttable",{
                method :"GET",
                headers: { "Content-Type": "application/json" ,
                          "Authorization": `Bearer ${ GetCurrentUser().token}`},
                body:JSON.stringify()

             }).then(Response => Response.json)
             console.log(Response)
               .then(data => setup(data))
               .catch(error => console.log(error));
              
               console.log("Setting up Accounthalo"+halfsetup);
            
            } else {
                console.log("Error:", data.message);
            }
        })
            .catch(error => {
                console.error("Error:", error);
        });
    }

    const GoingToNextPage = (e) => {
        getStarted();
     }
     const gotoPreviousPage=()=>{
        handleClick1();
        history("/applicationhire",{ state: { worker:worker}});
        
     }

     useEffect(()=>{
        fetch(apiLink+"/retrieveClientDetails",{
            method :"GET",
            headers: { "Content-Type": "application/json" ,
                      "Authorization": `Bearer ${ GetCurrentUser().token}`},
            body:JSON.stringify()

         }).then(res => res.json())
        
         .then(data => {
            console.log(data)
          //  backend stored client data diplaying
          setClientDetals(data.ClientDetails)
            
           
            console.log(data.ClientDetails.faceBookLink)
           //  this.setState(value.companyDetails=data.companyDetails);
            
         })
          
     },[])
      
    return(<>
    
    
   
    <button className="button btns" disabled ={value.active>0?false:true} onClick={gotoPreviousPage}>Prev</button>
    <button className="button btns " disabled ={value.active>=value.circle-1?true:false}onClick={GoingToNextPage}>Submit</button>
    </>
    )
}
class ApplicationHire2 extends React.Component {
    constructor(props){
        super(props);
        this.state ={
             companyDetails:"",
             websiteLink:"",
             faceBookLink:"",
             instagramLink:"",
             circle: 3,
             active:1,
             
        }
    }

    //backend stored client data displaying
    setClientDetals =(props)=>{
        console.log(props)
        this.setState({companyDetails:props.companyDetails});
        this.setState({websiteLink:props.websiteLink});
        this.setState({faceBookLink:props.faceBookLink});
        this.setState({instagramLink:props.instagramLink});
    }

    handleClick1 = () => {
    
        if(this.state.active<=0){
            this.setState({active:0})
             
        }else{
            this.setState({active:this.state.active-1})
        }  
      }

      handleCircle = () => {
    
        if( this.state.active>=this.state.circle){
            this.setState({active:this.state.circle})
       }else{
        this.setState({active:this.state.active+1})
       }
    }
    
    setCompanyDetails = (e) => {
       this.setState({companyDetails:e.target.value});
    }

    setWebSiteLink = (e) => {
        this.setState({websiteLink:e.target.value});
     }


     setInstagramLink = (e) => {
        this.setState({instagramLink:e.target.value});
     }

     setFaceBookLink = (e) => {
        this.setState({faceBookLink: e.target.value});
     }
     
    
    
    render() { 
        return (
            <div className="background">
          
            <div className="pageUp" >
            <ProgressBar className="middle-progressbar" active={this.state.active} circle={this.state.circle}></ProgressBar>
            </div>

            <div className="pageDown">
                <div className="text" ><FcReadingEbook className="middle moddle"/>Company Details</div>
                <div className="textsubtitle ">This information will be displayed publicly so be careful what you share.</div> 
                <div className="inputForm">
                <div className="textsubtitle2"> Information of the company</div>
            <div className="">
           
            <div className="size">
                <input type="text" required value={this.state.companyDetails} onChange={(e)=>{this.setCompanyDetails(e)}}></input>
                <span><VscAccount />Tell us more about you and your company</span>
            </div>

            <div className="inputBox">
                    <input type="text" required  value={this.state.faceBookLink} onChange={(e)=>{this.setFaceBookLink(e)}}></input>
                    <span><VscAccount />FaceBook Link</span>
            </div>

            <div className="inputBox">
                    <input type="text" required value={this.state.instagramLink} onChange={(e)=>{this.setInstagramLink(e)}} ></input>
                    <span><VscAccount />Instagram Link</span>
            </div>

            <div className="inputBox">
                    <input type="text" required value={this.state.websiteLink} onChange={(e)=>{this.setWebSiteLink(e)}} ></input>
                    <span><VscAccount />Website Link</span>
            </div>
        </div>
       
        
        </div>
        
        <NavigationHire value={this.state} handleCircle={this.handleCircle} handleClick1={this.handleClick1} setClientDetals={this.setClientDetals}></NavigationHire>
        
    </div>
    </div>
           
          
        );

}
}
export default ApplicationHire2;