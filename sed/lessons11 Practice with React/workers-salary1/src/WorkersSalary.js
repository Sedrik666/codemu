import React from 'react';

class WorkersSalary extends React.Component {
    constructor(){
        super();
        this.state={
            workers: [
                {name: 'Victor', surname: 'Zarubin', workedDays: 130, salary: 10},
                {name: 'Simona', surname: 'Simons', workedDays: 700, salary: 300},
                {name: 'Konstantin', surname: 'Zarutskiy', workedDays: 300, salary: 20},
                {name: 'Zoryana', surname: 'Lipetsk', workedDays: 30, salary: 5},
                {name: 'Kristina', surname: 'Scabia', workedDays: 500, salary: 250},
            ]
        }
    }
    render() {
        return (
            <div className="workersSalary">
                <h4>
                    Дан массив с работниками. У каждого работника есть имя, фамилия, количество отработанных дней и
                    зарплатная ставка за день. Выведите этих работников на экран в виде таблицы. Сделайте так, чтобы в
                    последней колонке автоматически рассчитывалась зарплата работника (количество отработанных дней
                    умножить на ставку). Сделайте так, чтобы количество дней и ставка выводились в виде инпутов. Если
                    поредактировать эти инпуты - зарплата также должна поменяться. Под таблицей также выведите суммарную
                    зарплату всех работников.
                </h4>

                <table>
                    <tbody>

                    </tbody>
                </table>
            </div>
        );
    }
}

export default WorkersSalary;
