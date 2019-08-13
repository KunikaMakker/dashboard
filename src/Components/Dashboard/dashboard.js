import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { Grid, Button, Typography } from '@material-ui/core';
import Icon from '@material-ui/core/Icon';
import Cards from '../Cards';
import CustomCalendar from '../Calendar';

const useStyles = makeStyles(theme => ({
    root: {
      flexGrow: 1,
      margin: '100px 45px 0px 45px',
    },
    cards :{
      width: '20%',
    },
    themeColor :{
      color: "#EF4538",
    }
  }));


export default function dashboard(){
    const classes = useStyles();
    return(
        <div className={classes.root}>
          <Grid container spacing={1}>
            <Grid item xs={12} sm={12}>
              <Grid container justify="center" spacing={3}>
                <Grid item className={classes.cards}>
                <Cards title="Total Registered Students" value="27"/>
                </Grid>
                <Grid item className={classes.cards}>
                <Cards title="Assignments Uploaded" value="18"/>
                </Grid>
                <Grid item className={classes.cards}>
                <Cards title="Total Classes" value="217"/>
                </Grid>
                <Grid item className={classes.cards}>
                <Cards title="Next Class in" value="0 hours, 0 minutes"/>
                </Grid>
                <Grid item className={classes.cards}>
                <Cards title="Pending Students Request" value="0" button_name="View"/>
                </Grid>
              </Grid>
            </Grid>
          </Grid> 
          <div>
            <Button color="secondary"
            variant="contained"
            >
            <Icon>edit_icon</Icon>
          </Button>
        </div>
          <Typography variant='h5'>Calendar</Typography>
          <CustomCalendar />
        </div>
    );
}