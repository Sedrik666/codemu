import React from 'react';
import Task from './TaskElement'

class TaskList extends React.Component {
    render() {
        const {tasks} = this.props;
        const taskList = tasks.map((item, index) => {
            return(
                <Task key={index}
                      item={item}
                      index={index}
                      handleChange={this.props.handleChange}
                      editArrItem={this.props.editArrItem}
                      removeFromArr={this.props.removeFromArr}
                />
            );
        });

        return (
            <div className='taskList'>
                {taskList}
            </div>
        );
    }
}

export default TaskList;
