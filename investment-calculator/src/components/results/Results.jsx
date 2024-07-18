import {UserInput} from "../userInput/UserInput.jsx";
import {formatter} from "../../util/investment.js";

export function Results({annualData}) {
    return (
        <section>
            <table id="result">
                <thead>
                    <tr>
                        <th>Year</th>
                        <th>Interest</th>
                        <th>Value End Of Year</th>
                        <th>Annual Investment</th>
                    </tr>
                </thead>
                <tbody>
                {annualData.map(
                    (row) => {
                        return (
                            <tr key={row.year}>
                                <td>{row.year}</td>
                                <td>{formatter.format(row.interest)}</td>
                                <td>{row.valueEndOfYear}</td>
                                <td>{formatter.format(row.annualInvestment)}</td>
                            </tr>
                        );
                    }
                )
                }
                </tbody>
            </table>
        </section>
    )
}