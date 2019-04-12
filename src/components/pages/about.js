import React from "react";
import profilePicture from "../../../static/assets/images/bio/headshot.jpg";

export default function() {
  return (
    <div className="content-page-wrapper">
      <div
        className="left-column"
        style={{
          background: "url(" + profilePicture + ") no-repeat",
          backgroundSize: "cover",
          backgroundPosition: "center"
        }}
      />
      <div className="right-column">
        <p>I am a software developer with a passion for developing programs that expedite the efficiency and effectiveness of its organizational success. I am Well-versed in technology and writing code to create systems that are reliable and user-friendly. I enjoy being engaged in projects that require me to work out of my comfort and knowledge set. I am a confident communicator, strategic thinker, and innovative creator to develop software that is customized to meet a company’s organizational needs, and further their success.</p>

        <p>I have skills in Python, JavaScript, React, Redux, SQL, MongoDB, HTML, CSS and Excel</p>
      </div>
    </div>
  );
}