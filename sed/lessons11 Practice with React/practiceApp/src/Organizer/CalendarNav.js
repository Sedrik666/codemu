import React from 'react';

class CalendarNav extends React.Component {
    render() {
        return (
            <React.Fragment>
                <button onClick={() => this.props.changeMonth(-1)}> Prev Month</button>
                <button onClick={() => this.props.changeMonth(1)}> Next Month</button>
            </React.Fragment>
        );
    }
}

export default CalendarNav;
