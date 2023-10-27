import React, { createContext, useState } from "react";
const AppContext = createContext();

function Context({ children }) {
  const [len, setLength] = useState(0);
  const value = {
    len,
    setLength,
  };
  return <AppContext.Provider value={value}>{children}</AppContext.Provider>;
}
export default Context;
export { AppContext };
