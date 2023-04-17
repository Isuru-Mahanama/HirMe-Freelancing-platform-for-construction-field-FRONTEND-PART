import React, { useState } from 'react';
import search from './search.json'
import './message.css'
import {VscSearch} from "react-icons/vsc"
import {CardBody} from 'reactstrap'
import {CardText} from 'reactstrap'
import {CardLink} from 'reactstrap'
import {Card} from 'reactstrap'
import {CardTitle} from 'reactstrap'
import { Link } from 'react-router-dom';
function SearchBar(props) {
 
  console.log(props)
  const [results,setshowresults] = useState(true);
  const [query, setQuery] = useState("")
  const [prize, setPrize] = useState("")
  const [selectedProject, setSelectedProject] = useState("")
  const [projectID, setProjectID] = useState("")
  const clickHandler = (value,value1,value2,post) => {
    console.log("value")
    console.log(value)
    console.log(value1)
    console.log(value2)
    setQuery(value);
    setProjectID(value1)
    setPrize(value2)
    setshowresults(false);
    setSelectedProject(post)
  }

  
 
  console.log(query)
  return (
   <>
   
     <span >< VscSearch className='span-serach'></VscSearch></span>
 
     <input className ="searchbar" placeholder="Search  " value={query} onChange={event => setQuery(event.target.value)}  onClick = {e => setshowresults(true)}></input>
    { !props.searchallProjects && <button onClick={e=>props.fetchData(query,prize,projectID)}>click here to load the payment form</button>}
    {
      results && props.options.filter(post => {
        if (query === '') {
          return false;
        } else if (post.projectTitle.toLowerCase().includes(query.toLowerCase())) {
          return true;
        }
        else return false;
      }).map((post,index) => (
      <div className = "  box" key={post.projectID} onClick={()=>clickHandler(post.projectTitle,post.projectID,post.prizeminimum,post)}>
      <p>{post.projectTitle}</p>
      <p></p>

    </div>
  ))
 
}

{props.showcard && results===false && <Card key={projectID} className="cards-pack" >
              
              <Link to={ `/viewproject/${projectID}`} key={projectID}>
              <img className="img-card" alt ="Sample" src={selectedProject.fileUplod.imagePath}/>
              </Link>
              <CardBody className="cardbody">
  
              
                <CardTitle tag="h5" className="cardtitle">
                {selectedProject.projectTitle}
                </CardTitle>
            
                <CardText className="cardtext">
                {selectedProject.smallDescription}
                </CardText>
                 
                <CardLink href={"/portfolio/"+selectedProject.fk_userID.clientID} className="cardlink">
             
                ClientAccount_Link{selectedProject.fk_userID.clientID}
                <img className="img-profile" alt="Sample" src="https://picsum.photos/300/200" />
                </CardLink>
                
                <h1 className="price">{selectedProject.currencyType} {selectedProject.prizemaximum} - {selectedProject.prizeminimum}</h1> 
                </CardBody>
            </Card>
  }
    </>
  );
}

export default SearchBar;

export function SearchBarForScheduling(props) {
 
  console.log(props)
  const [results,setshowresults] = useState(true);
  const [query, setQuery] = useState("")
  const [prize, setPrize] = useState("")
  const [projectID, setProjectID] = useState("")
  const clickHandler = (value,value1,value2) => {
    console.log("value")
    console.log(value)
    console.log(value1)
    console.log(value2)
    setQuery(value);
    setProjectID(value1)
    setPrize(value2)
    setshowresults(false);
  }

  
 
  console.log(query)
  return (
   <>
   
     <span >< VscSearch className='span-serach'></VscSearch></span>
    <label>select your project</label>
     <input className ="searchbar" placeholder="Search  " value={query} onChange={event => setQuery(event.target.value)}  onClick = {e => setshowresults(true)}></input>
    
    {
      results && props.options.filter(post => {
        if (query === '') {
          return false;
        } else if (post.projectTitle.toLowerCase().includes(query.toLowerCase())) {
          return true;
        }
        else return false;
      }).map((post,index) => (
      <div className = "  box" key={post.projectID} onClick={()=>clickHandler(post.projectTitle,post.projectID,post.prizeminimum)}>
      <p>{post.projectTitle}</p>
      <p></p>
    </div>
  ))
 
}
    </>
  );
}
export function SearchBarForFreelancers(props) {
 
  console.log(props)
  const [results,setshowresults] = useState(true);
  const [query, setQuery] = useState("")
  const [prize, setPrize] = useState("")
  const [projectID, setProjectID] = useState("")
  const clickHandler = (value,value1,value2) => {
    console.log("value")
    console.log(value)
    console.log(value1)
    console.log(value2)
    setQuery(value);
    setProjectID(value1)
    setPrize(value2)
    setshowresults(false);
  }

  
 
  console.log(query)
  return (
   <>
   
     <span >< VscSearch className='span-serach'></VscSearch></span>
    <label>select the users you need to send this link</label>
     <input className ="searchbar" placeholder="Search  " value={query} onChange={event => setQuery(event.target.value)}  onClick = {e => setshowresults(true)}></input>
    
    {
      results && props.options.filter(post => {
        if (query === '') {
          return false;
        } else if (post.projectTitle.toLowerCase().includes(query.toLowerCase())) {
          return true;
        }
        else return false;
      }).map((post,index) => (
      <div className = "  box" key={post.projectID} onClick={()=>clickHandler(post.projectTitle,post.projectID,post.prizeminimum)}>
      <p>{post.projectTitle}</p>
      <p></p>
    </div>
  ))
 
}
    </>
  );
}


