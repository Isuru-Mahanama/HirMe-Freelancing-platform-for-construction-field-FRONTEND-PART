import React, { useEffect, useState } from 'react';
import { BiCopyAlt } from "react-icons/bi";

import axios from 'axios';
import './BelowHome.css'

const apiLink = "http://localhost:8080/api/v1/user";
function Selected({onChange}) {

  const [languageLevel, setLanguageLevel] = useState('');
  const [data,setData] = useState([]);

 
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
 
  const languageLevels = [' ','Native', 'Fluent', 'Proficient', 'Intermediate', 'Beginner'];

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
      <Select 
        name="language-level"
        value={languageLevel}
        onChange={event => setLanguageLevel(event.target.value)}
        options={languageLevels}
      />
      
    </div>
  );
}

const Select = ({ name, value, onChange, options }) => (
  <select name={name} value={value} onChange={onChange} >
    {options.map(option => (
      <option key={option} value={option} >
        {option}
      </option>
    ))}
  </select>
);

export default Selected;
