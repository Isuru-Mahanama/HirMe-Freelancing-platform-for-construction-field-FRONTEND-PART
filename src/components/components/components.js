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
import './message.css'
import { FaChessBoard} from "react-icons/fa";
import {CardBody, CardSubtitle} from 'reactstrap'
import {CardText} from 'reactstrap'
import {CardLink} from 'reactstrap'
import {Card} from 'reactstrap'
import {CardTitle} from 'reactstrap'
//import ChatListItems from '../../Pages/ChatListItem';
import { Link } from 'react-router-dom';

 export const Example = (props) => {
    const {data}=props;
  
    const[selected,setSelcted] = useState([]);
      return (
        <div className="multiselect">
          <Multiselect value={selected} onChange={setSelcted} options={data} displayValue="Title" ></Multiselect>
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
/*  
export const ChatList = () => {
  

  allChatUsers = [
    {
      image:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcTA78Na63ws7B7EAWYgTr9BxhX_Z8oLa1nvOA&usqp=CAU",
      id: 1,
      name: "Tim Hover",
      active: true,
      isOnline: true,
    },
    {
      image:
        "https://pbs.twimg.com/profile_images/1055263632861343745/vIqzOHXj.jpg",
      id: 2,
      name: "Ayub Rossi",
      active: false,
      isOnline: false,
    },
    {
      image:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcTQEZrATmgHOi5ls0YCCQBTkocia_atSw0X-Q&usqp=CAU",
      id: 3,
      name: "Hamaad Dejesus",
      active: false,
      isOnline: false,
    },
    {
      image:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcRZ6tM7Nj72bWjr_8IQ37Apr2lJup_pxX_uZA&usqp=CAU",
      id: 4,
      name: "Eleni Hobbs",
      active: false,
      isOnline: true,
    },
    {
      image:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcRJo1MiPQp3IIdp54vvRDXlhbqlhXW9v1v6kw&usqp=CAU",
      id: 5,
      name: "Elsa Black",
      active: false,
      isOnline: false,
    },
    {
      image:
        "https://huber.ghostpool.com/wp-content/uploads/avatars/3/596dfc2058143-bpfull.png",
      id: 6,
      name: "Kayley Mellor",
      active: false,
      isOnline: true,
    },
    {
      image:
        "https://www.paintingcontest.org/components/com_djclassifieds/assets/images/default_profile.png",
      id: 7,
      name: "Hasan Mcculloch",
      active: false,
      isOnline: true,
    },
    {
      image:
        "https://auraqatar.com/projects/Anakalabel/media//vesbrand/designer4.jpg",
      id: 8,
      name: "Autumn Mckee",
      active: false,
      isOnline: false,
    },
    {
      image:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcSM6p4C6imkewkCDW-9QrpV-MMAhOC7GnJcIQ&usqp=CAU",
      id: 9,
      name: "Allen Woodley",
      active: false,
      isOnline: true,
    },
    {
      image: "https://pbs.twimg.com/profile_images/770394499/female.png",
      id: 10,
      name: "Manpreet David",
      active: false,
      isOnline: true,
    },
  ];
  return (  
    <div className='main_chatList'>
      <button className='btn1'>
        <i className='fa fa-plus '></i>
        <span>New Converstion</span>
      </button>

      <div className='chatlist_heading'>
        <h2>Chats</h2>
        <button className='btn-nobg'></button>
        <i className='fa fa-ellipsis-h'></i>
      </div>
      <div className="chatlist_search">
        <div className="search_wrap">
          <input type="text" placeholder='Search Here' required></input>
          <button className='search-btn'>
            <i className='fa fa-search'></i>
          </button>
        </div>
        
      </div>
      <div className="chatlist__items">
          {this.state.allChats.map((item, index) => {
            return (
              <ChatListItems
                name={item.name}
                key={item.id}
                animationDelay={index + 1}
                active={item.active ? "active" : ""}
                isOnline={item.isOnline ? "active" : ""}
                image={item.image}
              />
            );
          })}
        </div>
    </div>
    
  );
} */

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
 
  
  const data =[
    {Title: 'Structural Engineering' , id:1},
    {Title:'Civil ENgineering',id:2}
  ]

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
                  <Example className="multiselect" data={data}></Example>
                )
              }
              

              <div className='inputBox'>
                <label className='date'>  Architecture</label>
                <input className="inputBox"  id = " mycheckbox" type="checkbox" value={showArchitecture} onChange={(e)=>{handleshowArchitecture(e)}}>
                  
                  </input>
              </div>
                {
                showArchitecture === true && (
                  <Example className="multiselect" data={data}></Example>
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
                   <Example className="multiselect" data={data}></Example>
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

  export const PrizeSelector = () => {

    const[showhide,setShowhide] = useState(" ");

const handleshowhide=(event,checked) =>{
  const getuser  = event.target.value;
  setShowhide(getuser);
}
    return ( 
      <div>
              <label for="country" class="text3">Full budget</label>
                <select  id="country" name="country" autocomplete="country-name"  onChange={(e)=>{handleshowhide(e)}}>
                  <option>Micro Project($10.00 - 30.00 USD)</option>
                  <option>Simple Project($30.00 - 250.00 USD)</option>
                  <option>Very small project($250.00 - 750.00 USD)</option>
                  <option>Small project($750.00 - 1,500.00 USD)</option>
                  <option>Medium project($1,500.00 - 3,000.00 USD)</option>
                  <option>Large project($3,000.00 - 5, 000.00 USD)</option>
                  <option>Very Large project($10, 000.00 - 20,000.00 USD)</option>
                  <option>Huge project($20,000.00 - 50,000.00 USD)</option>
                  <option>Major project($50,000.00  + USD)</option>
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
                          <option>USD</option>
                          <option>CAD</option>
                          <option>EUR</option>
                        </select>
                      </div>
                   </div>
                    </div>

                    <div>
                        <label for="price" class="text3">Maximum Price</label>
                     <div class="relative mt-1 rounded-md shadow-sm">
                
                      <input type="number" name="price" id="price" placeholder="0.00$"/>
                      <div class="absolute inset-y-0 right-0 flex items-center">
                        
                        <select id="currency" name="currency" class="">
                          <option>USD</option>
                          <option>CAD</option>
                          <option>EUR</option>
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
                <Card className="card" key={index}>
                    <Link to={card.projectLink}>
                        <img className="img-card" src={card.image} alt={card.title} />
                    </Link>
                    <CardBody className="cardbody">
                        <CardTitle tag="h5" className="cardtitle">{card.title}</CardTitle>
                        <Link to={card.projectLink}>
                        <CardSubtitle className='cardsub'>View the posted project</CardSubtitle>
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