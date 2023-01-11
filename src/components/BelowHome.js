import React from 'react';
import BelowHomeItem from './BelowHomeItem';
import './BelowHome.css';
import { MdChevronLeft,MdChevronRight} from "react-icons/md";

function BelowHome() {


  const slideLeft =() =>{
    var slider = document.getElementById('slider');
    slider.scrollLeft = slider.scrollLeft - 500;
  }

  const slideRight =() =>{
    var slider = document.getElementById('slider');
    slider.scrollLeft = slider.scrollLeft + 500;
  }
  return (
    <div className='cards' >
    <h1>Get Done With HiRMe !!!</h1>
    <div className='relative flex items-center' >
      <MdChevronLeft size={40} onClick ={slideLeft} />
    <div id='slider' className='w-full h-full overflow-x-scroll scroll whitespace-nowrap scroll-smooth scrollbar-hide'>
   
      <div className='cards__wrapper' >
      
        
        
        <ul className='cards__items' >
          
          <BelowHomeItem 
            src='images/Landscape Design Plan.jpeg'
            text='Landscape Design Plan'
            label='Architecture'
            path='/services'
          />
          <BelowHomeItem
            src='images/A783-Types-of-Architects-1.-Residential-Image-1.jpg'
            text='Residential Architecture'
            label='Architecture'
            path='/services'
          />

           <BelowHomeItem
            src='images/A783-Types-of-Architects-3.-Commercial-Architect-Image-1-1024x493.jpg'
            text='Commercial Architecture'
            label='Architecture'
            path='/services'
          />
          <BelowHomeItem
            src='images/A783-Types-of-Architects-4.-Restoration-Architect-Image-1-770x515.jpg'
            text='Restoration Architecture'
            label='Architecture'
            path='/products'
          />
          <BelowHomeItem
            src='images/A783-Types-of-Architects-5.-Research-Architect-Image-1-1024x682.jpg'
            text='Research Architecture'
            label='Architecture'
            path='/sign-up'
          />
          <BelowHomeItem
            src='images/A783-Types-of-Architects-5.-Research-Architect-Image-1-1024x682.jpg'
            text='Research Architecture'
            label='Architecture'
            path='/sign-up'
          />
          <BelowHomeItem
            src='images/Landscape Design Plan.jpeg'
            text='Landscape Architecture'
            label='Architecture'
            path='/sign-up'
          />
          <BelowHomeItem
            src='images/A783-Types-of-Architects-6.-Interior-Designer-Image-1-1024x604.jpg'
            text='Interior Architecture'
            label='Architecture'
            path='/sign-up'
          />
        </ul>
        </div>
       
     </div>
        <MdChevronRight onClick = {slideRight} size={40} className='opacity-50 cursor-pointer hover:opacity-100'/>
    </div>
  </div>
  )
}

export default BelowHome
