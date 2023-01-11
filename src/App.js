import './App.css';
import AccountBox from './Pages/SignUpAndLogin/LoginIndex.js';
import Navbar from './components/Navbar';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './Pages/Home';
import BecomeASeller from './Pages/BecomeSeller';
import PostAProject from './Pages/PostProject/postAProject'
import SignupIndex from './Pages/SignUpAndLogin/SignupIndex';
import WelcomeForWorker from './Pages/AccountSetUp/WelcomeForWorker';
import ProfileSignin from './components/ProfileSignin';
import { useState } from 'react';
import UserNameIndex from './Pages/AccountSetUp/UserNameIndex';
import LoginAsIndex from './Pages/AccountSetUp/AccountTypeIndex'
import Welcome from './Pages/AccountSetUp/WelcomeForHires';
import FirstPageForWorker from './Pages/Worker/AccountPageForWorker';
import SetUpPageIndex from './Pages/setUpPageIndex';
import Portfolio from './components/Portfolio/portfolioFirst';
import FirstPageForHire from './Pages/Hire/AccountPageForHire';
import WorkApplications from './Pages/Worker/ApplicationWorker';


function App() {

    const[isUserLoggedIn,setUserLoggedIn] = useState(false);

    const userAuthentication =() =>{
      setUserLoggedIn(!isUserLoggedIn);
    }
  
  return (
    <>
    <Router>
     <Navbar isUserLoggedIn ={isUserLoggedIn} userAuthentication={userAuthentication} />
       <Routes>
          <Route exact path="/" element={<Home/>} >
            
          </Route>
          <Route exact path="/signin" element={<AccountBox/>} >
            
          </Route>
          <Route exact path="/join" element={<SignupIndex/>} >
            
            </Route>
          <Route exact path="/become-seller" element={<BecomeASeller/>} >
            
            </Route>
            <Route exact path="/post-project" element={<PostAProject/>} >
            
            </Route>
           
            <Route exact path="/profile" element={<ProfileSignin/>} >
            
            </Route>

            <Route exact path="/userName" element={<UserNameIndex/>} >
            
            </Route>

            <Route exact path="/loginas" element={<LoginAsIndex/>} >
            
            </Route>

            <Route exact path="/welcome" element={<Welcome/>} >
            
            </Route>
              
            <Route exact path="/welcomeForWorker" element={<WelcomeForWorker/>} >
            
            </Route>
              

            <Route exact path="/firstPageforHire" element={<FirstPageForHire/>} >
            
            </Route>

            <Route exact path="/setupworker" element={<WorkApplications/>} >
            
            </Route>

            <Route exact path="/portfolio" element={<Portfolio/>} >
            
            </Route>
              
            <Route exact path="/firstPageforworker" element={<FirstPageForWorker/>} >
            
            </Route>
           
            <Route exact path="/portfolioWorker" element={<FirstPageForWorker/>} >
            
            </Route>
              

      </Routes>
      
    </Router> 
    </>
  );
}

export default App;
