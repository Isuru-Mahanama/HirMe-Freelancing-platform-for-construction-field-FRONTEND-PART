import {
  AiFillInstagram,
  AiFillLinkedin,
  } from "react-icons/ai";
  import {FaFacebookSquare} from "react-icons/fa";
 import { useEffect, useState } from "react";
 import { useParams } from 'react-router-dom';
 import axios from "axios";


 const apiLink ="http://localhost:8080/api/v1/user";

export default function Portfolio() {
  const { clientID } = useParams();
  console.log(clientID)
  const[client,setClient] =useState("");
  const[address,setAddress] = useState("");
  const[data,setDtata]=useState("");
  
  const fetchData =async() =>{
   try{
     const response =await axios.get(apiLink+'/ClientAndUserDetails/'+clientID);
     console.log(response.data);
     console.log(response.data.Client.companyDetails);
     if(response.data.Client && response.data){
      setClient(response.data.Client)
      setDtata(response.data);
      setAddress(response.data.Address)
      console.log("recieved data");
    }
    console.log("recieved data");
    console.log(client);
   }catch(error){
     console.log(error);
   }
 } 
 
  useEffect(()=>{
      fetchData()
  },[]);

  useEffect(() => {
    console.log("Updated blogs:", client);
  }, [client]);
  return (
    <div >
  
      <main className=" bg-white px-10  md:px-20 lg:px-40">
        <section className="min-h-screen">
       
          <div className="text-center  ">
          
            <h2 className="text-lg py-2 text-teal- font-medium  md:text-6xl">
         {data.UserName}
            </h2>
            <h3 className="text-base  md:text-3xl">
          {data.FirstName} {data.LastName}
            </h3>
           
           
            <div className="mx-auto bg-gradient-to-b from-teal-500 rounded-full w-80 h-80 relative overflow-hidden  md:h-96 md:w-96">
              
             
              <img src='/images/Eng.jpeg' layout="fill" objectFit="cover" alt="" />
            </div>
            <div className="text-7xl flex justify-center gap-16 py-3  ">
            <a href={client.faceBookLink}><FaFacebookSquare className="cardlink"/></a>
            <a href={client.websiteLink}><AiFillLinkedin className="cardlink" /></a>
            <a href={client.instagramLink}>< AiFillInstagram className="cardlink" /></a>
            </div>
          </div>
        </section>
            <h3 className="text-3xl py-1  ">About</h3>
           
          <div className="bg-gray-200">
            
            <div className="text-center shadow-lg p-10 rounded-xl my-10  flex-1 ">
              <img src='/images/design.png' width={100} height={100} alt="" />
              <h3 className="text-lg font-medium pt-8 pb-2 ">
              {client.companyDetails}
              </h3>
         
            </div>
          
          </div>
          <div>
            <h3 className="text-3xl py-1  ">Contact Information</h3>
          
          </div>
          <div className="bg-gray-200">
            
            <div className="text-center shadow-lg p-10 rounded-xl my-10  flex-1">
              <img src='/images/code.png' width={100} height={100} alt="" />
              <p className="cardlink">
            Address : {address.streetAddress},
                      {address.city},
                      {address.province},
                      {address.country}
            </p>
            <p className="cardlink">
            Email : {data.DisplayEmail}
            </p>
            <p className="cardlink" >
            Website Link: <a href={client.websiteLink}>{client.websiteLink}</a>
            </p>
            </div>
          
          </div>
       
         
        
      </main>
    </div>
  );
}