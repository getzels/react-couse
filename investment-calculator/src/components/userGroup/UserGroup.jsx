import {UserInput} from "../userInput/UserInput.jsx";
import {useState} from "react";

export function UserGroup() {
    const [formData , setFormData] = useState({
        initialInvestment: 1000,
        annualInvestment: 1200,
        expectedReturn: 6,
        duration: 10,
    });

    const options = new Map([
        ['key1', 'value1'],
        ['key2', 'value2'],
        ['key3', 'value3']
    ]);

    function handleFormData(fieldIdentifier, newValue) {
        setFormData(currentForm => {
            return {
                ...currentForm,
                [fieldIdentifier]: newValue
            };
        });
    }

    return (
        <section id="user-input" >
            <div className="input-group">
                <UserInput type="number"
                           label="Initial Invesment"
                           value={formData.initialInvestment}
                           onChange={(event) => handleFormData("initialInvestment", event.target.value)}
                           required
                />
                <UserInput type="number"
                           label="Anual Invesment"
                           value={formData.annualInvestment}
                           onChange={(event) => handleFormData("annualInvestment", event.target.value)}
                           required/>
            </div>
            <div className="input-group">
                <UserInput
                    type="number"
                    label="Expected return"
                    value={formData.expectedReturn}
                    onChange={(event) => handleFormData("expectedReturn", event.target.value)}
                    required/>
                <UserInput
                    type="number"
                    label="Total Duration"
                    value={formData.duration}
                    onChange={(event) => handleFormData("duration", event.target.value)}
                    required/>
            </div>
        </section>
    )
}