import React, { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import './Post_project.css'
import { useParams } from "react-router-dom";
import axios from "axios";
import { CheckTokenExpiration } from "../../components/components/components";


const apiLink ="http://localhost:8080/api/v1/user";
const ViewProject=(prop)=>  {
    const params = useParams();
    console.log(params.projectId)
    
    
    const [title,setTitle] = useState('');
    const [smallDescription,setSmallDescription] = useState('');
    const [moreDescription,setMoreDescription] = useState('');
    const [startDate,setStartDate] = useState('');
    const[endDate,setEndDate] = useState('');
    const[prizemaximum, setPrizeMaximum] = useState('');
    const[prizeminimum,setPrizeMinimum] = useState('');
    const[currencyType,setCurrencyType]= useState('');
    const[imagePath,setImagePath] = useState('');
    const[subcategory,setSubCategory] = useState([]);
   // const[filePath,setFilePath] = useState('');
    const[fileNames,setFileName] = useState('');
    
    
    const setData=(props)=>{
        setTitle(props.projectTitle);
        setSmallDescription(props.smallDescription)
        setMoreDescription(props.moreDescription);
        setStartDate(props.startDate);
        setEndDate(props.endDate);
        setCurrencyType(props.currencyType);
        setPrizeMaximum(props.prizemaximum);
        setPrizeMinimum(props.prizeminimum);
        setImagePath(props.fileUplod.imagePath);
     

    }

    const setCategoryDetails=(props)=>{
        setSubCategory(props);
        console.log(subcategory)
       // console.log(subcategory(0).esubCategoryID)
    }

    const history = useNavigate();
    const passingProjectID=(e)=>{
    history("/applyproject",{ state: { pID: params.projectId}});
  }
    const downloadFile=async()=>{
            await CheckTokenExpiration()
        try{
            console.log(apiLink+'/downloadFile')
            const response =await axios.get(apiLink+'/downloadFile/'+params.projectId,{
                responseType: 'blob',
            });

            const fileUrl = URL.createObjectURL(response.data);
            const link = document.createElement('a');
            link.href = fileUrl;
         
            link.setAttribute('download', fileNames);
            document.body.appendChild(link);
            link.click();
            document.body.removeChild(link);
        
          }catch(error){
            console.log(error);
          }
    }
    const fetchData =async() =>{
        await CheckTokenExpiration()
        try{
          const response =await axios.get(apiLink+'/viewallProjectDetails/'+params.projectId);
          setData(response.data.project)
          
          setCategoryDetails(response.data.subcategories)
          setFileName(response.data.project.fileUplod.fileName) 
          //console.log(response.data)
        }catch(error){
          console.log(error);
        }
    }

    useEffect(()=>{
        fetchData();
    },[]);
     
     return (
            <div className="background">
            <div className="oneline">
           
            <Link to="/portfolio">
            <img className="img-profile2"
            alt="Sample"
            src="https://picsum.photos/300/200"
       
             />
             </Link>
             <div className="text" > {title}</div>
             </div> 
          
                <div className="textsubtitle ">Read carefully and apply for the job!!!</div> 
                <div className="inputForm2">
                <div className="textsubtitle2"> Project Details</div>
               
                <div className="text5"> Small Description about the project!!</div>
                <div className="veiwdetails">
                <p >{smallDescription}</p>
                </div>  
                   
                <div className="text5"> Project in Detail!!</div>
                <div className="veiwdetails">
                <p >{moreDescription}</p>
                </div>  
                
                <img className="img-card" alt="Sample" src={imagePath}  />
                
                <div className="center">
                   
                    <button className="b1" onClick={(e)=>downloadFile(e)}> Click to download the resume</button>
                
                </div>  
               
                <div className="text5"> Selected categories!!!</div>
                <div className="veiwdetail">

                <table >
                    <thead>
                        <tr >
                            <th className="fontTable" >Category</th>
                            <th className="fontTable">SubCategory</th>
                        
                        </tr>
                    </thead>
               
                    <tbody>
                {subcategory.map((row,index)=>(
                    <tr key={index} className="">
                    <td className="fontTable" >{row.category}</td>
                    <td className="fontTable">{row.esubCategoryName}</td>
                    </tr>
                 ))}
                  </tbody>
                   </table>
                </div>  
               
                <div className="flex">
                <div className="text5"> Project Satrting Time!!</div>
                <div className="veiwdetails">
                <p >{startDate}</p>
                </div>  
                <div className="text5"> Project Ending Time!!</div>
                <div className="veiwdetails">
                <p >{endDate}</p>
                </div>
                </div>  

                <div className="text5"> Full Budget range for the project!!</div>
                <div className="veiwdetails">
                <p >{prizeminimum} - {prizemaximum} {currencyType}</p>
                </div>
                <table >
                    <thead>
                        <tr >
                            <th > Role</th>
                            <th >Hours</th>
                            <th>Hourly rate</th>
                            <th>Full amount per role</th>
                        </tr>
                    </thead>
                 </table>

              {/*    {this.state.map((row,index)=>(
                    <tr key={index} className="table">
                    <td>{row.role}</td>
                    <td>{row.hours}</td>
                    <td>{row.hourly_rate}</td>
                    <td>{row.full_amount}</td>
                  </tr>
                 ))} */}
                 </div>
               
            
                <div className="buttons">
               
                <button className="button" onClick={(e)=>passingProjectID(e)}>Apply</button>
             
                </div>
            </div>
        );
    
}
 
export default ViewProject;