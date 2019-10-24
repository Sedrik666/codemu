import React from 'react';
import Calendar from './Calendar';
import ToDo from '../ToDo/ToDo';
import "./style.css";

class Organizer extends React.Component {
    constructor() {
        super();
        this.state = {
            selectedDate: '24.10.2019',
            tasks: {
                '23.10.2019': [
                    {
                        text: '1',
                        completed: true,
                    },
                ],
                '24.10.2019': [
                    {
                        text: '2',
                        completed: true,
                    },
                ],
            },
        }
    }

    handleChange(event, arr, index) {
        const target = event.target;
        const value = target.type === "checkbox" ? target.checked : target.value;
        const name = target.name;
        if (arr) {
            const tempArr = {...this.state[arr]};
            tempArr[this.state.selectedDate][index][name] = value;
            this.setState({[arr]: tempArr});
        } else {
            this.setState({
                [name]: value,
            });
        }
    }

    changeDate(date){
        this.setState({selectedDate: date});
    }

    pushToArr(event, arr, text){
        event.preventDefault();
        const tempArr = {...this.state[arr]};
        const newTask = this.createNewTask(text);
        if(tempArr[this.state.selectedDate]===undefined){
            tempArr[this.state.selectedDate]=[];
        }
        tempArr[this.state.selectedDate].push(newTask);
        this.setState({[arr]: tempArr});
    }

    editArrItem(arr, index){
        const tempArr = {...this.state[arr]};
        const editing = tempArr[this.state.selectedDate][index]['editing'];
        tempArr[this.state.selectedDate][index]['editing'] = this.toggleBool(editing);
        this.setState({[arr]: tempArr});
    }

    toggleBool(item){
        return item === undefined? true: !item;
    }

    removeFromArr(arr, index){
        const tempArr = {...this.state[arr]};
        tempArr[this.state.selectedDate].splice(index, 1);
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
        const{tasks, selectedDate} = this.state;
        return (
            <React.Fragment>
                <Calendar changeDate={this.changeDate.bind(this)}
                          selectedDate={this.state.selectedDate}
                />
                <ToDo tasks={tasks[selectedDate] || []}
                      newTask = {this.state.newTask || ''}
                      handleChange={this.handleChange.bind(this)}
                      pushToArr={this.pushToArr.bind(this)}
                      editArrItem={this.editArrItem.bind(this)}
                      toggleBool={this.toggleBool.bind(this)}
                      removeFromArr={this.removeFromArr.bind(this)}
                      createNewTask={this.createNewTask.bind(this)}
                />
            </React.Fragment>
        );
    }
}

export default Organizer;
