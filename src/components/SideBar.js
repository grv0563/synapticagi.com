import { Sidebar, Menu, MenuItem } from "react-pro-sidebar";
import { Link } from "react-router-dom";
import collapse from "../assets/collapse.png";
import collapse2 from "../assets/collapse2.png";
import "./SideBar.css";

import React from "react";

function SideBar() {
  const [toggled, setToggled] = React.useState(true);
  return (
    <div className="sidebar-container">
         <main style={{ display: "flex", padding: 10 }}>
            <div>
              <button
                className="sb-button"
                onClick={() => setToggled(!toggled)}
              >
                <img src={collapse} />
              </button>
            </div>
          </main>
      <div style={{ display: "flex", height: "100%", minHeight: "400px" }}>
     
        <Sidebar
          onBackdropClick={() => setToggled(false)}
          toggled={toggled}
          breakPoint="always"
        >
          <main style={{ display: "flex", padding: 10 }}>
            <div>
              <button
                className="sb-button"
                onClick={() => setToggled(!toggled)}
              >
                <img src={collapse2} />
              </button>
            </div>
          </main>
          <Menu>
            <MenuItem onClick={() => setToggled(!toggled)} component={<Link to="/preface" />}> Preface</MenuItem>
            <MenuItem onClick={() => setToggled(!toggled)} component={<Link to="/intro" />}> Introduction</MenuItem>
            <MenuItem onClick={() => setToggled(!toggled)} component={<Link to="/accident" />}>
              {" "}
              One Accident
            </MenuItem>
            <MenuItem onClick={() => setToggled(!toggled)} component={<Link to="/problem1" />}>
              {" "}
              Type 1 - Problem
            </MenuItem>
            <MenuItem onClick={() => setToggled(!toggled)} component={<Link to="/problem2" />}>
              {" "}
              Type 2 - Problem
            </MenuItem>
            <MenuItem onClick={() => setToggled(!toggled)} component={<Link to="/problem3" />}>
              {" "}
              Type 3 - Problem
            </MenuItem>
            <MenuItem onClick={() => setToggled(!toggled)} component={<Link to="/problem4" />}>
              {" "}
              Type 4 - Problem
            </MenuItem>
            <MenuItem onClick={() => setToggled(!toggled)} component={<Link to="/abstract" />}>
              {" "}
              Social Abstraction
            </MenuItem>
            <MenuItem onClick={() => setToggled(!toggled)} component={<Link to="/conclusion" />}>
              {" "}
              Conclusion
            </MenuItem>
          </Menu>
        </Sidebar>
      </div>
    </div>
  );
}

export default SideBar;
