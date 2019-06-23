import { createMuiTheme } from '@material-ui/core/styles';

const lightTheme = createMuiTheme({
  typography: {
    useNextVariants: true,
    fontFamily: "\"Roboto\", sans-serif",
    fontWeightLight: '600',
    body1: {
      fontSize: "1.3125rem",
      fontWeight: 400,
      lineHeight: "1.5em",
    }
  },
  palette: {
    type: "light",
    text: {
      primary: "#222222",
      secondary: "#606060"
    },
    primary: {
      light: '#4f83cc',
      main: '#01579b',
      dark: '#002f6c',
    },
    secondary: {
        light: '#6ec6ff',
        main: '#f5f5f5',
        dark: '#0069c0',
    },
    mainPage: {
      height: '100%',
      background: 'linear-gradient(to top, #f5f5f5 30%, #fafafa 100%)',
    },
    fullHeight: {
      height: '100%',
    },
  },
});

const darkTheme = createMuiTheme({
  typography: {
    useNextVariants: true,
    fontFamily: "\"Roboto\", sans-serif",
    fontWeightLight: '600',
    body1: {
      fontSize: "1.3125rem",
      fontWeight: 400,
      lineHeight: "1.5em",
    }
  },

  palette: {
    type: "dark",
    text: {
      primary: "#e6f1ff",
      secondary: "#8892b0"
    },
    primary: {
      light: '#4f83cc',
      main: '#01579b',
      dark: '#002f6c',
    },
    secondary: {
        light: '#6ec6ff',
        main: '#0a192f',
        dark: '#0069c0',
    },
    mainPage: {
      minHeight: '100%',
      background: 'linear-gradient(to top, #0a192f 30%, #020c1b 100%)',
    },
    fullHeight: {
      minHeight: '100%',
    },
  },
});

export { darkTheme, lightTheme };
