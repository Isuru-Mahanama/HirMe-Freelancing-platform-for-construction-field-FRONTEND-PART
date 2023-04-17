import './App.css';
import AccountBox from './Pages/SignUpAndLogin/LoginIndex.js';
import Navbar from './components/Navbar';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './Pages/Home';
import BecomeASeller from './Pages/BecomeSeller';
import PostAProject from './Pages/PostProject/postAProject'
import SignupIndex from './Pages/SignUpAndLogin/SignupIndex';
import WelcomeForWorker from './Pages/AccountSetUp/WelcomeForWorker'
import ProfileSignin from './components/ProfileSignin';
import { useState } from 'react';
import UserNameIndex from './Pages/AccountSetUp/UserNameIndex';
import LoginAsIndex from './Pages/AccountSetUp/AccountTypeIndex'
import Welcome from './Pages/AccountSetUp/WelcomeForHires';
import ViewProject from './Pages/PostProject/ViewProject';
import Portfolio from './components/Portfolio/portfolioFirst';
import FirstPageForHire from './Pages/Hire/AccountPageForHire';
import WorkApplications from './Pages/Worker/ApplicationWorker';
import ApplicationHire from './Pages/Hire/ApplicationHirepersonal';
import ApplicationHire2 from './Pages/Hire/ApplicationHire2';
import ApplicationWork2 from './Pages/Worker/ApplicationWork2';
import AccountPageWorker from './Pages/Worker/AccountPageForWorker';
import TakeMoney from './Pages/PaymentMethod/Payments';
import ApplyProject from './Pages/PostProject/ApplyProject';
import PostedProjects from './Pages/PostProject/MyProjects';
import PortfolioFreelancer from './components/Portfolio/PortForlioFreelancer';
import AppliedProjects from './Pages/PostProject/AppliedProjects';
import Chat from './components/CattingSection/CattingSction';
import PostProjectIndex from './Pages/SignUpAndLogin/PostProjectIndex';
import CreatOnlyEmailForPostProjection from './Pages/SignUpAndLogin/CreatOnlyEmailForPostProjection';
import Admin from './Admin/admin';
import ViewAllApplications from './Pages/Application/ViewApplications.js';
import Scheduling from './Pages/Scheduling/Sheduling';

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

            <Route exact path="/portfolio/:clientID" element={<Portfolio/>} >
            
            </Route>
              
            <Route exact path="/firstPageforworker" element={<AccountPageWorker />} >
            
            </Route>
           
           
            <Route exact path="/applicationhire" element={<ApplicationHire/>} >
            
            </Route>

            <Route exact path="/message" element={<Chat/>} >
            
            </Route>
              
            <Route exact path="/applicationHire2" element={<ApplicationHire2/>} >
            
            </Route>
            <Route exact path="/applicationWork2" element={<ApplicationWork2/>} >
            
            </Route>
            <Route exact path="/payments" element={<TakeMoney/>} >
            
            </Route>
            <Route exact path="/viewproject/:projectId"   element={<ViewProject/>} >
            
            </Route>
            <Route exact path="/applyproject" element={<ApplyProject/>} >
            
            </Route>

            <Route exact path="/postedprojects" element={<PostedProjects/>} >
            
            </Route>
            <Route exact path="/viewapplications" element={<ViewAllApplications/>} >
            
            </Route>
            <Route exact path="/viewworkerappliedprojects" element={<AppliedProjects/>} >
            
            </Route>

            <Route exact path="/postprojectIndex" element={<PostProjectIndex/>} >
            
            </Route>
             <Route exact path="/createEmailOnlyforPosting" element={<CreatOnlyEmailForPostProjection/>} >
            
            </Route>
            <Route exact path="/admin" element={<Admin/>} >
            
            </Route>
            <Route exact path="/Scheduling" element={<Scheduling/>} >
            
            </Route>

            <Route exact path="/portfolioFreelancer" element={<PortfolioFreelancer/>} >
            
            </Route>
           
              

      </Routes>
      
    </Router> 
    </>
  );
}

export default App;
