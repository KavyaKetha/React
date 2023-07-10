import { createTheme, responsiveFontSizes } from '@mui/material/styles';

let theme = createTheme();
theme = responsiveFontSizes(theme);
theme = createTheme(theme,{
    palette: {
    primary: {
      main: '#0052cc',
    },
    secondary: {
        main: '#edf2ff',
    },
},
});

theme = createTheme(theme, {
  palette: {
    info: {
      main: theme.palette.secondary.main,
    },
  },
});

