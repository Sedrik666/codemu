import React from 'react';
class WorkerData extends React.Component{

    render(){
        const {index, name, surname, workedDays, rate} = this.props;
        const salary = workedDays * rate;

        return (
            <tr>
                <td>{name}</td>
                <td>{surname}</td>
                <td>
                    <input type="number"
                           name={'workedDays'}
                           value={workedDays}
                           onChange={
                               (event) => {
                                   this.props.handleChange(event, 'workers', index);
                               }
                           }
                    />
                </td>
                <td>
                    <input type="number"
                           name={'rate'}
                           value={rate}
                           onChange={
                               (event) => {
                                   this.props.handleChange(event, 'workers', index);
                               }
                           }
                    />
                </td>
                <td>{salary}</td>
            </tr>
        );
    }
}

export default WorkerData;
