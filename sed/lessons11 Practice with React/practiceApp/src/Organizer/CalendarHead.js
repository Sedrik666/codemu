import React from 'react';

class CalendarHead extends React.Component {
    constructor() {
        super();
        this.state = {
            months: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'June', 'July', 'Aug', 'Sept', 'Oct', 'Nov', 'Dec'],
            weekNames: ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday']
        }
    }

    render() {
        const {months, weekNames} = this.state;
        const {selectedYear, selectedMonth} = this.props;

        const calendarWeeks = weekNames.map((item, index) => {
            return(
                <td key={index}>
                    {item}
                </td>
            )
        });
        return (
            <React.Fragment>
                <tr>
                    <td>
                        {selectedYear}
                    </td>
                    <td>
                        {months[selectedMonth]}
                    </td>
                </tr>
                <tr>
                    {calendarWeeks}
                </tr>
            </React.Fragment>
        );
    }
}

export default CalendarHead;
