import React, { useState } from 'react';
import './Scheduling.css';
import SearchBar, { SearchBarForFreelancers, SearchBarForScheduling } from '../../components/components/searchbar';

import { useEffect } from 'react';
import { CheckTokenExpiration, GetCurrentUser } from '../../components/components/components';
const apiLink ="http://localhost:8080/api/v1/user";

const Scheduling = () => {
  const [startTime, setStartTime] = useState('');
  const [endTime, setEndTime] = useState('');
  const [link, setLink] = useState('');
  const[projects,setProjects] = useState([]);
  const [search,setSearch] = useState([]);

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Start Time:', startTime);
    console.log('End Time:', endTime);
    console.log('Link:', link);
  };
  const fetchProjectsDetails=()=>{
    const values = projects.map((item) => item.projectTitle  );
    console.log(projects)
    setSearch(values);
  }

  async function fetchProject() {
      
    await CheckTokenExpiration();
    const response = await fetch(apiLink+"/CientPostedProjects", {
      method: "GET",
      headers: { "Content-Type": "application/json",
               "Authorization": `Bearer ${ GetCurrentUser().token}` }
      
    })
      
        const data = await response.json();
     //     const values = data.map((item) => item.projectTitle);
          
        // console.log(data.projects);
         console.log(data);
         setProjects(data.Projects );
         fetchProjectsDetails();
         console.log(projects)
        //  console.log(values);
    
      
  }

  async function fetchUsers() {
      console.log("fetching users")
    await CheckTokenExpiration();
    const response = await fetch(apiLink+"/getAllfreelancerNames", {
      method: "GET",
      headers: { "Content-Type": "application/json",
               "Authorization": `Bearer ${ GetCurrentUser().token}` }
      
    })
      
        const data = await response.json();
     //     const values = data.map((item) => item.projectTitle);
          
        // console.log(data.projects);
         console.log(data);
        // setProjects(data.Projects );
         fetchProjectsDetails();
         console.log(projects)
        //  console.log(values);
    
      
  }

  useEffect(() => {
   // console.log(payment)
    // Create PaymentIntent as soon as the page loads
      fetchProject();
      fetchUsers ();
      //console.log(projectTitle)
      //fetchData();
    
  },[] );


  return (
    <form onSubmit={handleSubmit} className="form-container">
        <SearchBarForScheduling options={projects}></SearchBarForScheduling>
        <SearchBarForFreelancers options={projects}></SearchBarForFreelancers>
      <div className="form-group">
        <label htmlFor="start-time" className="form-label">Start Time:</label>
        <input type="time" id="start-time" name="start-time" value={startTime} onChange={(e) => setStartTime(e.target.value)} className="form-control" />
      </div>
      <div className="form-group">
        <label htmlFor="end-time" className="form-label">End Time:</label>
        <input type="time" id="end-time" name="end-time" value={endTime} onChange={(e) => setEndTime(e.target.value)} className="form-control" />
      </div>
      <div className="form-group">
        <label htmlFor="link" className="form-label">Link:</label>
        <input type="text" id="link" name="link" value={link} onChange={(e) => setLink(e.target.value)} className="form-control" />
      </div>
      <button type="submit" className="form-button">Send</button>
    </form>
  );
};

export default Scheduling;