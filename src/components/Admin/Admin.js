// import React from 'react'
// import SideBar from './SideBar'
// import './Admin.scss'

// function Admin() {
//   return (
//     <div className='admin-container'>
//       <div className='admin-sidebar'>
//         <SideBar/>
//       </div>
//       <div className='admin-content'>

//       </div>
//     </div>
//   )
// }

// export default Admin

import SideBar from "./SideBar";
import './Admin.scss';
import { FaBars } from 'react-icons/fa';
import { useState } from "react";
import { Outlet } from "react-router-dom";

const Admin = (props) => {
    const [collapsed, setCollapsed] = useState(false);

    return (
        <div className="admin-container">
            <div className="admin-sidebar">
                <SideBar collapsed={collapsed} />
            </div>
            <div className="admin-content">
                <div className="admin-header"> 
                    <FaBars onClick={() => setCollapsed(!collapsed)} />
                </div>

                <div className="admin-main">
                    <Outlet />
                </div>
            </div>
        </div>
    )
}
export default Admin;