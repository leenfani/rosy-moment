import { createTheme } from "@mui/material";

export const Themes = createTheme({
  cssVariables: true,
  colorSchemeSelector: "class",
  typography: {
    fontFamily: "Montserrat",
  },

  colorSchemes: {
    light: {
      palette: {
        primary: {
          main: "#F9A8D4",
        },
        background: {
          default: "#ffe4fb",
          paper: "#FCFBF4",
        },
        secondary: { main: "#c942ab" },
        text: {
          primary: "#000000",
        },
      },
    },
    dark: {
      palette: {
        primary: {
          main: "#F9A8D4",
        },
        background: {
          default: "#121212",
          paper: "#1e1e1e",
        },
        secondary: { main: "#a6378d" },
        text: {
          primary: "#ffffff",
        },
      },
    },
  },
  components: {
    MuiButton: {
      styleOverrides: {
        root: {
          borderRadius: 0,
          color: "inherit",
          textTransform: "none",
          transition: "box-shadow 0.2s ease",

          "&.nav-btn:hover, &.nav-btn.Mui-focusVisible": {
            boxShadow: "inset 0 -2px 0 currentColor  ",
          },
          "&:focus": {
            outline: "none",
          },
        },
      },
    },

    MuiSvgIcon: {
      styleOverrides: {
        root: {
          color: "inherit",
        },
      },
    },
  },
});
