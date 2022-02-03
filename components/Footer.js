import React from 'react';
import { Typography } from '@mui/material';
import useStyles from '../utils/styles';

function Footer() {
  const classes = useStyles();
  return (
    <div>
      <footer className={classes.footer}>
        <Typography>All rights reserved Top-Drawer Collections</Typography>
      </footer>
    </div>
  );
}

export default Footer;
