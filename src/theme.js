import { red } from '@material-ui/core/colors';
import { createTheme } from '@material-ui/core/styles';

// A custom theme for this app
const theme = createTheme({
  palette: {
    primary: {
      main: '#FA3F32',
    },
    secondary: {
      main: '#ABB084',
    },
    error: {
      main: red.A400,
    },
    background: {
      default: '#ffffff',
    },
    header: {
      default: '#ffffff',
    },
  },
});

export default theme;