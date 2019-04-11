import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"; 
import contactPagePicture from "../../../static/assets/images/auth/login.jpg";

export default function() {
  return (
    <div className="content-page-wrapper">
      <div
        className="left-column"
        style={{
          background: "url(" + contactPagePicture + ") no-repeat",
          backgroundSize: "cover",
          backgroundPosition: "center"
        }}
      />
      <div className="right-column">
        <div className="contact-bullet-points">
          <div className="bullet-point-group">
            <div className="icon">
              <FontAwesomeIcon icon="phone" />
            </div>

            <div className="text">435-994-4486</div>
          </div>

          <div className="bullet-point-group">
            <div className="icon">
              <FontAwesomeIcon icon="envelope" />
            </div>

            <div className="text">landaverry.dev@gmail.com</div>
          </div>

          <div className="bullet-point-group">
            <div className="icon">
              <FontAwesomeIcon icon="map-marked-alt" />
            </div>
    
            <div className="text">Lehi, UT</div>
          </div>
        </div>
        <div className="social-media-icons">
          <a href="https://github.com/ErickLandaverry" className="social-media-icon" target="_blank"><FontAwesomeIcon icon={['fab', 'github']} /></a>
          <a href="https://www.linkedin.com/in/erick-landaverry" className="social-media-icon" target="_blank"><FontAwesomeIcon icon={['fab', 'linkedin-in']} /></a>
        </div>
      </div>
    </div>
  );
}
