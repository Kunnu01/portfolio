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
            main: '#f5f5f5',
            dark: '#002f6c',
        },
        secondary: {
            light: '#6ec6ff',
            main: '#f5f5f5',
            dark: '#0069c0',
        },
        mainPage: {
            minHeight: '100vh',
            background: 'linear-gradient(to top, #f5f5f5 30%, #fafafa 100%)',
        },
        fullHeight: {
            minHeight: '100vh',
        },
    },
});

const darkTheme = createMuiTheme({
    typography: {
        useNextVariants: true,
        fontFamily: `"Roboto", sans-serif`,
        fontWeightLight: '600',
    },
    palette: {
        type: 'dark',
        text: {
            primary: '#fff',
            secondary: '#53f6c7',
        },
        primary: {
            light: '#4f83cc',
            main: '#0a0c17',
            dark: '#002f6c',
        },
        secondary: {
            light: '#6ec6ff',
            main: '#0a192f',
            dark: '#0069c0',
        },
        mainPage: {
            minHeight: '100vh',
            // background: '#1d1b24',
            background: '#0a0c17',
        },
        fullHeight: {
            minHeight: '100vh',
        },
    },
});

export { darkTheme, lightTheme };