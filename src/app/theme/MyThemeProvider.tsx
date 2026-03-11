import { ReactNode } from "react";
import { ThemeProvider as MuiThemeProvider } from "@mui/material/styles";
import CssBaseline from "@mui/material/CssBaseline";
import { Themes } from "./Themes";
import { ColorModeContext } from "./ColorModeContext";

interface MyThemeProviderProps {
  children: ReactNode;
}

export const MyThemeProvider = ({ children }: MyThemeProviderProps) => {
  return (
    <ColorModeContext.Provider value={{ toggleColorMode: () => {} }}>
      <MuiThemeProvider theme={Themes}>
        <CssBaseline />
        {children}
      </MuiThemeProvider>
    </ColorModeContext.Provider>
  );
};