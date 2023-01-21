import React from "react";
import { Link } from "react-router-dom";
import './Post_project.css'


class ViewProject extends React.Component {

    constructor(props){
        super(props);
        this.file ={
        url: 'https://example.com/my-file.pdf',
        name: 'My File'
        }
        this.state =[{
            role:"Civil Engineer",
            hours:55,
            hourly_rate :'100$',
            full_amount: '5500$'
        },
        {
            role:"Civil Engineer",
            hours:55,
            hourly_rate :'100$',
            full_amount: '5500$'
        },
        {
            role:"Civil Engineer",
            hours:55,
            hourly_rate :'100$',
            full_amount: '5500$'
        }]
    }
   
       
    
    state = {  } 
    render() { 
        return (
            <div className="background">
            <div className="oneline">
            <Link to="/portfolio">
            <img className="img-profile2"
            alt="Sample"
            src="https://picsum.photos/300/200"
       
             />
             </Link>
             <div className="text" > I want a small size house</div>
             </div> 
               
                <div className="textsubtitle ">Read carefully and apply for the job!!!</div> 
                <div className="inputForm2">
                <div className="textsubtitle2"> Project Details</div>
               
                <div className="text5"> Small Description about the project!!</div>
                <div className="veiwdetails">
                <p >I want to bulid a house with 4 bedrooms. One master bedroom.
                    2 bathrooms. One should be attached bathroom. Living area.
                    Dining area
                </p>
                </div>  
                   
                <div className="text5"> Project in Detail!!</div>
                <div className="veiwdetails">
                <p >I want to bulid a house with 4 bedrooms. One master bedroom.
                    2 bathrooms. One should be attached bathroom. Living area.
                    Dining area
                </p>
                </div>  
                   
                
                <div className="center">
                    <a
                        href="https://www.w3.org/WAI/ER/tests/xhtml/testfiles/resources/pdf/dummy.pdf"
                        download
                    >
                    <button className="b1"> Click to download the resume</button>
                    </a>
   
                </div>  
                <div className="text5"> Selected categories!!!</div>
                <div className="veiwdetail">
                <p >Civil Engineering </p>
                <p >Civil Engineering </p>
                <p >Civil Engineering </p>
               
                </div>  
                <div className="flex">
                <div className="text5"> Project Satrting Time!!</div>
                <div className="veiwdetails">
                <p >2020/20/2
                </p>
                </div>  
                <div className="text5"> Project Ending Time!!</div>
                <div className="veiwdetails">
                <p >2020/20/2
                </p>
                </div>
                </div>  

                <div className="text5"> Full Budget range for the project!!</div>
                <div className="veiwdetails">
                <p >300$
                </p>
                </div>
                <table >
                    <thead>
                        <tr >
                            <th > Role</th>
                            <th >Hours</th>
                            <th>Hourly rate</th>
                            <th>Full amount per role</th>
                        </tr>
                    </thead>
                 </table>

                 {this.state.map((row,index)=>(
                    <tr key={index} className="table">
                    <td>{row.role}</td>
                    <td>{row.hours}</td>
                    <td>{row.hourly_rate}</td>
                    <td>{row.full_amount}</td>
                  </tr>
                 ))}
                 </div>
               
            
                <div className="buttons">
                 <Link to ="/applyproject">
                <button className="button">Apply</button>
                </Link>
                </div>
            </div>
        );
    }
}
 
export default ViewProject;