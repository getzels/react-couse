export function GameBoard() {
    const initialGameBoard = Array.from({ length: 3 }, () => Array(3).fill(null));

    return (
        <ol id="game-board">
            {
                initialGameBoard.map((row, index) =>
                    <li key={row + index}>
                        <ol>
                            {
                                row.map((column, index) =>
                                    <li key={column + index}>
                                        <button>{column}</button> {/*Player symbol*/}
                                    </li>)
                            }
                        </ol>
                    </li>)
            }
        </ol>
    )
}