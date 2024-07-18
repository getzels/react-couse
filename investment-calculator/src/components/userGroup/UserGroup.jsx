import {UserInput} from "../userInput/UserInput.jsx";

export function UserGroup({formData, setFormData}) {

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