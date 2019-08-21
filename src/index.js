import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';

function Square(props){
    return (
        <button className="square" onClick = {props.onClick}>
            {props.value}
        </button>
    );
}

class Board extends React.Component {
    constructor(props){
        super(props);
        this.state = {
            squares: [
                [null, null, null],
                [null, null, null],
                [null, null, null]
            ],
            opponent: false,
            /*squares: Array(3).fill([null, null, null]),*/
        };

        this.handleClick = this.handleClick.bind(this);
    }

    handleClick(i, j){
        const squares = this.state.squares.slice();
        if (this.calculateWinner(squares) || squares[i][j]) {
            return;
        }
        squares[i][j] = this.state.opponent ? 'X' : 'O';
        this.setState({
            squares: squares,
            opponent: !this.state.opponent,
        });
    }

    calculateWinner(squares) {
        const lines = [
            [[0,0], [0,1], [0,2]],
            [[1,0], [1,1], [1,2]],
            [[2,0], [2,1], [2,2]],
            [[0,0], [1,0], [2,0]],
            [[0,1], [1,1], [2,1]],
            [[0,2], [1,2], [2,2]],
            [[0,0], [1,1], [2,2]],
            [[0,2], [1,1], [2,0]],
        ];
        for (let i = 0; i < lines.length; i++) {
            const [[ai, aj], [bi, bj], [ci, cj]] = lines[i];
            if (squares[ai][aj] && squares[ai][aj] === squares[bi][bj] && squares[ai][aj] === squares[ci][cj]) {
                return squares[ai][aj];
            }
        }
        return null;
    }

    renderSquare(i, j) {
        return (
            <Square value={this.state.squares[i][j]}
                    onClick={() => this.handleClick(i, j)}
            />
        );
    }

    render() {
        const winner = this.calculateWinner(this.state.squares);
        let status;
        if (winner) {
            status = 'Победитель: ' + winner;
        } else {
            status = 'Следующий игрок: ' + (this.state.opponent ? 'X' : 'O');
        }

        return (
            <div>
                <div className="status">{status}</div>
                <div className="board-row">
                    {this.renderSquare(0, 0)}
                    {this.renderSquare(0, 1)}
                    {this.renderSquare(0, 2)}
                </div>
                <div className="board-row">
                    {this.renderSquare(1, 0)}
                    {this.renderSquare(1, 1)}
                    {this.renderSquare(1, 2)}
                </div>
                <div className="board-row">
                    {this.renderSquare(2, 0)}
                    {this.renderSquare(2, 1)}
                    {this.renderSquare(2, 2)}
                </div>
            </div>
        );
    }
}

class Game extends React.Component {
    render() {
        return (
            <div className="game">
                <div className="game-board">
                    <Board />
                </div>
                <div className="game-info">
                    <div>{/* status */}</div>
                    <ol>{/* TODO */}</ol>
                </div>
            </div>
        );
    }
}

// ========================================

ReactDOM.render(
    <Game />,
    document.getElementById('root')
);
