import React from 'react';
import TaskList from './TaskList'
import AddTask from './AddTask'
import "./style.css";

class ToDo extends React.Component {
    render() {
        const {tasks} = this.props;
        return (
            <div>
                <AddTask pushToArr={this.props.pushToArr}
                         handleChange={this.props.handleChange}
                         newTask={this.props.newTask}
                />
                <TaskList tasks={tasks}
                          handleChange={this.props.handleChange}
                          removeFromArr={this.props.removeFromArr}
                          editArrItem={this.props.editArrItem}
                />
            </div>
        );
    }
}

export default ToDo;
