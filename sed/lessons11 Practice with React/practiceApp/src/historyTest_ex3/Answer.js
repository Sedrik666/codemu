import React from 'react';

class Answer extends React.Component{
    render(){
        const {answerVariants, userAnswers} = this.props;
        const answerList = answerVariants.map((item, index) => {
           return (
               <label key={index}>
                   <input type="checkbox"
                          name="userAnswers"
                          value={item}
                          checked={userAnswers.includes(item)}
                          onChange={
                              (event) => {
                                  this.props.handleChange(event, 'faq', this.props.index, item);
                                  this.props.finishTest();
                              }
                          }
                   />
                   {item}
                   <br/>
               </label>
           );
        });
        return(
            <React.Fragment>
                {/*<input type="text"
                       name='userAnswer'
                       value={this.props.userAnswer}
                       disabled={true}
                       onChange={
                           (event) => {
                               this.props.handleChange(event, 'faq', this.props.index);
                               this.props.finishTest();
                           }
                       }
                />*/}
                {answerList}
            </React.Fragment>
        );
    }
}

export default Answer;
