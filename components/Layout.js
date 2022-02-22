import React, { useContext } from 'react';
import Header from './Header';
import { Container, CssBaseline, ThemeProvider } from '@mui/material';
import Footer from './Footer';
import useStyles from '../utils/styles';
import { createTheme } from '@mui/material/styles';
import { Store } from '../utils/store';

function Layout({ title, description, children }) {
  const { state, dispatch } = useContext(Store);
  const { darkMode } = state;
  const theme = createTheme({
    typography: {
      h1: {
        fontSize: '1.6rem',
        fontWeight: 400,
        margin: '1rem, 0',
      },
      h2: {
        fontSize: '1.4rem',
        fontWeight: 400,
        margin: '1rem, 0',
      },
    },
    palette: {
      type: darkMode ? 'dark' : 'light',
      primary: {
        main: '#f0c000',
      },
      secondary: {
        main: '#208080',
      },
    },
  });

  const classes = useStyles();
  return (
    <div>
      <ThemeProvider theme={theme}>
        <CssBaseline />
        <Header mode={darkMode} title={title} description={description} />
        <Container className={classes.main}>{children}</Container>
        <Footer />
      </ThemeProvider>
    </div>
  );
}

export default Layout;
