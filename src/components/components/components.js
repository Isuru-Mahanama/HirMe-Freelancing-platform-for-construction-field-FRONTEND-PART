import 'react-phone-number-input/style.css'
import PhoneInput from 'react-phone-number-input'
import TimezoneSelect from 'react-timezone-select';
import { useState } from "react";
import React from 'react';
import DatePicker from "react-datepicker";
import {RiHome7Fill } from "react-icons/ri";
import "react-datepicker/dist/react-datepicker.css";
import {Multiselect} from 'multiselect-react-dropdown';
import './message.css'
import { FaChessBoard} from "react-icons/fa";
import {CardBody, CardSubtitle} from 'reactstrap'
import {CardText} from 'reactstrap'
import {CardLink} from 'reactstrap'
import {Card} from 'reactstrap'
import {CardTitle} from 'reactstrap'
import {CardFooter} from 'reactstrap';
import { Link } from 'react-router-dom';
import {CardHeader} from 'reactstrap';
import axios from 'axios';
import { useEffect } from 'react';
import { ArchitectureSubCategory } from '../../Pages/PostProject/postAProject';


const apiLink = "http://localhost:8080/api/v1/user";

export const Logout =()=>{
  localStorage.removeItem("user");
}
export const GetCurrentUser=()=>{
  //console.log(JSON.parse(localStorage.getItem("user")));
  const user = JSON.parse(localStorage.getItem("user"));
  return user ? user.token : null;
}


export const Example = ({value,onSelect,onRemove,data,displayValue}) => {
  
      return (
        <div className="multiselect">
         <Multiselect
        options={data}
        selectedValues={value}
        onSelect={onSelect}
        onRemove={onRemove}
        displayValue={displayValue}
      />
          
        </div>
  );
}



export const ConstructionSubCategory = ({value,onSelect,onRemove,data,displayValue}) => {
    
  
  console.log("Cpns");
    return (
      <div className="multiselect">
        <Multiselect value={value} selectedValues={value} onSelect={onSelect} onRemove={onRemove} options={data} displayValue="csubCategoryName" ></Multiselect>
      </div>
);
}

export const Avatar = () => {
  return ( 
    <div className="avatar">
    <div className="avatar-img">
      <img src={this.props.image} alt="#" />
    </div>
    <span className={`isOnline ${this.props.isOnline}`}></span>
  </div>
   );
}
 
export default Avatar;


export const Select = (props) => {
  const {data}=props;

  const[selected,setSelcted] = useState([]);
    return (
      <div className="select">
        <Select value={selected} onChange={setSelcted} options={data} displayValue="Title" ></Select>
      </div>
);
}

export  const Message = () => {
  return (
    <div className='out'>
    <div className='main'>
        <div className='nav2'>
            <div className="nav_blocks2">
            <FaChessBoard className='navi'/>
            </div>
            <div className='nav_blocks2'></div>
            <div className="nav_blocks2"></div>
        </div>

        <div className='main_chatbody'>
              {/* <ChatList/> */}
              <ChatBody/>
              <UserProfile/>
        </div>
    </div>
    </div>
    );
}


export const ChatBody = () => {
  return (
    <>
    </>
    );
}
 
export const UserProfile = () => {
  return (  
    <div>

    </div>
  );
}
 

 







export const DataPicker = ({value, onChange}) => {
  
  return (
    < DatePicker selected={value} onChange={(date) => onChange(date)} placeholder="Date"/>
  );
};


export  const PhoneNumber = ({value, onChange}) => {
   // const [value, setValue] = useState();
    return (  
        <>

        <div className ="inputBox">
        <PhoneInput   value={value.PhoneNumber} onChange={onChange} placeholder ="PHONE NUMBER"/>
       
        </div>
        </>

    );
}



export const CategoryPicker = ({value,onSelect,onRemove,onChange,setECategory,setACategory,setCCategory}) => {
 console.log("Ecategory"+value.Ecategory);
  const [categories,setCategories] = useState([]);
  const [Constructioncategories,setConstructionCategories] = useState([]);
  const [Architecturecategories,setArchitectureCategories] = useState([]);
  const [Engineeringcategories,setEngineeringCategories] = useState([]);
  
  const fetchArchitectureCategory = async()=>{
    try{
      const response = await axios.get(apiLink+"/getAllArchtectureSubCategories");
      setArchitectureCategories(response.data);
    }catch(error){
      console.log(error);
    }
  }
  useEffect(()=>{
    fetchArchitectureCategory();
  },[]);
  

  const fetchCategory = async()=>{
    try{
      const response = await axios.get(apiLink+'/getAllCattegories');
      setCategories(response.data);
    }catch(error){
      console.log(error);
    }
  }
  useEffect(()=>{
    fetchCategory();
  },[]);
  
  


  const fetchEngineeringCategory = async()=>{
    try{
      const response = await axios.get(apiLink+'/getEngineeringSubCategory');
      setEngineeringCategories(response.data);
    }catch(error){
      console.log(error);
    }
  }
  useEffect(()=>{
   fetchEngineeringCategory();
  },[]);
  
  const fetchConstructionCategory = async()=>{
    try{
      const response = await axios.get(apiLink+'/getAllConstructionSubCategories');
      setConstructionCategories(response.data);
    }catch(error){
      console.log(error);
    }
  }
  useEffect(()=>{
    fetchConstructionCategory();
  },[]);
  

const[showEngineering,setShowEngineering] = useState(false);
const handleshowEngineering=(e) =>{
  setShowEngineering(current => !current);
}

 const[showConstruction,setShowConstruction] = useState(false);
const handleshowConstruction=(e) =>{
   setShowConstruction(current => !current);
}
 const[showArchitecture,setArchitecture] = useState(false);
 const handleshowArchitecture=(e) =>{
    setArchitecture(current => !current);
  }

  const categoryNames = categories.map(category => category.categoryName);
  const categoryID = categories.map(category => category.categoryID);
  console.log("categoryIDI"+categoryID);
  const EngineeringcategoryNames = Engineeringcategories.map(categoryE => categoryE);
  const ConstructioncategoryNames = Constructioncategories.map(categoryC => categoryC);
  const ArchitectureCategoryNames = Architecturecategories.map(categoryA => categoryA);
  return ( 
    <div >
          <div className='inputBox'>
                <div className='dateTo'>
                <label className='date'> <RiHome7Fill />Categories</label>
                </div>
              
                <label className='date'>{categoryNames[0]}</label>
                <input className="inputBox"  id = " mycheckbox" type="checkbox" value={showEngineering} onChange={(e)=>{handleshowEngineering(e)}}>
                  
                </input>
              </div>
                {
                showEngineering === true && (
                  <Example className="multiselect" data={EngineeringcategoryNames} displayValue = "esubCategoryName" value={value.Ecategory}
                  onSelect={setECategory} onRemove={setECategory} onChange={onChange}></Example>
                  )
                }
              <div className='inputBox'>
              <label className='date'>{categoryNames[2]}</label>
                <input className="inputBox"  id = " mycheckbox" type="checkbox" value={showArchitecture} onChange={(e)=>{handleshowArchitecture(e)}}>
                  
                </input>
              </div>
                {
                showArchitecture === true && (
                  <ArchitectureSubCategory className="multiselect" data={ArchitectureCategoryNames } value={value.Acategory} onSelect={setACategory} onRemove={setACategory}></ArchitectureSubCategory>
                )
              }
              
              <div className='inputBox'>
              <label className='date'>{categoryNames[1]}</label>
                  <input className="inputBox"  id = "mycheckbox" type="checkbox" value={showConstruction} onChange={(e)=>{handleshowConstruction(e)}}>
                  
                  </input>
              </div>
                  {
                showConstruction === true && (
                  <div >
                   <ConstructionSubCategory className="multiselect" data={ConstructioncategoryNames} value={value.Ccategory} onSelect={setCCategory} onRemove={setCCategory}></ConstructionSubCategory>
                  </div>
                )
              }
              
              
            </div>

    
   );
}
 




export  const Timezone = ({value, onChange}) => {

    return (
    
        <div className="inputBox2">
       
        <div className="select-wrapper">
          <TimezoneSelect 
            value={value.selectedTimezone}
            onChange={onChange}
            placeholder ="TIME ZONE"
          />
        </div>
      
      </div>
     
    )
  }

  
  export const PrizeSelector = ({value, onChange}) => {

const [data,setData] = useState([]);
const [currency,setCurrency] = useState([]);
const[showhide,setShowhide] = useState(" ");

const handleshowhide=(event) =>{
  const getuser  = event.target.value;
  
  setShowhide(getuser);
  onChange(getuser);
  console.log("This is the key:"+event.target.value);
  
}

const fetchPrizes =async() =>{
  try{
    const response =await axios.get(apiLink+'/getPrizes');
    setData(response.data);
    console.log(response.data)
     }catch(error){
    console.log(error);
     }
 }
useEffect(()=>{
 
  fetchPrizes();
},[]);

const fetchCurrency =async() =>{
  try{
    const response =await axios.get(apiLink+'/getAllCurrencyTypes');
    setCurrency(response.data);
    console.log(response.data)
     }catch(error){
    console.log(error);
     }
 }
useEffect(()=>{
 
  fetchCurrency();
},[]);




    return ( 
      <div>
              <label for="country" class="text3">Full budget</label>
              
            <select
              name="prize"
              defaultValue="1" 
              onClick={handleshowhide}>
             {data.map(item=>(
              <option key={item.prizeID} value={item.prizeID} min={item.minimumPrize} max={item.maximumPrize} currencytype = {item.currencyType}>
                {item.projectType} {item.minimumPrize} {item.maximumPrize} {item.currencyType}
              </option>
              ))}
          <option value="1">Customize budget</option>
        </select>


              {
                showhide ==='1' && (
                  <div>
                   <div>
                        <label for="price" class="text3">Minimum Price</label>
                              <div class="relative mt-1 rounded-md shadow-sm">
                     
                      <input type="number" name="price" id="price" placeholder="0.00 $"/>
                      <div class="absolute inset-y-0 right-0 flex items-center">
                        <label for="currency" class="sr-only">Currency</label>
                      <select id="currency" name="currency">
                      
                        {currency.map(item=>(
                      <option key={item.currencyType} value={item.currency}>
                      {item.currency}  
                      </option>
                        ))}
                     </select>

                      

                      </div>
                   </div>
                    </div>

                    <div>
                        <label for="price" class="text3">Maximum Price</label>
                     <div class="relative mt-1 rounded-md shadow-sm">
                
                      <input type="number" name="price" id="price" placeholder="0.00$"/>
                      <div class="absolute inset-y-0 right-0 flex items-center">
                        
                      <select id="currency" name="currency">
                      
                      {currency.map(item=>(
                      <option key={item.currencyType} value={item.currency}>
                      {item.currency}  
                      </option>
                        ))}
         
                      </select>
                      </div>
                   </div>
                    </div>
                  </div>
                  
                )
              }
      </div>
     );
  };

  export const CardData = ({cardData}) => {
    return ( 
     
        <div className="card-container">
            {cardData.map((card, index) => (
                <Card className="cards cardspack" key={index}>
                    <Link to={card.projectLink}>
                        <img className="img-card" src={card.image} alt={card.title} />
                    </Link>
                    <CardBody className="cardbody">
                        <CardTitle tag="h5" className="cardtitle">{card.title}</CardTitle>
                        <Link to={card.applicationLink}>
                        <CardSubtitle className='cardsub'>View the applications</CardSubtitle>
                        </Link>
                        <CardText className="cardtext">{card.description}</CardText>
                        <CardLink href={card.freelancerLink} className="cardlink">
                            FreelancerAccount_Link
                            <img className="img-profile" src={card.profileImage} alt={card.title} />
                        </CardLink>
                        <h3 className="price">{card.price}</h3>
                    </CardBody>
                </Card>
            ))}
        </div>
     
     );
  } 
  export const CardApplication = ({cardData}) => {
    return ( 
     
        <div className="card-container2">
            {cardData.map((card, index) => (
                <Card className="card-application" key={index}>
                    <CardHeader className='card-header'>
                 Applied Job Type : {card.jobtype}
                </CardHeader>
                <CardBody>
                <CardTitle tag="h5" className='card-title'>
                Hourly Rate :{card.hourlyrate}
                </CardTitle>
                <CardText className='card-text'>
              {card.description}
              </CardText>
            
              </CardBody>
              <CardFooter>
             
              <CardLink href={card.freelancerAccountLik} className="cardlink1">
              FreelancerAccount_Link
              <img className="img-profile" src={card.profileImage} alt={card.title} />
              </CardLink>

              <div className="center">
              <a href="https://www.w3.org/WAI/ER/tests/xhtml/testfiles/resources/pdf/dummy.pdf"
                        download>
              <button className="b2"> Click to download the resume</button>
              </a>
              </div>  

              <Link to = "/">
                    <button className="b1"> Hire Freelancer</button>
                    </Link> 
                </CardFooter>
                </Card>
            ))}
            </div>
     
     );
  } 

  export const MyApplications = ({cardData}) => {
    return ( 
     
        <div className="card-container2">
            {cardData.map((card, index) => (
                <Card className="card-application" key={index}>
                    <CardHeader className='card-header'>
                Project Title:{card.projectTitle}
                </CardHeader>
                <CardSubtitle className='card-text'>
                Applied Job Type : {card.jobtype}
                </CardSubtitle>
                <CardBody>

                  
                <CardTitle tag="h5" className='card-title'>
                Hourly Rate :{card.hourlyrate}
                </CardTitle>
                <CardText className='card-text'>
              {card.description}
              </CardText>
              <CardText className='card-text'>
              Applied Date : {card.cardData}
              </CardText>
            
              </CardBody>
              <CardFooter>
             
              <CardLink href={card.freelancerAccountLik} className="cardlink1">
              FreelancerAccount_Link
              <img className="img-profile" src={card.profileImage} alt={card.title} />
              </CardLink>

              <CardLink href={card.projectLink} className="cardlink2">
              Project Link
             
              </CardLink>

              <div className="center">
              <a href="https://www.w3.org/WAI/ER/tests/xhtml/testfiles/resources/pdf/dummy.pdf"
                        download>
              <button className="b2"> Click to download the resume</button>
              </a>
              </div>  

             
                </CardFooter>
                </Card>
            ))}
            </div>
     
     );
  } 

