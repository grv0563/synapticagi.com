import React from "react";
import SideBar from "../../components/SideBar";
import "./styles.css";
function Conclusion() {
  return (
    <>
      <div className="page-container">
        <div className="research-sidebar">
          <SideBar />
        </div>
        <div className="research-mainarea">
          <h2>Heading</h2>
          In software engineering and computer science, abstraction is the
          process of generalizing concrete details, such as attributes, away
          from the study of objects and systems to focus attention on details of
          greater importance
        </div>
      </div>
    </>
  );
}

export default Conclusion;