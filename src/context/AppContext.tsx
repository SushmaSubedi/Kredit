import React, { createContext } from "react";
interface IAppContext {
  pin: string;
  setPin: React.Dispatch<React.SetStateAction<string>> | null;
}
const AppContext = createContext<IAppContext>({
  pin: "",
  setPin: null,
});

export default AppContext;
