import { useState } from 'react';

import './App.css';

function onSquareClick() {
    return (
        <div>"You clicked me."</div>
    )
}

function handleClick() {
    return (
        <div>"You clicked me."</div>
    )
}

function Square({ value, onSquareClick }) {
    return (
        <button
            className="square"
            onClick={onSquareClick}>
            {value}
        </button>
    )
}

export default function Board() {

    const [squares, setSquares] = useState(Array(9).fill(null));
    const [currentPlayer, setCurrentPlayer] = useState("X");
    const [winner, setWinner] = useState("nobody yet.");

    function handleClick(key){
        const nextSquares = squares.slice();
        nextSquares[key] = currentPlayer;
        setSquares(nextSquares);
        
        const winner = checkForWin(nextSquares);
        setWinner(winner ? winner : "nobody yet.");
        
        setCurrentPlayer(currentPlayer === "X" ? "O" : "X");
    }

    function checkForWin(squares){
        const lines = [
            [0, 1, 2], // top row
            [3, 4, 5], // middle row
            [6, 7, 8], // bottom row
            [0, 3, 6], // left column
            [1, 4, 7], // middle column
            [2, 5, 8], // right column
            [0, 4, 8], // diagonal top-left to bottom-right
            [2, 4, 6]  // diagonal top-right to bottom-left
        ];

        for (const [a, b, c] of lines) {
            if (squares[a] && squares[a] === squares[b] && squares[a] === squares[c]) {
                return squares[a]; // Return 'X' or 'O' (the winner)
            }
        }
        return null; //No winner yet

    }

    return (
        <div className="board">

            <p>Current Player is {currentPlayer}</p>
            <div>
                <Square
                    value={squares[0]}
                    onSquareClick={
                        () => handleClick(0)
                    } />

                <Square
                    value={squares[1]}
                    onSquareClick={
                        () => handleClick(1)
                    } />

                <Square
                    value={squares[2]}
                    onSquareClick={
                        () => handleClick(2)
                    } />

            </div>
            <div>
            <Square
                    value={squares[3]}
                    onSquareClick={
                        () => handleClick(3)
                    } />

                <Square
                    value={squares[4]}
                    onSquareClick={
                        () => handleClick(4)
                    } />

                <Square
                    value={squares[5]}
                    onSquareClick={
                        () => handleClick(5)
                    } />
            </div>
            <div>
            <Square
                    value={squares[6]}
                    onSquareClick={
                        () => handleClick(6)
                    } />

                <Square
                    value={squares[7]}
                    onSquareClick={
                        () => handleClick(7)
                    } />

                <Square
                    value={squares[8]}
                    onSquareClick={
                        () => handleClick(8)
                    } />
            </div>
            <p>Winner is {winner}</p>
        </div>
    )
}