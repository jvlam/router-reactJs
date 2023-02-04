import {
  BrowserRouter, Route, Routes
} from "react-router-dom";

import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import Admin from './components/Admin/Admin'
import ManageUser from "./components/Admin/Content/ManageUser";
import DashBoard from "./components/Admin/Content/DashBoard";
import Login from "./components/Login/Login";
import Register from "./components/Register/Register";
import ForgotPassword from "./components/ForgotPassword/ForgotPassword";
import Navbar from "./components/Blog/Navbar";
import Blog from "./components/Blog/Blog";
import BlogDetail from "./components/Blog/BlogDetail";
import Doctor from "./components/Doctor/Doctor";


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  // <React.StrictMode>]
    <BrowserRouter>
      <Routes>
        <Route path="/" element={ <App/> }>
          {/* <Route path="users" element={ <User/>}/> */}
          <Route path="blogs" element={ <Blog/>}/>
          <Route path="blogs-detail" element={ <BlogDetail/>}/>
          <Route path="doctor-profile" element={ <Doctor/>}/>
        </Route>

        <Route path="/login" element={ <Login/>}/>
        <Route path="/register" element={ <Register/>}/>
        <Route path="/forgot-password" element={ <ForgotPassword/>}/>
        <Route path="/navbar" element={ <Navbar/>}/>

        <Route path="admins" element={ <Admin />}>
          <Route index element={ <DashBoard />}/>
          <Route path="manage-users" element={ <ManageUser/>}/>
        </Route>
      </Routes>
    </BrowserRouter>
  // </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
