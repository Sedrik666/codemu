import React from 'react';

class CalendarDays extends React.Component {


    render() {
        const {selectedYear, selectedMonth, selectedDate, currentDay} = this.props;
        const selectedMonthLength = new Date(selectedYear, selectedMonth+1, 0).getDate();

        const currentDate = new Date(selectedYear, selectedMonth, currentDay).toLocaleDateString();

        const days = Array(selectedMonthLength-1).fill(0).map((item, index) => index+1);
        const dayOfWeek = new Date(selectedYear, selectedMonth, 1).getDay();

        for(let i = 0; i<dayOfWeek; i++){
            days.unshift(null);
        }

        const sortedDays = days.map((item, index, a) => a.slice(index * 7, index * 7 + 7)).filter((el) => el.length);
        const calendarDays = sortedDays.map((item, index) => {
            return(
                <tr key={index}>
                    {
                        item.map((item, index) => {
                            const thisDate = new Date(selectedYear, selectedMonth, item).toLocaleDateString();
                            return(

                                <td key={index}
                                    onClick={() => this.props.changeDate(thisDate)}
                                    style={{
                                        backgroundColor:
                                            thisDate===selectedDate? 'lightblue':
                                            thisDate===currentDate? 'lightgrey':
                                            'white'
                                    }}
                                >
                                    {item}
                                </td>
                            );
                        })
                    }
                </tr>
            );
        });

        return (
            <tbody>
                {calendarDays}
            </tbody>
        );
    }
}

export default CalendarDays;
