import React, { useEffect, useState } from 'react';
import { BiCopyAlt } from "react-icons/bi";

import axios from 'axios';
import './BelowHome.css'

const apiLink = "http://localhost:8080/api/v1/user";
function Selected({onChange , onClick}) {

 
  const [data,setData] = useState([]);
  const [datalanguageLevel,datasetLanguageLevel] = useState([]);
 
   const fetchData =async() =>{
    try{
      const response =await axios.get(apiLink+'/getLanguages');
      setData(response.data);
      console.log(response.data)
    }catch(error){
      console.log(error);
    }
   
  }
  useEffect(()=>{
   
    fetchData();
  },[]);



  const fetchLanguageLevels =async() =>{
    try{
      const response =await axios.get(apiLink+'/getLanguageLevels');
      datasetLanguageLevel(response.data);
      console.log(response.data)
    }catch(error){
      console.log(error);
    }
   
  }
  useEffect(()=>{
   
    fetchLanguageLevels();
  },[]);
 
 
  

  return (
    <div className="Select  ">
     <div className='gap'>
      <label className="date"><BiCopyAlt/>Language</label>
    </div>
      <select
        name="language"
     
        onChange={onChange}>
        {data.map(item=>(
          <option key={item.languageID} value={item.language}>
            {item.language}
          </option>
        ))}
        
     </select>
     
      <div className="gap Select">
      <label className="date "><BiCopyAlt/>Language Level</label>
      </div>
      <select
        name="languageLevel"
        onClick={onClick}>
        {datalanguageLevel.map(item=>(
          <option key={item.languageLevelID} value={item.languageLevel}>
            {item.languageLevel}
          </option>
        ))}
        
     </select>
      
    </div>
  );
}



export default Selected;
