import React, { Component } from "react";
import { hot } from "react-hot-loader";
import "./App.css";
import WorkersInfo from "./workersSalary_ex1/WorkersInfo";
import MathTest from "./mathTest_ex2/MathTest";
import HistoryTest from "./historyTest_ex3/HistoryTest";
import ToDoWrapper from "./ToDo/ToDoWrapper";
import Organizer from "./Organizer/Organizer";

class App extends Component {
    constructor(){
        super();
        this.state= {
            user: {
                avatar:
                    "https://www.gravatar.com/avatar/5c3dd2d257ff0e14dbd2583485dbd44b",
                name: "Dave",
                followers: 1234,
                following: 123
            }
        };
    };

    pushToArr(event, arr, text){
        event.preventDefault();
        const tempArr = this.state[arr].slice();
        const newTask = this.props.createNewTask(text);
        tempArr.push(newTask);
        this.setState({[arr]: tempArr});
    }

    editArrItem(arr, index){
        const tempArr = this.state[arr].slice();
        const editing = tempArr[index]['editing'];
        tempArr[index]['editing'] = this.toggleBool(editing);
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

    handleChange(event, arr, index) {
        const target = event.target;
        const value = target.type === "checkbox" ? target.checked : target.value;
        const name = target.name;
        if (arr) {
            const tempArr = this.state[arr].slice();
            tempArr[index][name] = value;
            this.setState({[arr]: tempArr});
        } else {
            this.setState({
                [name]: value,
            });
        }
    }

    render() {
        return (
            <div className="App">
                <h1> Lesson 11 </h1>
                {/*<WorkersInfo handleChange={this.handleChange}/>
                <MathTest handleChange={this.handleChange}/>
                <HistoryTest/>
                */}
                {/*<h4>
                    6. Реализуйте TODO-лист (чеклист). В нем должен быть список задач, которые хочет сделать
                    пользователь. Задачу можно добавить, удалить, поредактировать. Кроме того, рядом с каждой задачей
                    должен быть чекбокс, с помощью которого можно отметить эту задачу сделанной. Сделанная задача не
                    удаляется из списка, а становится перечеркнутой (перечеркнуть текст можно с помощью
                    text-decoration).
                </h4>
                <ToDoWrapper handleChange={this.handleChange}
                             pushToArr={this.pushToArr}
                             editArrItem={this.editArrItem}
                             toggleBool={this.toggleBool}
                             removeFromArr={this.removeFromArr}
                             createNewTask={this.createNewTask}
                />*/}
                <h4>
                    7. Реализуйте органайзер. Он должен представлять собой календарь за текущий месяц. По нажатию на
                    определенную дату календаря мы должны увидеть список дел, запланированных на этот день. Каждое дело
                    можно поредактировать, отметить сделанным или удалить, можно также добавить новое дело. Над
                    календарем должны быть стрелочки 'назад' и 'вперед', с помощью которых можно сменить месяц и год в
                    календаре.
                </h4>
                <Organizer pushToArr={this.pushToArr}
                           editArrItem={this.editArrItem}
                           toggleBool={this.toggleBool}
                           removeFromArr={this.removeFromArr}
                           createNewTask={this.createNewTask}
                />
            </div>
        );
    }
}

export default hot(module)(App);
