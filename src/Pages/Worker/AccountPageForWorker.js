import React from "react";
import Slidebar from "../../components/slidebar/slidebar";
//import './AccountPageHire.css';
import {CardBody} from 'reactstrap'
import {CardText} from 'reactstrap'
import {CardLink} from 'reactstrap'
import {Card} from 'reactstrap'
import {CardTitle} from 'reactstrap'

import '../Hire/AccountPageHire.css'
import { Link } from "react-router-dom";

class AccountPageWorker extends React.Component {
  
  
   state = {  } ;
   
  render(
      
  ) { 
    
    return (
      <div className="background" >
        <div className="devideLeft">
        <Slidebar></Slidebar>
        </div>
       
        <div className="devideRight">
          <div className="mostright">
          

        <Link  to="/setupworker">
          <button className="b1" >Set up your account!!!!!!</button>
          </Link>
       
       
         <Link  to="/setupworker">
          <button className="b1" >Edit your profile!!!</button>
          </Link>
     
          <Link  to="/portfolio">
          <button className="b1" >Portfolio!!!</button>
          </Link>
         
          </div>
     
        </div>
        <div className="middleright">
              <Card className="card" >
      <Link to="/viewproject">
      <img className="img-card"
        alt="Sample"
        src="https://picsum.photos/300/200"
       
      />
      </Link>
      <CardBody className="cardbody">
              <CardTitle tag="h5" className="cardtitle">
              I wiill do a large project of house
              </CardTitle>
          
            <CardText className="cardtext">
                  Some quick example text to build on the card title and make up the bulk of the card‘s content.
            </CardText>
              
           
            <CardLink href="/portfolio" className="cardlink">
           
                  FreelancerAccount_Link
                  <img className="img-profile" alt="Sample" src="https://picsum.photos/300/200" />

                 
            </CardLink>
            <h3 className="price">5$</h3>
            </CardBody>
          </Card>
        </div>

      </div>

    );
  }
}


export default AccountPageWorker ;