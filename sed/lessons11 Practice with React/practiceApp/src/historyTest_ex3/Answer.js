import React from 'react';

class Answer extends React.Component{
    render(){
        const {answerVariants} = this.props;
        const answerList = answerVariants.map((item, index) => {
           return (
               <p key={index}>
                   <input type="radio"
                          name='userAnswer'
                          value={item}
                          checked={this.props.userAnswer === item}
                          onChange={
                              (event) => {
                                  this.props.handleChange(event, 'faq', this.props.index);
                                  this.props.finishTest();
                              }
                          }
                   />
                   {item}
               </p>
           );
        });
        return(
            <figure>
                <input type="text"
                       name='userAnswer'
                       value={this.props.userAnswer}
                       disabled={true}
                       onChange={
                           (event) => {
                               this.props.handleChange(event, 'faq', this.props.index);
                               this.props.finishTest();
                           }
                       }
                />
                {answerList}
            </figure>
        );
    }
}

export default Answer;
