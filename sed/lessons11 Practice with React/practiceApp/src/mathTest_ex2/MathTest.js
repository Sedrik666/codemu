import React from 'react';
import Question from './Question';
import Answer from './Answer'
import Result from './Result'
import "./style.css";

class MathematicsTest extends React.Component {
    constructor() {
        super();
        this.state = {
            faq: [
                {question: '2+2=', answer:'4'},
                {question: '6*4=', answer:'24'},
                {question: '838-60=', answer:'778'},
            ]
        }
    }

    handleChange(event, arr, index) {
        const target = event.target;
        const value = target.type === 'checkbox' ? target.checked : target.value;
        const name = target.name;
        if (arr) {
            const tempArr = this.state[arr].slice();
            tempArr[index][name] = value;
            this.setState({[arr]: tempArr});
        }
        else{
            this.setState({
                [name]: value,
            });
        }
    }

    checkingTest(){
        this.setState({checking: true})
    }

    render() {
        const {faq} = this.state;
        const questionList = faq.map((item, index) => {
           return(
               <figure key={index}>
                   <Question question={item.question}/>
                   {
                       this.state.checking?
                       <Result correctAnswer={item.answer}
                       userAnswer={item.userAnswer || ''}
                       />:
                       <Answer index={index}
                               userAnswer={item.userAnswer || ''}
                               handleChange={this.handleChange.bind(this)}
                       />
                   }

               </figure>
           );
        });

        return (
            <div className="test">
                <h4>
                    2. Реализуйте тест. Дан массив с вопросами и правильными ответами. Выведите все эти вопросы на экран, а
                    под каждым вопросом - инпут. В этот инпут пользователь должен ввести правильный ответ на вопрос. Под
                    всеми вопросами должна находиться кнопка 'сдать тест'. По нажатию на эту кнопку под вопросами вместо
                    инпутов должно появится следующее: 'ваш ответ такой-то, правильно' или 'ваш ответ такой-то, не
                    правильно, правильный ответ такой-то'. Правильные ответы должны быть зеленого цвета, а неправильные
                    - красного.
                </h4>
                {questionList}
                <button onClick={this.checkingTest.bind(this)}>
                    Сдать тест
                </button>
            </div>
        );
    }
}

export default MathematicsTest;
