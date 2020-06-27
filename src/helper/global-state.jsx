import React from "react";

const defaultValGlobal = {
  isGlobalLoading: false,
  handleGlobalLoading: () => {},
};

export const GstateContext = React.createContext(defaultValGlobal);
