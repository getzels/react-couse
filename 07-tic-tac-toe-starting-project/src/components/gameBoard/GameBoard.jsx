import {useState} from "react";

export function GameBoard({handlePlayerTurn, gameTurns}) {
    const gameBoard = Array.from({ length: 3 }, () => Array(3).fill(null));

    for (const turn of gameTurns) {
        const {square, player} = turn;
        const {row, column} = square;
        gameBoard[row][column] = player;
    }

    return (
        <ol id="game-board">
            {
                gameBoard.map((row, rowIndex) =>
                    <li key={row + rowIndex}>
                        <ol>
                            {
                                row.map((column, colIndex) =>
                                    <li key={column + colIndex}>
                                        <button onClick={() => handlePlayerTurn(rowIndex, colIndex)}>{column}</button> {/*Player symbol*/}
                                    </li>)
                            }
                        </ol>
                    </li>)
            }
        </ol>
    )
}