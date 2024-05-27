import React from "react";
import "./Notifications.css";
import closeIcon from './close-icon.png';
import { getLatestNotification } from "../utils/utils";

export default function Notifications() {
  const handleCloseClick = () => {
    console.log("Close button has been clicked");
  };

  return (
    <div className="Notifications">
      <p>Here is the list of notifications</p>
      <ul>
        <li data-priority="default">New course available</li>
        <li data-priority="urgent">New resume available</li>
        <li dangerouslySetInnerHTML={{ __html: getLatestNotification() }} />
      </ul>
      <button
        style={{
          position: 'absolute',
          top: '15px',
          right: '15px',
          backgroundColor: 'transparent',
          border: 'none',
          cursor: 'pointer',
        }}
        aria-label="Close"
        onClick={handleCloseClick}
      >
        <img src={closeIcon} alt="close icon" />
      </button>
    </div>
  );
}