import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import {AppBar, Toolbar, IconButton, Typography} from '@material-ui/core';
import MenuIcon from '@material-ui/icons/Menu';
import MoreIcon from '@material-ui/icons/MoreVert';
import Dashboard from './Components/Dashboard';

const useStyles = makeStyles(theme => ({
  root: {
    flexGrow: 1,
  },
  title:{
    color: "#EF4538",
  },
  navbarEnd:{
    margin: '0 0 0 auto',
  }
}));

const username = "Mr. abc"

function App(){
  const classes = useStyles();
  return (
     <div className={classes.root}>
       <AppBar position="fixed" color="default">
       <Toolbar>
        
        <IconButton edge="start" color="inherit" aria-label="menu">
          <MenuIcon />
        </IconButton>

       <Typography className={classes.title}>
        <strong>SIM</strong> Tutors
       </Typography>
      
      <Typography className={classes.navbarEnd}>
      Welcome<br/><strong>{username}</strong>
      </Typography>
       <IconButton edge="end" color="inherit">
            <MoreIcon />
        </IconButton>
       </Toolbar>
       </AppBar>
       <Dashboard/>
    </div>
  );
}

export default App;
