import React from 'react';

class TaskControl extends React.Component {
    render() {
        const{editing, index} = this.props;
        return (
            <React.Fragment>
                <button onClick={this.props.editArrItem.bind(false, 'tasks', index)}>
                    { editing? "Save": "Edit" }
                </button>
                <button onClick={this.props.removeFromArr.bind(false,'tasks', index)}>
                    Remove
                </button>
            </React.Fragment>
        );
    }
}

export default TaskControl;
