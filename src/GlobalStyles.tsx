import { createGlobalStyle } from "styled-components";
import { createTheme } from "@mui/material/styles";

declare module "@mui/material/styles" {
  interface Palette {
    paper: Palette["primary"];
  }
  interface PaletteOptions {
    paper: PaletteOptions["primary"];
  }
}

export const theme = createTheme({
  palette: {
    primary: {
      light: "#39316e",
      main: "#080b42",
      dark: "#00001e",
      contrastText: "#fff",
    },
    secondary: {
      light: "#ff8a50",
      main: "#ff5722",
      dark: "#c41c00",
      contrastText: "#000",
    },

    paper: { main: "#fdfcf0" },
    error: { main: "#e71a0f", dark: "#c0150c" },
  },
});

const GlobalStyles = createGlobalStyle`
  * {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
  font-family: "Roboto", sans-serif !important;
  }
  html {
    font-size: 16px;
    scroll-behavior: smooth;
  }
  a{
    text-decoration: none !important;
  }
`;
export default GlobalStyles;
