import React from 'react';
import { TableRow, TableCell } from '@material-ui/core';
import {ArrowBackIos, ArrowForwardIos} from '@material-ui/icons';

const calendarNav = (props) => {
    const {dateObject, previousMonth, nextMonth} = props;
    return(
            <TableRow>
                <TableCell colSpan={2} onClick={previousMonth}><ArrowBackIos/></TableCell>
                <TableCell colSpan={3} align="center" key={dateObject}>{dateObject.format("MMMM")} {dateObject.format("Y")}</TableCell>
                <TableCell colSpan={2} align="right" onClick={nextMonth}><ArrowForwardIos/></TableCell>
            </TableRow>
    );
}

export default calendarNav;