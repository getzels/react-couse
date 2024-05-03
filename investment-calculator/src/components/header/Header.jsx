import logImg from "../assets/investment-calculator-logo.png"

export default function Header() {
    return (
        <header id="header">
            <img src={logImg} alt="investment-calculator-log"/>
            <h1>Investment Calculator</h1>
        </header>
    )
}