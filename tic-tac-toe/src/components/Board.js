import React from "react";
import Square from "./Square";


class Board extends React.Component {

   
    renderSquare = (i) => {
        return < Square value={this.props.squares[i]} onClick={() => this.props.onClick(i)}/>
    }

    

    render() {
        return (
            <div className="flex flex-col items-center">
                {/* first row */}
                <div className="flex">
                    {this.renderSquare(0)}
                    {this.renderSquare(1)}
                    {this.renderSquare(2)}
                </div>

                {/* second row */}
                <div className="flex">
                    {this.renderSquare(3)}
                    {this.renderSquare(4)}
                    {this.renderSquare(5)}
                </div>

                {/* third row */}
                <div className="flex">
                    {this.renderSquare(6)}
                    {this.renderSquare(7)}
                    {this.renderSquare(8)}
                </div>
            </div>
        )
    }
}

export default Board;