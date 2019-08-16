import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { Grid, Button, Typography, Icon } from '@material-ui/core';
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
    editButton :{
      backgroundColor: "#EF4538",
      color: "#fff",
      paddingRight: "30px",
      position: "fixed",
      top: "150px",
      right: "-30px"
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
          <Button variant="contained" className={classes.editButton}>
          <Icon>edit_icon</Icon>
          </Button>
        </div>
          <Typography variant='h5'>Calendar</Typography>
          <CustomCalendar />
        </div>
    );
}