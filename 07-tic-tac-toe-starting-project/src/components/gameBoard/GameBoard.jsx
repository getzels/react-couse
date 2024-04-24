import {useState} from "react";

export function GameBoard({handlePlayerTurn, gameBoard}) {


    return (
        <ol id="game-board">
            {
                gameBoard.map((row, rowIndex) =>
                    <li key={row + rowIndex}>
                        <ol>
                            {
                                row.map((column, colIndex) =>
                                    <li key={column + colIndex}>
                                        <button
                                            onClick={() => handlePlayerTurn(rowIndex, colIndex)}
                                        disabled={column}>{column}</button> {/*Player symbol*/}
                                    </li>)
                            }
                        </ol>
                    </li>)
            }
        </ol>
    )
}