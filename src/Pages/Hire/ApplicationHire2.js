import React from "react";
import ProgressBar from "../../components/progressbar/progressbar";
import { VscAccount } from "react-icons/vsc";
import { useNavigate } from "react-router-dom";
import { useLocation } from "react-router-dom";
import 'react-phone-number-input/style.css';
import { FcReadingEbook } from "react-icons/fc";

const apiLink ="http://localhost:8080/api/v1/user";
function NavigationHire(props){
    const navigation = useNavigate();
    const uselocation = useLocation();

    const email = uselocation.state.email;
   console.log(props.value.websiteLink)
   
     const getStarted=(e)=>{
            e.preventDefault();
            console.log("EmailBack:"+email);
    
            const clientDetails={
                email:email,
                companyDetails:props.value.companyDetails,
                websiteLink : props.value.websiteLink,
                faceBookLink :props.value.faceBookLink,
                instagramLink :props.value.instagramLink
               };

        fetch(apiLink +"/setUpClientAccount",{
                method :"PUT",
                headers: { "Content-Type": "application/json" },
                body:JSON.stringify(clientDetails)

            })
        .then(res => res.json())
        .then(data => {
            console.log(data);
        if (data.success) {
            console.log("CLient details are added is added.");
            navigation('/firstPageforHire',{ state: { email: email } });
            } else {
                console.log("Error:", data.message);
            }
        })
            .catch(error => {
                console.error("Error:", error);
        });
    }

   
  
    return(<>
    
    <button class = "button" onClick={(e)=>getStarted(e)} >Next</button>
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
             instagramLink:""
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
               
                
        
            <div className="pageUp">
            <ProgressBar></ProgressBar>
            </div>

            <div className="pageDown">
                <div className="text" ><FcReadingEbook className="middle moddle"/>Company Details</div>
                <div className="textsubtitle ">This information will be displayed publicly so be careful what you share.</div> 
                <div className="inputForm">
                <div className="textsubtitle2"> Information of the company</div>
            <div className="">
           
            <div class="size">
                <input type="text" required value={this.state.companyDetails} onChange={(e)=>{this.setCompanyDetails(e)}}></input>
                <span><VscAccount />Tell us more about you and your company</span>
            </div>

            <div class="inputBox">
                    <input type="text" required  value={this.state.faceBookLink} onChange={(e)=>{this.setFaceBookLink(e)}}></input>
                    <span><VscAccount />FaceBook Link</span>
            </div>

            <div class="inputBox">
                    <input type="text" required value={this.state.instagramLink} onChange={(e)=>{this.setInstagramLink(e)}} ></input>
                    <span><VscAccount />Instagram Link</span>
            </div>

            <div class="inputBox">
                    <input type="text" required value={this.state.websiteLink} onChange={(e)=>{this.setWebSiteLink(e)}} ></input>
                    <span><VscAccount />Website Link</span>
            </div>
        </div>
       
        
        </div>
        <div className="buttons">
        <NavigationHire value={this.state}></NavigationHire>
        </div>
    </div>
    </div>
           
          
        );

}
}
export default ApplicationHire2;