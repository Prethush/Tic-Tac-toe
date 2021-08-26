import React from "react";
import Board from "./Board";
import calculateWinner from "../helperfunction";

class Game extends React.Component {
    constructor(props) {
        super();
            this.state = {
                history: [{
                    squares: Array(9).fill(null),
                }],
                xIsNext: true,
                stepNumber: 0
            }
        }
    

    handleClick = (i) => {
        const history = this.state.history.slice(0, this.state.stepNumber + 1);
        const current = history[history.length - 1];
        const squares = current.squares.slice();
        if(calculateWinner(squares) || squares[i]) {
            return;
        }
        squares[i] = this.state.xIsNext ? "X": "O"
        this.setState({
            history: history.concat([
                {
                    squares: squares
                }
            ]),
            xIsNext: !this.state.xIsNext,
            stepNumber: history.length
        });
    }

    jumpTo = (step) => {
        this.setState({
            stepNumber: step,
            xIsNext: (step % 2) === 0
        })
    }

    render() {
        const history = this.state.history;
        const current = history[this.state.stepNumber];
        const winner = calculateWinner(current.squares);

        const moves = history.map((step, move) => {
            const desc = move ? 
                "Go to move #" +move: "Go to game start";
                return (
                    <li key={move} className="bg-blue-500 my-3 text-center p-2 tetx-xl text-white rounded-md">
                        <button onClick={() => this.jumpTo(move)}>{desc}</button>
                    </li>
                )
        })
       
        let status;
        if(winner) {
            status = "Winner:" +winner;
        }else {
            status = "Next Player: " + (this.state.xIsNext? "X": "O");
        }
        return (
            <main className="bg-green-200 h-screen">
                    <h1 className="text-4xl text-center py-8 font-bold text-red-500">Tic Tac Toe Game</h1>
                    <div className="flex w-1/2 mx-auto justify-between my-12">
                        <div>
                            < Board 
                                squares={current.squares}
                                onClick={(i) => this.handleClick(i)}
                            />
                        </div>
                        <div>
                            <div className="text-2xl font-semibold mb-3">{status}</div>
                            <ol>{moves}</ol>
                    </div>
                    </div>
            </main>
            
            
        )
    }
}

export default Game;