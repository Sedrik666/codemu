import React from 'react';

class AddTask extends React.Component {
    render() {
        return (
            <form onSubmit={event => this.props.pushToArr(event, 'tasks', this.props.newTask)}>
                <input type="text"
                       name="newTask"
                       value={this.props.newTask || ''}
                       onChange={this.props.handleChange.bind(this)}
                />
                <input type="submit"
                       value="Add"
                />
            </form>
        );
    }
}

export default AddTask;
