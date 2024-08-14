import React from "react";
import { ThemeProvider } from "@mui/material/styles";
import { CssBaseline } from "@mui/material";

import { lightTheme } from "src/themes/lightTheme";
import { darkTheme } from "src/themes/darkTheme";

type IMuiThemeProviderProps = {
  children: React.ReactNode;
};

function MuiThemeProvider(props: IMuiThemeProviderProps) {
  const theme: "dark" | "light" = "dark";

  return (
    <ThemeProvider theme={theme === "dark" ? darkTheme : lightTheme}>
      <CssBaseline />
      {props.children}
    </ThemeProvider>
  );
}

export default MuiThemeProvider;
