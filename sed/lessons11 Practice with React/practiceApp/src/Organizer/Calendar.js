import React from 'react';
import CalendarHead from './CalendarHead';
import CalendarDays from './CalendarDays';
import CalendarNav from './CalendarNav';

class Calendar extends React.Component {
    constructor() {
        super();
        this.state = {
            selectedYear: new Date().getFullYear(),
            selectedMonth: new Date().getMonth(),
            currentDay: new Date().getDate(),
        }
    }
    changeMonth(number){
        let newMonth = this.state.selectedMonth + number;
        if(newMonth<0){
            this.setState({selectedYear: this.state.selectedYear - 1});
            newMonth=11;
        }
        if(newMonth>11){
            this.setState({selectedYear: this.state.selectedYear + 1});
            newMonth=0;
        }
        this.setState({selectedMonth: newMonth});
    }

    render() {
        const {selectedYear, selectedMonth, currentDay} = this.state;
        return (
            <React.Fragment>
                <CalendarNav changeMonth={this.changeMonth.bind(this)}/>
                <div>
                    <br/>
                    <table>
                        <thead>
                        <CalendarHead selectedYear={selectedYear}
                                      selectedMonth={selectedMonth}
                        />
                        </thead>
                        <CalendarDays changeDate={this.props.changeDate}
                                      selectedYear={selectedYear}
                                      selectedMonth={selectedMonth}
                                      selectedDate={this.props.selectedDate}
                                      currentDay={currentDay}
                        />
                    </table>
                    <br/>
                </div>
            </React.Fragment>
        );
    }
}

export default Calendar;
