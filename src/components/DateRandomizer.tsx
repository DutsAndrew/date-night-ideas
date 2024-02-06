import React, { useState } from "react";
import { locations } from "../files/locations";
import { atHomeEvents } from "../files/atHomeEvents";
import { aroundTownEvents } from "../files/AroundTownEvents";

const DateRandomizer = () => {

  const [dateCreated, setDateCreated] = useState(false);
  const [randomDate, setRandomDate] = useState({
    location: '',
    event: '',
  });

  const generateRandomDate = () => {
    const location = generateLocation();
    const event = generateEvent(location);
    setRandomDate({
      location: location,
      event: event,
    });
    setDateCreated(true);
  };

  const generateLocation = () => {
    const randomIndex = Math.floor(Math.random() * locations.length);
    return locations[randomIndex];
  };

  const generateEvent = (location: string) => {
    if (location === 'at home') {
      const randomIndex = Math.floor(Math.random() * atHomeEvents.length);
      return atHomeEvents[randomIndex];
    } else {
      const randomIndex = Math.floor(Math.random() * aroundTownEvents.length);
      return aroundTownEvents[randomIndex];
    }
  };

  return (
    <>
      <button onClick={() => generateRandomDate()}>
        Randomize!
      </button>
      {dateCreated === true ? (
        <>
          <h2>Results:</h2>
          <p><strong>Location: </strong>{randomDate.location}</p>
          <p><strong>Event: </strong>{randomDate.event}</p>        
        </>
      ): (
        <></>
      )}
    </>
  );
};

export default DateRandomizer;