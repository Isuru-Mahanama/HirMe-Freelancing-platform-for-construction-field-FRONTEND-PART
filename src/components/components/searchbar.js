import React, { useState } from 'react';
import search from './search.json'
import './message.css'
import {VscSearch} from "react-icons/vsc"
function SearchBar(props) {
 

  const [results,setshowresults] = useState(true);
  const [query, setQuery] = useState("")
  const clickHandler = (value) => {
    setQuery(value);
    setshowresults(false);
  }

  
 
  
  return (
   <>
   
     <span >< VscSearch className='span-serach'></VscSearch></span>
 
     <input className ="searchbar" placeholder="Search job title " value={query} onChange={event => setQuery(event.target.value)}  onClick = {e => setshowresults(true)}></input>
     
    {
      results && search.filter(post => {
        if (query === '') {
          return false;
        } else if (post.role.toLowerCase().includes(query.toLowerCase())) {
          return true;
        }
        else return false;
      }).map((post,index) => (
      <div className = "  box" key={post.id} onClick={()=>clickHandler(post.role)}>
      <p>{post.role}</p>
      <p></p>
    </div>
  ))
 
}
    </>
  );
}

export default SearchBar;
