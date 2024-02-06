import React, { FC, useState } from "react";
import DropDown from "./DropDown";
import { atHomeEvents } from '../files/atHomeEvents';
import { aroundTownEvents } from '../files/AroundTownEvents';
import { locations } from '../files/locations';
import { DateNightSelectorProps } from "../types/typeList";
import DisplayDateSelection from "./DisplayDateSelection";

const DateNightSelector:FC<DateNightSelectorProps> = (props): JSX.Element => {

  const { handleUserSelection } = props;

  const [location, setLocation] = useState('none');
  const [event, setEvent] = useState('none');

  const handleUserLocationSelection = (selection: string) => {
    return setLocation(selection);
  };

  const handleUserEventSelection = (selection: string) => {
    return setEvent(selection);
  };

  if (location !== 'none' && event !== 'none') {
    return (
      <DisplayDateSelection 
        location={location}
        event={event}
      />
    );
  } else {
    return (
      <>
        <DropDown 
          title='location' 
          list={locations}
          handleUserLocationSelection={handleUserLocationSelection}
        />
        {location === 'none' ? (
          <>
          </>
        ) : (
          <DropDown 
            title='event' 
            list={location === 'at home' ? atHomeEvents : aroundTownEvents}
            handleUserEventSelection={handleUserEventSelection}
          />
        )}
      </>
    );
  };
};

export default DateNightSelector;