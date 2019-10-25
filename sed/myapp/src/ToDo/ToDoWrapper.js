import React from 'react';
import ToDo from './ToDo'

class ToDoWrapper extends React.Component {
    constructor() {
        super();
        this.state = {
            tasks: [
                {
                    text: 'Создать заголовок задачи',
                    completed: true,
                },
                {
                    text: 'Зробить чорнову версію',
                    completed: false,
                },
                {
                    text: 'Зробить юазовий функціонал',
                    completed: false,
                },
            ]
        }
    }

    render() {
        return (
            <ToDo tasks={this.state.tasks}
                  newTask = {this.state.newTask || ''}
                  handleChange={this.props.handleChange.bind(this)}
                  pushToArr={this.props.pushToArr.bind(this)}
                  editArrItem={this.props.editArrItem.bind(this)}
                  toggleBool={this.props.toggleBool.bind(this)}
                  removeFromArr={this.props.removeFromArr.bind(this)}
                  createNewTask={this.props.createNewTask.bind(this)}
            />
        );
    }
}

export default ToDoWrapper;
