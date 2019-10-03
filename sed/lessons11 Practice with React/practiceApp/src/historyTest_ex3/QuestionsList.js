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
               <React.Fragment key={index}>
                   <Question question={item.question}/>
                   {
                       checking?
                       <Result correctAnswer={item.correctAnswer}
                               userAnswers={item.userAnswers || ''}
                   />:
                       <Answer index={index}
                               answerVariants={item.answerVariants}
                               userAnswers={item.userAnswers || ''}
                               handleChange={this.props.handleChange.bind(this)}
                               finishTest={this.props.finishTest.bind(this)}
                        />
                   }
               </React.Fragment>
           );
        });

        return (
            <React.Fragment>
                {questionList}
            </React.Fragment>
        );
    }
}

export default QuestionsList;
