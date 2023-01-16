import React,{useEffect, useState} from 'react';
import { Link } from 'react-router-dom';
import { FaChessBoard} from "react-icons/fa";
import  "./Navbar.css";



function Navbar(props) {

   /* const history = useNavigate();

   const handlehistory =() =>{
    history("/join");
  }   */
  const [click, setClick] = useState(false);
  const [button, setButton] = useState(true);

  const handleClick = () => setClick(!click);
  const closeMobileMenu = () => setClick(false);
 
  const changeNavebarBack =() =>{
    closeMobileMenu ();
    
    isUserLoggedIn();
  }
  const changeNavebar =() =>{
    closeMobileMenu ();
    userAuthentication();
  }
  const showButton = () => {
    if (window.innerWidth <= 960) {
      setButton(false);
    } else {
      setButton(true);
    }
  };

  //stop showing the sign up button again and again
  useEffect(() => {
    showButton();
  }, []);

  window.addEventListener('resize', showButton);

  const {isUserLoggedIn ,userAuthentication} =props
  return (
    <>
    <div>
      {
        isUserLoggedIn ?(
          <div>
         <nav className="navbar">
            <div className="navbar-container">
            <Link to="/" className="navbar-logo" onClick={() =>changeNavebarBack()} >
                HiReMe <i ><FaChessBoard/></i>
            </Link>
            <div className='menu-icon' onClick={handleClick}>
            <i className={click ? 'fas fa-times' : 'fas fa-bars'} />
            </div>
           
            <ul className={click ? 'nav-menu active' : 'nav-menu'}>
           
         
            
            </ul>
          
            </div>
         </nav>
         </div>
        ):
         
         <div>


         <nav className="navbar">
            <div className="navbar-container">
            <Link to="/" className="navbar-logo" onClick={()=>changeNavebarBack()} >
                HiReMe <i onClick={()=>changeNavebar()}><FaChessBoard/></i>
            </Link>
            <div className='menu-icon' onClick={handleClick}>
            <i className={click ? 'fas fa-times' : 'fas fa-bars'} />
            </div>
           
            <ul className={click ? 'nav-menu active' : 'nav-menu'}>
            <li className='nav-item'>
              <Link to='/signin' className='nav-links' onClick={()=>changeNavebar()}>
                Sign In
              </Link>
            </li>
            <li className="nav-item">
              <Link to ='/signin' className='nav-links' onClick={() =>closeMobileMenu}> Become a Freelancer</Link>
           
            </li>
            <li className='nav-item'>
              <Link to='/post-project' className='nav-links' onClick={closeMobileMenu}>
                post a project
              </Link>
            </li>

            <li className='nav-item'>
              <Link to="/join" >
            <button  className='nav-links-button text-3xl ' buttonStyle = 'btn--outline_sign ' onClick={()=>changeNavebar()}>Join</button>
            </Link>
            </li>

            </ul>
           
          
          
            </div>
         </nav>
         </div>
       
      }
         </div>
          
    </>
   
  )
}

export default Navbar