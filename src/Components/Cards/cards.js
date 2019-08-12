import React from 'react';
import {Card, CardContent, Typography} from '@material-ui/core';

export default function Cards(props){
    return(
        <Card>
            <CardContent>
                <Typography variant='h6'>
                    {props.title}
                </Typography>
                <Typography variant='h4' align='right'>
                    {props.value}
                </Typography>
            </CardContent>
        </Card>
    );
} 