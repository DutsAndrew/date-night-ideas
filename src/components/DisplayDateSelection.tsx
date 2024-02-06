import React, { FC } from "react";
import { DisplayDateSelectionProps } from "../types/typeList";

const DisplayDateSelection:FC<DisplayDateSelectionProps> = (props): JSX.Element => {

  const { location, event } = props;

  return (
    <>
      <h3>Your Date:</h3>
      <p><strong>Location: </strong>{location}</p>
      <p><strong>Event: </strong>{event}</p>
    </>
  );
};

export default DisplayDateSelection;