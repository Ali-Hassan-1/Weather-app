import React, { useState } from "react";
import "./DropDown.css";

function DropDown() {
  let [clickEvent, setClickEvent] = useState(true);

  let classes = () => {
    let listClass = "hideList";

    if (clickEvent === true) {
      listClass = "";
    } else {
      listClass = "hideList";
    }

    return listClass;
  };

  let handleClick = () => {
    setClickEvent(!clickEvent);
  };

  return (
    <React.Fragment>
      <div>
        <button onClick={handleClick}>__*_</button>
      </div>
      <div className="navbarList">
        <ul className={classes()}>
          <li>Home</li>
          <li>Trending</li>
          <li>Contact</li>
          <li>About</li>
          <li>Email</li>
        </ul>
      </div>
    </React.Fragment>
  );
}

export default DropDown;
