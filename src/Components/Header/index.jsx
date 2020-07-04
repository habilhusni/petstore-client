import React from "react";
import LogoHeader from "./LogoHeader";
import SearchBar from "./SearchBar";
import LoginWrapper from "./LoginWrapper";
import "./index.css";

const HeaderWrapper = () => (
  <div className="header">
    <div className="header-wrapper">
      <div className="top-header">
        <div className="left-top-header">
          <LogoHeader title="Cihuy Pet Store" subtitle="Pet makes happy" />
          <SearchBar />
        </div>
        <LoginWrapper />
      </div>
    </div>
  </div>
);

export default HeaderWrapper;
