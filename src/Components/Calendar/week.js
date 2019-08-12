import React from 'react';
import {getArray} from './utils';
import { TableRow, TableCell } from '@material-ui/core';

const Week = (props) => {
    const {weekNumber, calendarDays, selectedDay} = props;
    const daysInAWeek = 7;

    const weekDays = getArray(daysInAWeek).map((val, dayNum) => {
        const dayIndex = dayNum + daysInAWeek * weekNumber;
        const {day} = calendarDays[dayIndex];
        return day;
    });
    return(
        <TableRow>
            {weekDays.map((day,index) => (
                <TableCell key={index} onClick={e => selectedDay(e, day)}>{day}</TableCell>
            ))}
        </TableRow>
    );
}
export default Week;