import React, {useState} from 'react'
import './App.css'
import Header from "./components/header/Header.jsx"
import {UserGroup} from "./components/userGroup/UserGroup.jsx";
import {Results} from "./components/results/Results.jsx";
import {calculateInvestmentResults} from "./util/investment.js";

function App() {
    const [formData , setFormData] = useState({
        initialInvestment: 1000,
        annualInvestment: 1200,
        expectedReturn: 6,
        duration: 10,
    });

    const [annualData, setAnnualData] = useState([{
        year: 0,
        interest: 0,
        valueEndOfYear: 0,
        annualInvestment: 0
    }]);

    function calculate() {
        setAnnualData(calculateInvestmentResults(formData));
    }

    return (
        <>
            <Header/>
            <UserGroup formData={formData} setFormData={setFormData}/>
            <Results annualData={annualData}/>
            <button onClick={calculate}>Calculate</button>
        </>
    )
}

export default App
