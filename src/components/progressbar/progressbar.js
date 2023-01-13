import React, { useState, useEffect } from "react";
import Circle from "./circle";
import './progressbar.css'


 function ProgressBar() {

    const [active,setActive] = useState(0)
    const[width,setWidth] = useState(0)
    const[circle] = useState(4);
    
   /* const links = [
        '/',
        '/',
        '/page3',
        '/page4',
      ];*/
      
   // let val = 0;
    useEffect(()=>{
    setWidth(100/(circle-1)*active)
    },[circle,active]);
    const arr =[];
    for (let i = 0; i < circle; i++) {
      arr.push( <Circle className={i<=active?"circle active":"circle"} key={i} val= {i}>
        {i} </Circle>)  ;
        
    }

    
    const handleClick1 = () => {
    
        if(active<=0){
             setActive(0)
             
        }else{
            setActive(active-1)}
            }

    
    
     const handleCircle = () => {
    
        if( active>=circle){
            setActive(circle)
       }else{
        setActive(active+1)}

       }
            
                 
    return (
        <div className="containerprgress">
            <div className="content">
                <div className="progress">
                <div className="progressbar " style={{width:width+"%"}}></div>
                {arr}
                </div>
                <div className="buttons">
                <button className="button btns" disabled ={active>0?false:true} onClick={handleClick1}>Prev</button>
                <button className="button btns " disabled ={active>=circle-1?true:false}onClick={handleCircle}>Next</button>
                </div>
            </div>

        </div>
    );
}export default ProgressBar;

