import React from "react";

export function HoursMessage() {
  const date = new Date();
  let hours = date.getHours();
  console.log(hours);
  let message;
  if (hours < 12) {
    message = <h1 className="Morning"> Good Morning</h1>;
  } else if (hours > 12 && hours <= 17) {
    message = <h1 className="Morning"> Good Evening</h1>;
  } else if (hours > 17) {
    message = <h1 className="Night"> Good Night</h1>;
  }
  return <div>{message} </div>;
}
