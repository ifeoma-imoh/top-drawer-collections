import React from 'react';
import Header from './Header';
import { Container } from '@mui/material';
import Footer from './Footer';
import useStyles from '../utils/styles';

function Layout({ children }) {
  const classes = useStyles();
  return (
    <div>
      <Header />
      <Container className={classes.main}>{children}</Container>
      <Footer />
    </div>
  );
}

export default Layout;
