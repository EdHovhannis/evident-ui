import React from "react";
import { v4 as uuidv4 } from "uuid";
import { Sidebar } from "./sidebar";
import { SideBars } from "./sidebar/localState";

export const DocViews = () => {
  return (
    <div className="wrapper">
      {SideBars.map((bar) => (
        <Sidebar location={bar.location} key={uuidv4()} buttons={bar.buttons} />
      ))}
    </div>
  );
};
