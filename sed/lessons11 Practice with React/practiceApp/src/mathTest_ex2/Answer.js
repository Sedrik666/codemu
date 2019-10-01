import React from 'react';

class Answer extends React.Component{
    constructor() {
        super();
        this.state = {}
    }

    render(){
        return(
            <input type="text"
                   name='userAnswer'
                   value={this.props.userAnswer}
                   onChange={
                       (event) => {
                           this.props.handleChange(event, 'faq', this.props.index);
                       }
                   }
            />
        );
    }
}

export default Answer;
