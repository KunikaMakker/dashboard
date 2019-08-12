import React from 'react';
import moment from 'moment';
import Calendar from './calendar';
import {getArray} from './utils';

class CalendarContainer extends React.PureComponent {
    
    state = {
        dateObject: moment(),
    }

    previousMonth = () =>{
        this.setState({dateObject: this.state.dateObject.subtract(1,"month")})
        console.log('in previous month',this.state.dateObject.format("MMMM"), this.state.dateObject.format("Y"))
    }

    nextMonth = () =>{
        this.setState({dateObject: this.state.dateObject.add(1,"month")})
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

    selectedDay = (e, d) => {
        this.setState({
            selectedDate: d
        },
        () => {
            console.log("selectedDate: ", this.state.selectedDate);
        })
    }

    displayableDays = [
        ...this.displayableLastMonthDays(),
        ...this.daysInCurrentMonth(),
        ...this.displayableNextMonthDays()
    ]
    render(){
        return(
            <Calendar 
                calendarDays={this.displayableDays} 
                dateObject={this.state.dateObject}
                previousMonth={this.previousMonth}
                nextMonth={this.nextMonth}
                selectedDay={this.selectedDay}
                />
        );
    }
}
export default CalendarContainer;