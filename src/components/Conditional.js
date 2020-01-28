import React from "react";

function Conditional(props) {
  return (
    <div>
          {props.accessObj ? <h1> Logged in</h1> : <h1>Logged out</h1>}
    </div>
  );
}

export default Conditional;
