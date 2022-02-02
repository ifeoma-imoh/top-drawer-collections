import React from 'react';
import Header from './Header';
import { Container } from '@mui/material';
import Footer from './Footer';

function Layout({ children }) {
  return (
    <div>
      <Header />
      <Container>{children}</Container>
      <Footer />
    </div>
  );
}

export default Layout;
