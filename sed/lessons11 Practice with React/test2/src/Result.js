import React from 'react';

class Result extends React.Component{
    render(){
        const {correctAnswer, userAnswer} = this.props;
        const check = correctAnswer === userAnswer;
        return(
            <p style={{color: check? 'green' : 'red'}}>
                {
                    check?
                    'Ваш ответ ' + userAnswer + ', правильно':
                    'Ваш ответ ' + userAnswer + ', не правильно, правильный ответ ' + correctAnswer
                }
            </p>
        );
    }
}

export default Result;
