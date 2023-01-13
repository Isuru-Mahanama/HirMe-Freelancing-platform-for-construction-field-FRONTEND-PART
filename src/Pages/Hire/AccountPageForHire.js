import React from "react";
import Slidebar from "../../components/slidebar/slidebar";
import './AccountPageHire.css';

import { Link } from "react-router-dom";

class FirstPageForHire extends React.Component {
  
  
   state = {  } ;
   
  render(
      
  ) { 
    
    return (
      <div className="background" >
        <div className="devideLeft">
        <Slidebar></Slidebar>
        </div>
       
        <div className="devideRight">
          <Link  to="/applicationhire">
          <button className="b1" >Set up your account!!!</button>
          </Link>
       
     
    
        </div>
      </div>

    );
  }
}


export default FirstPageForHire  ;