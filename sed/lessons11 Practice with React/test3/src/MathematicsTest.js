import React from 'react';
import "./style.css";
import QuestionsList from "./QuestionsList";
import Navigation from "./Navigation"

class MathematicsTest extends React.Component {
    constructor() {
        super();
        this.state = {
            faq: [
                {question: 'Найвища гора Греції:', answer:'Гісарлик'},
                {question: 'На місці грецької колонії тепер існує місто:', answer:'Севастополь'},
                {question: ' У Месопотамії протікають:', answer:'Тигр'},
            ],
            currentPage: 1,
            checking: false,
        }
    }

    finishTest(){
        const finish = this.state.faq.every(item => {
            return item.userAnswer;
        });
        this.setState({allFilled: finish});
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

    changePage(value){
        const currentPage = this.state.currentPage;
        this.setState({currentPage: currentPage + value})
    }

    checkingTest(){
        this.setState({checking: true})
    }

    render() {
        return (
            <div className="test">
                <h4>
                    Реализуйте тест. Дан массив с вопросами и правильными ответами. Вопросы должны показываться по одному. Пользователь может двигаться по вопросам стрелками 'назад' и 'вперед'. После того, как пользователь ответит на все вопросы, должна появится кнопочка 'проверить ответы'. По нажатию на эту кнопочку нужно вывести все вопросы на экран, под вопросами должно быть следующее: 'ваш ответ такой-то, правильно' или 'ваш ответ такой-то, не правильно, правильный ответ такой-то'. Правильные ответы должны быть зеленого цвета, а неправильные - красного.
                </h4>
                <QuestionsList handleChange={this.handleChange.bind(this)}
                               finishTest={this.finishTest.bind(this)}
                               faq={this.state.faq}
                               currentQuestion={this.state.currentPage}
                               checking={this.state.checking}
                />
                <br/>
                {!this.state.checking&&
                    <Navigation currentPage={this.state.currentPage}
                                changePage={this.changePage.bind(this)}
                                maxPage={this.state.faq.length}
                    />
                }
                <br/>
                {!this.state.checking&&
                    this.state.allFilled&&
                    <button onClick={this.checkingTest.bind(this)}>
                        Сдать тест
                    </button>
                }
            </div>
        );
    }
}

export default MathematicsTest;
