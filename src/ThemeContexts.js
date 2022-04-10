import { createContext } from "react";

// setting default state... but this one will not be used...
const ThemeContext = createContext(["green", () => {}]);

export default ThemeContext;
