import React from "react";
import CloudIcon from "@material-ui/icons/Cloud";
import CloudCircleIcon from "@material-ui/icons/CloudCircle";
import CloudQueueIcon from "@material-ui/icons/CloudQueue";

function Header() {
  return (
    <header>
      <h1>
        Thoughtshot
        <CloudIcon />
        <CloudQueueIcon />
      </h1>
    </header>
  );
}

export default Header;
