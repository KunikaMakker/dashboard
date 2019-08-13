import React from 'react';
import moment from 'moment';
import { TableRow, TableCell } from '@material-ui/core';


const CalendarHead = () => {
    const weekDays = moment.weekdaysShort();
    return(
            <TableRow>
                {weekDays.map((day, index) => (
                    <TableCell key={index}>{day}</TableCell>
                ))}
            </TableRow>
    );
}

export default CalendarHead;