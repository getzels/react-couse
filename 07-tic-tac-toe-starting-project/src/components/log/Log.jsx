export default function ({gameTurns}) {
    return (
        <ol id="log">
            {gameTurns.map((turn, turnIndex) =>
                <li key={turnIndex}>{turn.player} Selected {turn.square.row},{turn.square.column}</li>
            )}
        </ol>
    )
}