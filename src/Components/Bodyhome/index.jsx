import React from "react";
import "./index.css";
import ItemWrapper from "./ItemWrapper";
import TitleBody from "./TitleBody";
import NavContent from "./NavContent";

const BodyhomeWrapper = () => (
  <div className="body-home-wrapper">
    <TitleBody />
    <NavContent />
    <ItemWrapper />
  </div>
);

export default BodyhomeWrapper;
