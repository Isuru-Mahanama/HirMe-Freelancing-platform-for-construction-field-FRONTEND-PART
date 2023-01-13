import 'react-phone-number-input/style.css'
import PhoneInput from 'react-phone-number-input'
import TimezoneSelect from 'react-timezone-select';
import Selected from '../Languages';
import { useState } from "react";


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