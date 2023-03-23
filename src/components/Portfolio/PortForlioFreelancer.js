import {
    AiFillTwitterCircle,
    AiFillLinkedin,
    AiFillYoutube,
  } from "react-icons/ai";
 import { useEffect, useState } from "react";
 import { useParams } from 'react-router-dom';
import { GetCurrentUser } from "../components/components";
 import axios from "axios";
 const apiLink ="http://localhost:8080/api/v1/user";

export default function PortfolioFreelancer() {
  const { clientID } = useParams();
  console.log(clientID)
  const[client,setClient] =useState("");
  const[user,setUser] = useState("");
  const[address,setAddress] = useState("");
  const[data,setDtata]=useState("");

  const token =GetCurrentUser();
  
  const fetchData =async() =>{
   try{
     const response =await axios.get(apiLink+'/ClientAndUserDetails/'+clientID);
     console.log(response.data);
     console.log(response.data.Client.companyDetails);
     if(response.data.Client && response.data){
      setClient(response.data.Client)
      setDtata(response.data);
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
          
            <h2 className="text-lg py-2 text-teal- font-medium dark:text-teal-400 md:text-6xl">
         {data.UserName}
            </h2>
            <h3 className="text-base  dark:text-white md:text-3xl">
          {data.FirstName} {data.LastName}
            </h3>
            <p className="text-sm py-5 leading-8 text-gray-800 dark:text-gray-200 max-w-xl mx-auto md:text-xl">
       
              
            </p>
           
            <div className="mx-auto bg-gradient-to-b from-teal-500 rounded-full w-80 h-80 relative overflow-hidden  md:h-96 md:w-96">
              
             
              <img src='/images/Eng.jpeg' layout="fill" objectFit="cover" alt="" />
            </div>
            <div className="text-5xl flex justify-center gap-16 py-3 text-gray-600 dark:text-gray-400">
              <AiFillTwitterCircle />
              <AiFillLinkedin />
              <AiFillYoutube />
            </div>
          </div>
        </section>
        <div>
            <h3 className="text-3xl py-1 dark:text-white ">About</h3>
            <p className="text-md py-2 leading-8 text-gray-800 dark:text-gray-200">

            {client.companyDetails}
            </p>
            
          </div>
          <div className="lg:flex gap-10">
            <div className="text-center shadow-lg p-10 rounded-xl my-10  dark:bg-white flex-1">
              <img src='/images/code.png' width={100} height={100} alt="" />
              <h3 className="text-lg font-medium pt-8 pb-2  ">
                
            {/*   {blogs && blogs.map((blog)=>(
                <div key ={blog.id}>
                    {blog.service_1_title}
                    
                </div>
            ))} */}
              
              </h3>
              <p className="py-2">
              {/* {blogs && blogs.map((blog)=>(
                <div key ={blog.id}>
                    {blog.service_desc_1}
                    
                </div>
            ))} */}
              
              
              </p>
              <h4 className="py-4 text-teal-600">Design Tools I Use</h4>
              <p className="text-gray-800 py-1">Photoshop</p>
              <p className="text-gray-800 py-1">Illustrator</p>
              <p className="text-gray-800 py-1">Figma</p>
              <p className="text-gray-800 py-1">Indesign</p>
            </div>
            <div className="text-center shadow-lg p-10 rounded-xl my-10 dark:bg-white flex-1">
              <img src='/images/design.png' width={100} height={100} alt="" />
              <h3 className="text-lg font-medium pt-8 pb-2 ">
                Code your dream project
              </h3>
              <p className="py-2">
                Do you have an idea for your next great website Let's make it reality.
              </p>
              <h4 className="py-4 text-teal-600">Design Tools I Use</h4>
              <p className="text-gray-800 py-1">Photoshop</p>
              <p className="text-gray-800 py-1">Illustrator</p>
              <p className="text-gray-800 py-1">Figma</p>
              <p className="text-gray-800 py-1">Indesign</p>
            </div>
            <div className="text-center shadow-lg p-10 rounded-xl my-10 dark:bg-white flex-1">
              <img src='/images/consulting.png' width={100} height={100} alt="" />
              <h3 className="text-lg font-medium pt-8 pb-2 ">Consulting</h3>
              <p className="py-2">
                Are you interested in feedback for your current project? I can
                give you tips and tricks to level it up.
              </p>
              <h4 className="py-4 text-teal-600">Design Tools I Use</h4>
              <p className="text-gray-800 py-1">Photoshop</p>
              <p className="text-gray-800 py-1">Illustrator</p>
              <p className="text-gray-800 py-1">Figma</p>
              <p className="text-gray-800 py-1">Indesign</p>
            </div>
          </div>
       
          <section className="py-10">
          <div>
            <h3 className="text-3xl py-1 dark:text-white ">Portofolio</h3>
            <p className="text-md py-2 leading-8 text-gray-800 dark:text-gray-200">
              Since the beginning of my journey as a freelance designer and
              developer, I've done remote work for
              <span className="text-teal-500"> agencies </span>
              consulted for <span className="text-teal-500">startups </span>
              and collaborated with talanted people to create digital products
              for both business and consumer use.
            </p>
            <p className="text-md py-2 leading-8 text-gray-800 dark:text-gray-200">
              I offer from a wide range of services, including brand design,
              programming and teaching.
            </p>
          </div>
          <div className="flex flex-col gap-10 py-10 lg:flex-row lg:flex-wrap">
            <div className="basis-1/3 flex-1 ">
              <img
                className="rounded-lg object-cover"
                width={"100%"}
                height={"100%"}
                layout="responsive"
                src='/images/web1.png'
                alt=""
              />
            </div>
            <div className="basis-1/3 flex-1">
              <img
                className="rounded-lg object-cover"
                width={"100%"}
                height={"100%"}
                layout="responsive"
                src='/images/web2.png'
                alt=""
              />
            </div>
            <div className="basis-1/3 flex-1">
              <img
                className="rounded-lg object-cover"
                width={"100%"}
                height={"100%"}
                layout="responsive"
                src='/images/SE.jpeg'
                alt=""
              />
            </div>
            <div className="basis-1/3 flex-1">
              <img
                className="rounded-lg object-cover"
                width={"100%"}
                height={"100%"}
                layout="responsive"
                src='/images/SE.jpeg'
                alt=""
              />
            </div>
            <div className="basis-1/3 flex-1">
              <img
                className="rounded-lg object-cover"
                width={"100%"}
                height={"100%"}
                layout="responsive"
                src='/images/SE.jpeg'
                alt=""
              />
            </div>
            <div className="basis-1/3 flex-1">
              <img
                className="rounded-lg object-cover"
                width={"100%"}
                height={"100%"}
                layout="responsive"
                src='/images/SE.jpeg'
                alt=""
              />
            </div>
          </div>
        </section>
      </main>
    </div>
  );
}