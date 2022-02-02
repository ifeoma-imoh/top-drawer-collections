import React from 'react';
import Head from 'next/head';
import { AppBar, Toolbar, Typography } from '@mui/material';

function Header() {
  return (
    <div>
      <Head>
        <title>Top-Drawer Collections</title>
      </Head>
      <AppBar position="static">
        <Toolbar>
          <Typography>Top-Drawer</Typography>
        </Toolbar>
      </AppBar>
    </div>
  );
}

export default Header;
