import './slidebar.css'
import { SlidebarData } from './slidebardata';

const Slidebar = () => {
    return ( 
        <>
        <div className="slidebar">
            <ul className='sidebarlist'>
            {SlidebarData.map((val,key)=>{
            return(
                <li className='row' key={key} onClick={()=>{window.location.pathname = val.link}}>
                    {" "}
                    <div id='icon'>{val.icon}</div>{" "}
                    <div id='title'>{val.title}</div>{" "}
                    
                </li>
        )
        })}
        </ul>
        </div>
        </>
     );
}
 
export default Slidebar;