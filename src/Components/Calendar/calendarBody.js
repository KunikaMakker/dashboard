import React from 'react';
import {getArray} from './utils';
import Week from './week';
import { TableBody } from '@material-ui/core';

const CalendarBody = (props) => {
    const {calendarDays, selectedDay} = props;
    const WeeksInCalendar = 5;

    return(
        <TableBody>
            {getArray(WeeksInCalendar).map((val, week) => (
                <Week
                key={week}
                selectedDay={selectedDay}
                weekNumber={week}
                calendarDays={calendarDays}
                />
            ))}
        </TableBody>
    );
}
export default CalendarBody;