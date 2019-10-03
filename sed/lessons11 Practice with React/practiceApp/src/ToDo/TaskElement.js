import React from 'react';
import TaskControl from './TaskControl';

class Task extends React.Component {
    render() {
        const {item, index} = this.props;

        return (
            <React.Fragment>
                <input type="checkbox"
                       name="completed"
                       checked={item.completed}
                       onChange={event => this.props.handleChange(event, 'tasks', index)}
                />
                {
                    item.editing?
                    <input type="text"
                           name="text"
                           value={item.text}
                           onChange={event => this.props.handleChange(event, 'tasks', index)}
                    />:
                    <span style={{textDecoration: item.completed?'line-through':'none'}}>
                        {item.text}
                    </span>
                }
                <TaskControl index = {index}
                             editing = {item.editing || false}
                             editArrItem = {this.props.editArrItem}
                             removeFromArr = {this.props.removeFromArr}
                />
                <br/>
            </React.Fragment>
        );
    }
}

export default Task;
