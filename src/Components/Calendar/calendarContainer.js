import React from 'react';
import moment from 'moment';
import Calendar from './calendar';
import Planner from '../Planner';
import {getArray} from './utils';
import { Grid } from '@material-ui/core';
import _ from 'lodash';

class CalendarContainer extends React.PureComponent {

    state = {
        dateObject: moment(),
        selectedDate: moment().format("D"),
        dayIndex: moment().format("dddd")
    }

    previousMonth = () =>{
        var prev = _.cloneDeep(this.state.dateObject);
        prev = prev.subtract(1,"month");
        this.setState({dateObject: prev })
        console.log('in previous month',prev.format("MMMM"), this.state.dateObject.format("MMMM"), this.state.dateObject.format("Y"))
    }

    nextMonth = () =>{
        var next =  _.cloneDeep(this.state.dateObject);
        next = next.add(1,"month");
        this.setState({dateObject: next})
        console.log('in next month',this.state.dateObject.format("MMMM"), this.state.dateObject.format("Y"))
    }
    
    firstDayOfMonth = (month) => {
        let firstDay = moment(month)
        .startOf("month")
        .format("d");

        return parseInt(firstDay, 10);
    };

    lastDayOfMonth = (month) => {
        let lastDay = moment(month)
        .endOf("month")
        .format("d");

        return parseInt(lastDay, 10);
    };

    displayableLastMonthDays = () => {
        const days = this.firstDayOfMonth(this.state.dateObject);
        const lastMonthNum = this.state.dateObject.month() - 1;
        const lastMonth = moment(moment()).set("month", lastMonthNum);
        const daysInLastMonth = lastMonth.daysInMonth();

        const dates = getArray(days).map((val,index) => ({
            day: daysInLastMonth - days + index + 1,
            month: lastMonthNum
        }))

        return dates;
    }

    displayableNextMonthDays = () => {
        const daysInAWeek = 6;
        const days = daysInAWeek - this.lastDayOfMonth(this.state.dateObject);
        const nextMonthNum = this.state.dateObject.month() + 1;

        const dates = getArray(days).map((val, index) => ({
            day: index + 1,
            month: nextMonthNum
          }));

        return dates;
    }

    daysInCurrentMonth = () => {
        const days = this.state.dateObject.daysInMonth();
        const currentMonthNum = this.state.dateObject.month();

        const dates = getArray(days).map((val, index) => ({
            day: index + 1,
            month: currentMonthNum
          }));

        return dates;
    }

    selectedDay = (e, day, index) => {
        this.setState({
            selectedDate: day,
            dayIndex: index,
        },
        () => {
            var dayName;
            switch(this.state.dayIndex)
            {
                case 0:
                    dayName = "Sunday"
                    break;
                case 1:
                    dayName = "Monday"
                    break;
                case 2:
                    dayName = "Tuesday"
                    break;
                case 3:
                    dayName = "Wednesday"
                    break;
                case 4:
                    dayName = "Thursday"
                    break;
                case 5:
                    dayName = "Friday"
                    break;
                case 6:
                    dayName = "Saturday"
                    break;
                default:
                    dayName = "Invalid"
                    break;
            }
            this.setState({dayIndex: dayName});
        });
    }

    
    render(){
        let displayableDays = [
            ...this.displayableLastMonthDays(),
            ...this.daysInCurrentMonth(),
            ...this.displayableNextMonthDays()
        ]
        return(
            <Grid container spacing={3}>
                <Grid item xs={7}>            
                    <Calendar 
                    calendarDays={displayableDays} 
                    month={this.state.dateObject.format("MMMM")}
                    year={this.state.dateObject.format("Y")}
                    previousMonth={this.previousMonth}
                    nextMonth={this.nextMonth}
                    selectedDay={this.selectedDay}
                    />
                </Grid>
                <Grid item xs={5}>
                    <Planner
                    selectedDate={this.state.selectedDate}
                    month={this.state.dateObject.format("MMMM")}
                    year={this.state.dateObject.format("Y")}
                    dayIndex={this.state.dayIndex}
                     />
                </Grid>
            </Grid>
        );
    }
}
export default CalendarContainer;