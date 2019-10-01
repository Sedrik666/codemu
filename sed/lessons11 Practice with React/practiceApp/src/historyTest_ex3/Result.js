import React from 'react';

class Result extends React.Component{
    render(){
        const {correctAnswer, userAnswers} = this.props;
        let color = 'red';
        if( userAnswers.every(element => correctAnswer.includes(element))){
            color = 'orange';
            if( correctAnswer.length === userAnswers.length ){
                color = 'green';
            }
        }
        return(
            <p style={{color: color}}>
                {
                    color==='green'?
                        'Ваш ответ ' + userAnswers + ', правильно':
                    color==='orange'?
                        'Ваш ответ ' + userAnswers + ', не совсем правильный, правильный ответ ' + correctAnswer:
                    'Ваш ответ ' + userAnswers + ', не правильно, правильный ответ ' + correctAnswer
                }
            </p>
        );
    }
}

export default Result;
