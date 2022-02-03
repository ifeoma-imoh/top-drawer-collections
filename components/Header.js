import React from 'react';
import Head from 'next/head';
import { AppBar, Toolbar, Typography } from '@mui/material';
import useStyles from '../utils/styles';

function Header() {
  const classes = useStyles();
  return (
    <div>
      <Head>
        <title>Top-Drawer Collections</title>
      </Head>
      <AppBar position="static" className={classes.navbar}>
        <Toolbar>
          <Typography>Top-Drawer</Typography>
        </Toolbar>
      </AppBar>
    </div>
  );
}

export default Header;
