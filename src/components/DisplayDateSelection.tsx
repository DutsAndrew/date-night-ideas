import React, { FC } from "react";
import { DisplayDateSelectionProps } from "../types/typeList";

const DisplayDateSelection:FC<DisplayDateSelectionProps> = (props): JSX.Element => {

  const { 
    location, 
    event,
    startOver,
  } = props;

  return (
    <div className="resultsContainer">
      <h2>Results:</h2>
      <p><strong>Location:</strong></p>
      <p style={{margin: "auto"}}>{location.toLowerCase()}</p>
      <p><strong>Event:</strong></p>
      <p style={{margin: "auto"}}>{event.toLowerCase()}</p>
      <button 
        style={{
          marginTop: "5vh",
        }}
        onClick={() => startOver()}>
          Start Over
      </button>    
    </div>
  );
};

export default DisplayDateSelection;