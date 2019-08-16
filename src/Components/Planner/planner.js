import React from 'react';
import { Button, List, ListItem, ListItemText } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import TimeScheduler from './timeScheduler';

const useStyles = makeStyles(theme => ({
    root: {
      flexGrow: 1,
      padding: 0,
    },
    button:{
      float: "right",
    },
    header:{
        margin: "0",
    }
}));

const Planner = (props) => {
    const classes = useStyles();
    const {selectedDate, month, year, dayIndex} = props;
    var plannerDate= selectedDate+month+", "+year;
    return(
        <React.Fragment>
         <List className={classes.root}>
             <ListItem>
                 <ListItemText primary={dayIndex} secondary={plannerDate}/>
                 <Button variant="outlined" color="primary" className={classes.button}>Schedule a Class</Button>
             </ListItem>
         </List>
         <hr className={classes.header}/>
         <TimeScheduler />
        </React.Fragment>
    )
}
export default Planner;