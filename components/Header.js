import React from 'react';
import Head from 'next/head';
import NextLink from 'next/link';
import { AppBar, Link, Toolbar, Typography } from '@mui/material';
import useStyles from '../utils/styles';

function Header({ title }) {
  const classes = useStyles();
  return (
    <div>
      <Head>
        <title>
          {title
            ? `${title} - Top-Drawer Collections`
            : 'Top-Drawer Collections'}
        </title>
      </Head>
      <AppBar position="static" className={classes.navbar}>
        <Toolbar>
          <NextLink href="/" passHref>
            <Link>
              <Typography className={classes.brand}>Top-Drawer</Typography>
            </Link>
          </NextLink>
          <div className={classes.grow}></div>
          <div>
            <NextLink href="/cart" passHref>
              <Link>Cart</Link>
            </NextLink>
            <NextLink href="/login" passHref>
              <Link>Login</Link>
            </NextLink>
          </div>
        </Toolbar>
      </AppBar>
    </div>
  );
}

export default Header;
