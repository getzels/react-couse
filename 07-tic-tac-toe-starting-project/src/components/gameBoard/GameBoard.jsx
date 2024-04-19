import {useState} from "react";

export function GameBoard() {
    const initialGameBoard = Array.from({ length: 3 }, () => Array(3).fill(null));
    const [gameBoard, setGameBoard] = useState(initialGameBoard);

    const handleGameBoardUpdate = (rowIndex, colIndex) => {
        setGameBoard(board => {
            const arrayCopy = [...board.map(innerArray => [...innerArray])];
            arrayCopy[rowIndex][colIndex] = "X";
            return arrayCopy;
        });
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
                                        <button onClick={() => handleGameBoardUpdate(rowIndex, colIndex)}>{column}</button> {/*Player symbol*/}
                                    </li>)
                            }
                        </ol>
                    </li>)
            }
        </ol>
    )
}