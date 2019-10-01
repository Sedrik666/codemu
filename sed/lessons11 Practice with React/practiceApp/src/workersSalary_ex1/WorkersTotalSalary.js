import React from 'react';

class WorkersTotalSalary extends React.Component {
    render() {
        const totalSalary = this.props.workers.reduce((sum, element) => {
            return sum + element.workedDays*element.rate;
        }, 0);
        return (
            <p>
                Total salary: {totalSalary}
            </p>
        );
    }
}

export default WorkersTotalSalary;
