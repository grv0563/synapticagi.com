import { Sidebar, Menu, MenuItem } from "react-pro-sidebar";
import { Link } from "react-router-dom";
import { useState } from "react";
import collapse from '../assets/collapse.png'
import './SideBar.css'

import React from "react";

function SideBar() {
    const [collapsed, setCollapsed] = useState(false);
  return (
    <div className="sidebar-container">
      <div style={{ display: 'flex', height: '100%', minHeight: '400px' }}>
      <Sidebar collapsed={collapsed}>
        <Menu>
          <MenuItem component={<Link to="/preface" />}> Preface</MenuItem>
          <MenuItem component={<Link to="/intro" />}> Introduction</MenuItem>
          <MenuItem component={<Link to="/accident" />}> One Accident</MenuItem>
          <MenuItem component={<Link to="/problem1" />}> Type 1 - Problem</MenuItem>
          <MenuItem component={<Link to="/problem2" />}> Type 2 - Problem</MenuItem>
          <MenuItem component={<Link to="/problem3" />}> Type 3 - Problem</MenuItem>
          <MenuItem component={<Link to="/problem4" />}> Type 4 - Problem</MenuItem>
          <MenuItem component={<Link to="/abstract" />}> Social Abstraction</MenuItem>
          <MenuItem component={<Link to="/conclusion" />}> Conclusion</MenuItem>
        </Menu>
      </Sidebar>
      <main style={{ padding: 10 }}>
        <div>
          <button className="sb-button" onClick={() => setCollapsed(!collapsed)}>
            <img src={collapse}/>
          </button>
        </div>
      </main>
    </div>
      
    </div>
  );
}

export default SideBar;
