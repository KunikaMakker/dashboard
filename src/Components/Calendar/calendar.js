import React from 'react';
import CalendarHead from './calendarHead';
import CalendarBody from './calendarBody';
import CalendarNav from './calendarNav';
import {Table, TableHead} from '@material-ui/core';

const Calendar = (props) => {
    const {calendarDays, dateObject, previousMonth, nextMonth, selectedDay} = props;
    return(
        <Table>
            <TableHead>
            <CalendarNav dateObject={dateObject} previousMonth={previousMonth} nextMonth={nextMonth}/>
            <CalendarHead />
            </TableHead>
            <CalendarBody calendarDays={calendarDays} 
                selectedDay={selectedDay}/>
        </Table>
    );
}
export default Calendar;