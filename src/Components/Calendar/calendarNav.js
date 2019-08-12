import React from 'react';
import { TableHead, TableRow, TableCell } from '@material-ui/core';
import {ArrowBackIos, ArrowForwardIos} from '@material-ui/icons';

const calendarNav = (props) => {
    const {dateObject, previousMonth, nextMonth} = props;
    return(
        <TableHead>
            <TableRow>
                <TableCell onClick={previousMonth}><ArrowBackIos/></TableCell>
                <TableCell>{dateObject.format("MMMM")} {dateObject.format("Y")}</TableCell>
                <TableCell onClick={nextMonth}><ArrowForwardIos/></TableCell>
            </TableRow>
        </TableHead>
    );
}

export default calendarNav;