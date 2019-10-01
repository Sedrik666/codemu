import React from 'react';
import WorkerHead from "./WorkerHead"
import WorkerData from "./WorkerData";
import WorkersTotalSalary from './WorkersTotalSalary';
import "./Worker.css";

class WorkersInfo extends React.Component {
    constructor(){
        super();
        this.state={
            workers: [
                {name: 'Victor', surname: 'Zarubin', workedDays: 130, rate: 10},
                {name: 'Simona', surname: 'Simons', workedDays: 700, rate: 300},
                {name: 'Konstantin', surname: 'Zarutskiy', workedDays: 300, rate: 20},
                {name: 'Zoryana', surname: 'Lipetsk', workedDays: 30, rate: 5},
                {name: 'Kristina', surname: 'Scabia', workedDays: 500, rate: 250},
            ]
        }
    }

    render() {
        const {workers} = this.state;
        const workersList = workers.map((item, index) => {
           return(
               <WorkerData key={index}
                       index={index}
                       name={item.name}
                       surname={item.surname}
                       workedDays={item.workedDays}
                       rate={item.rate}
                       handleChange={this.props.handleChange.bind(this)}
               />
           );
        });

        return (
            <div className="workersSalary">
                <h4>
                    1. Дан массив с работниками. У каждого работника есть имя, фамилия, количество отработанных дней и
                    зарплатная ставка за день. Выведите этих работников на экран в виде таблицы. Сделайте так, чтобы в
                    последней колонке автоматически рассчитывалась зарплата работника (количество отработанных дней
                    умножить на ставку). Сделайте так, чтобы количество дней и ставка выводились в виде инпутов. Если
                    поредактировать эти инпуты - зарплата также должна поменяться. Под таблицей также выведите суммарную
                    зарплату всех работников.
                </h4>

                <table>
                    <WorkerHead />
                    <tbody>
                        {workersList}
                    </tbody>
                </table>
                <WorkersTotalSalary workers={workers}/>
            </div>
        );
    }
}

export default WorkersInfo;
