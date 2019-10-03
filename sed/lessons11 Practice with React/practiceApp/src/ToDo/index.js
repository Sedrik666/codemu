import React from 'react';
import TaskList from './TaskList'
import AddTask from './AddTask'
import "./style.css";

class ToDo extends React.Component {
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

    pushToArr(event, arr, text){
        event.preventDefault();
        const tempArr = this.state[arr].slice();
        const newTask = this.createNewTask(text);
        tempArr.push(newTask);
        this.setState({[arr]: tempArr});
    }
    editArrItem(arr, index){
        const tempArr = this.state[arr].slice();
        const editing = tempArr[index]['editing'];
        tempArr[index]['editing'] = this.toggleBool(editing)
        this.setState({[arr]: tempArr});
    }
    toggleBool(item){
        return item === undefined? true: !item;
    }
    removeFromArr(arr, index){
        const tempArr = this.state[arr].slice();
        tempArr.splice(index, 1);
        this.setState({[arr]: tempArr});
    }

    createNewTask(text){
        return(
            {
                text: text,
                completed: false,
            }
        );
    }

    render() {
        const{tasks} = this.state;
        return (
            <div>
                <h4>
                    6. Реализуйте TODO-лист (чеклист). В нем должен быть список задач, которые хочет сделать
                    пользователь. Задачу можно добавить, удалить, поредактировать. Кроме того, рядом с каждой задачей
                    должен быть чекбокс, с помощью которого можно отметить эту задачу сделанной. Сделанная задача не
                    удаляется из списка, а становится перечеркнутой (перечеркнуть текст можно с помощью
                    text-decoration).
                </h4>
                <AddTask pushToArr={this.pushToArr.bind(this)}
                         handleChange={this.props.handleChange.bind(this)}
                         newTask={this.state.newTask || ''}
                />
                <TaskList tasks={tasks}
                          handleChange={this.props.handleChange.bind(this)}
                          removeFromArr={this.removeFromArr.bind(this)}
                          editArrItem={this.editArrItem.bind(this)}
                />


            </div>
        );
    }
}

export default ToDo;
