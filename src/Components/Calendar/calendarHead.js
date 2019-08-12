import React from 'react';
import moment from 'moment';
import { TableHead, TableRow, TableCell } from '@material-ui/core';


const CalendarHead = () => {
    const weekDays = moment.weekdaysShort();
    return(
        <TableHead>
            <TableRow>
                {weekDays.map((day, index) => (
                    <TableCell key={index}>{day}</TableCell>
                ))}
            </TableRow>
        </TableHead>
    );
}

export default CalendarHead;