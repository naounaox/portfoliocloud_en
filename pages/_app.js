import { createTheme, ThemeProvider } from '@mui/material/styles';
import '../styles/globals.css';

const theme = createTheme({
  palette: {
    primary: {
      main: '#202020',
    },
    secondary: {
      main: '#FFFEF4',
    },
  },
  typography: {
    fontFamily: 'Kosugi Maru, sans-serif',
  },
});

export default function MyApp({ Component, pageProps }) {
  return (
    <ThemeProvider theme={theme}>
      <Component {...pageProps} />
    </ThemeProvider>
  );
}
