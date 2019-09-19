import React from 'react';

class WorkerHead extends React.Component{
    render(){

        return (
            <thead>
                <tr>
                    <th>Имя</th>
                    <th>Фамилия</th>
                    <th>Отработано дней</th>
                    <th>Ставка</th>
                    <th>Зарплата</th>
                </tr>
            </thead>
        );
    }
}

export default WorkerHead;
