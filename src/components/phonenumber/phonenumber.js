import 'react-phone-number-input/style.css'
import PhoneInput from 'react-phone-number-input'
import TimezoneSelect from 'react-timezone-select';
import Selected from '../Languages';
import { useState } from "react";
import React from 'react';

import DatePicker from "react-datepicker";
import {RiHome7Fill } from "react-icons/ri";
import "react-datepicker/dist/react-datepicker.css";
import {Multiselect} from 'multiselect-react-dropdown';
 

 export const Example = (props) => {

  const data =[
    {Title: 'Structural Engineering' , id:1},
    {Title:'Civil ENgineering',id:2}
  ]
  const [options] = useState(data);

  return (
    <div className="multiselect">
      <Multiselect options={options} displayValue="Title" placeholder='SELECT SUBCATEGORY'></Multiselect>
    </div>
  );
}




export const DataPicker = () => {
  const [startDate, setStartDate] = useState();
  return (
    <DatePicker selected={startDate} onChange={(date) => setStartDate(date)} placeholder="Date"/>
  );
};


export  const PhoneNumber = () => {
    const [value, setValue] = useState();
    return (  
        <>

        <div className ="inputBox">
        <PhoneInput   value={value} onChange={setValue} placeholder ="PHONE NUMBER"/>
       
        </div>
        </>

    );
}

export const CategoryPicker = () => {
  const names = [
    'Engineering',
    'Architecture',
    'Constructions',
   
  ];
  

const[showEngineering,setShowEngineering] = useState(false);
const handleshowEngineering=(e) =>{
  /*  if (e.target.checked) {
     setShowEngineering(true);
   }  */
   setShowEngineering(current => !current);
   
 }

 const[showConstruction,setShowConstruction] = useState(false);
const handleshowConstruction=(e) =>{
  /*  if (e.target.checked) {
     setShowEngineering(true);
   }  */
   setShowConstruction(current => !current);
   
 }
 const[showArchitecture,setArchitecture] = useState(false);
 const handleshowArchitecture=(e) =>{
   /*  if (e.target.checked) {
      setShowEngineering(true);
    }  */
    setArchitecture(current => !current);
    
  }
 
  return ( 
    <div >
        
      
              <div className='inputBox'>
                <div className='dateTo'>
                <label className='date'> <RiHome7Fill />Categories</label>
                </div>
                
              
           
                <label className='date'>  Engineering</label>
                <input className="inputBox"  id = " mycheckbox" type="checkbox" value={showEngineering} onChange={(e)=>{handleshowEngineering(e)}}>
                  
                </input>
              </div>
                {
                showEngineering === true && (
                  <Example className="multiselect" options={names}></Example>
                )
              }
              

              <div className='inputBox'>
                <label className='date'>  Architecture</label>
                <input className="inputBox"  id = " mycheckbox" type="checkbox" value={showArchitecture} onChange={(e)=>{handleshowArchitecture(e)}}>
                  
                  </input>
              </div>
                {
                showArchitecture === true && (
                  <Example className="multiselect" options={names}></Example>
                )
              }
              
              <div className='inputBox'>
                  <label className='date'> Construction</label>
                  <input className="inputBox"  id = "mycheckbox" type="checkbox" value={showConstruction} onChange={(e)=>{handleshowConstruction(e)}}>
                  
                  </input>
              </div>
                  {
                showConstruction === true && (
                  <div >
                   <Example className="multiselect" options={names}></Example>
                  </div>
                )
              }
              
              
            </div>

    
   );
}
 




export  const Timezone = () => {
    const [selectedTimezone, setSelectedTimezone] = useState({})
  
    return (
    
       
        <div className="inputBox2">
        
       
        <div className="select-wrapper">
          <TimezoneSelect 
            value={selectedTimezone}
            onChange={setSelectedTimezone}
            placeholder ="TIME ZONE"
          />
        </div>
      
      </div>
     
    )
  }

  export const Languages =()=> {
    
    const [language, setLanguage] = useState('');

    

  const languages = [

    { value: 'english', label: 'English' },
    { value: 'spanish', label: 'Spanish' },
    { value: 'french', label: 'French' },
    { value: 'german', label: 'German' },
    { value: 'italian', label: 'Italian' },
    { value: 'chinese', label: 'Chinese' },
    { value: 'japanese', label: 'Japanese' },
    { value: 'korean', label: 'Korean' }
  ];

  return(
    <div>
        
        <Selected 
                            name="language"
                            value={language}
                            onChange={event => setLanguage(event.target.value)}
                            options={languages}
                            

                            
                            />
    </div>
  )
  }