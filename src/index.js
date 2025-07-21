import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter,Routes,Route } from 'react-router-dom';
import "bootstrap/dist/css/bootstrap.css";
import "bootstrap/dist/js/bootstrap.bundle.js";
import "./apps/css/global.css";
import Welcomeapp from './apps/Welcomeapp';
import Userlogin from './apps/appmodules/users/auth/Userlogin';
import Userregistor from './apps/appmodules/users/auth/Userregistor';
import Apperror from './apps/shares/Apperror';
import Mainpage from './apps/appmodules/dashboard/Mainpage';
import Homepage from './apps/appmodules/dashboard/Homepage';
import Dashboardpage from './apps/appmodules/dashboard/Dashboardpage';
import Employeepage from './apps/appmodules/dashboard/Employeepage';
import UserDetailspage from './apps/appmodules/dashboard/UserDetailspage';
import { app, analytics } from './firebase.js';



const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <BrowserRouter>
        <Routes>
            <Route path='' element={<Welcomeapp/>}></Route>
            <Route path='userportal'  element={<Userlogin/>}></Route>
            <Route path='userregistor' element={<Userregistor/>}></Route>
            <Route path='landing' element={<Mainpage/>}>
                <Route path='' element={<Homepage/>}></Route>
                <Route path='dashboard' element={<Dashboardpage/>}></Route>
                <Route path='employees' element={<Employeepage/>}></Route> 
                <Route path='employees/userdetails/:id' element={<UserDetailspage/>}></Route>
                <Route path='*' element={<Apperror/>}></Route>
            </Route>


            <Route path='*' element={<Apperror/>}></Route>
            <Route path='fire' element={<firebase/>}></Route>

        </Routes>
    
    
    </BrowserRouter>
 


  </React.StrictMode>
);

