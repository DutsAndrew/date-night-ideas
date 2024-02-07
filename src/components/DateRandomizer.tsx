import React, { useState } from "react";
import '../styles/flashyButton.css';
import { locations } from "../files/locations";
import { atHomeEvents } from "../files/atHomeEvents";
import { aroundTownEvents } from "../files/AroundTownEvents";
import DropDown from "./DropDown";
import DisplayDateSelection from "./DisplayDateSelection";

const DateRandomizer = () => {

  const [customRandomizeSettings, setCustomRandomizeSettings] = useState<'all' | 'event' | 'none'>('none');
  const [dateCreated, setDateCreated] = useState(false);
  const [location, setLocation] = useState('none');
  const [randomDate, setRandomDate] = useState({
    location: '',
    event: '',
  });


  const handleRandomizeButtonClick = () => {
    if (customRandomizeSettings === 'all') return generateRandomDate();
    if (customRandomizeSettings === 'event') return generateRandomDateForEventOnly();
  };

  const generateRandomDate = () => {
    const generatedLocation = generateLocation();
    const event = generateEvent(generatedLocation);
    setRandomDate({
      location: generatedLocation,
      event: event,
    });
    setDateCreated(true);
  };

  const generateRandomDateForEventOnly = () => {
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

  const handleRollAgainClick = () => {
    setDateCreated(false);
    setRandomDate({
      location: '',
      event: '',
    });
  };

  const handleRandomizeSettingsSelection = (settings: 'all' | 'event') => {
    setCustomRandomizeSettings(settings);
  };

  const handleUserLocationSelection = (selection: string) => {
    setLocation(selection);
  };

  const isRandomizeButtonReady = () => {
    if (dateCreated === false && customRandomizeSettings === 'all') return true;
    if (dateCreated === false && customRandomizeSettings === 'event' && location !== 'none') return true;
    return false;
  };

  return (
    <>
      {customRandomizeSettings === 'none' && (
        <div className="customRandomizeButtonsContainer">
          <button 
            className="buttonSelector"
            onClick={() => handleRandomizeSettingsSelection('all')}>
              Randomize Everything
            </button>
          <button 
            className="buttonSelector"
            onClick={() => handleRandomizeSettingsSelection('event')}>
              Randomize Event Only
          </button>
        </div>
      )}

      {customRandomizeSettings === 'event' && location === 'none' && (
        <DropDown 
          title="location"
          list={locations}
          handleUserLocationSelection={handleUserLocationSelection}
        />
      )}

      {isRandomizeButtonReady() && (
        <button 
        className="flashy-button"
        onClick={() => handleRandomizeButtonClick()}
      >
        Randomize!
      </button>
      )}
      
      {dateCreated === true && (
        <DisplayDateSelection 
          location={randomDate.location}
          event={randomDate.event}
          startOver={handleRollAgainClick}
        />
      )}
    </>
  );
};

export default DateRandomizer;