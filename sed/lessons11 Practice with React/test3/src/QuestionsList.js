import React from 'react';
import Question from './Question';
import Answer from './Answer'
import Result from './Result'

class QuestionsList extends React.Component {
    render() {
        const {faq, currentQuestion, checking} = this.props;
        const questionList = faq.map((item, index) => {
           return(
               (currentQuestion === index+1 || checking) &&
               <figure key={index}>
                   <Question question={item.question}/>
                   {
                       checking?
                       <Result correctAnswer={item.answer}
                           userAnswer={item.userAnswer || ''}
                   />:
                       <Answer index={index}
                           userAnswer={item.userAnswer || ''}
                           handleChange={this.props.handleChange.bind(this)}
                           finishTest={this.props.finishTest.bind(this)}
                        />
                   }
               </figure>
           );
        });

        return (
            <figure>
                {questionList}
            </figure>
        );
    }
}

export default QuestionsList;
