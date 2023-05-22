import { createContext } from "react";

const NavigationContext = createContext();

const NavigationProvider = ({ children }) => {
  return (
    <NavigationContext.Provider value={{}}>
      {children}
    </NavigationContext.Provider>
  );
};

export default NavigationContext;
export { NavigationProvider };
