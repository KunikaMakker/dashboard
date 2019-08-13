import React from 'react';
import {Card, CardContent, Typography, Button, Grid} from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles(theme => ({
    root: {
      flexGrow: 1,
    },
    title:{
      color: "#EF4538",
    },
}));

export default function Cards(props){
    const classes = useStyles();
    return(
        <Card className={classes.root}>
            <CardContent>
                <Grid container>
                    <Grid item xs={12}>
                        <Typography variant='subtitle1'>
                        {props.title}
                        </Typography>
                    </Grid>
                    <Grid item xs={2}>
                        {props.button_name ? <Button className={classes.title}>View</Button>: null} 
                    </Grid>
                    <Grid item xs={10}>
                        <Typography variant='h5' align='right'>
                        {props.value}
                        </Typography>
                    </Grid>
                </Grid>
            </CardContent>
        </Card>
    );
} 