import './slidebar.css'
import { SlidebarData, SlidebarDataForClient } from './slidebardata';
import classNames from 'classnames';
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

export const SlidebarClient = ({isDesktop}) => {
    
    const classes = classNames('default-class', {
        'row': isDesktop,
        'column': !isDesktop,
      });
    return ( 
        <>
        <div className="slidebar">
            <ul className='sidebarlist'>
            {SlidebarDataForClient.map((val,key)=>{
            return(
                <li className={classes} key={key} onClick={()=>{window.location.pathname = val.link}}>
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
 
