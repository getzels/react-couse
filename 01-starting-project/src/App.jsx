import {CORE_CONCEPTS} from "./data/data";
import React from "react";

const reactDescriptions = ['Fundamentals', 'Core', 'Crucial'];
function genRandomNumber(max) {
    return Math.floor(Math.random() * (max + 1));
}


function Header() {

    const description = reactDescriptions[genRandomNumber(2)];
    return (
        <header>
            <img src="src/assets/react-core-concepts.png" alt="Stylized atom"/>
            <h1>React Essentials</h1>
            <p>
                {description} React concepts you will need for almost any app you are
                going to build!
            </p>
        </header>);
}


function CoreConcept(props) {
    return (
        CORE_CONCEPTS.map((concept, index) =>
        <li key={`${concept.title}-${index}`}>
            <img src={concept.image} alt={concept.title}/>
            <h3>{concept.title}</h3>
            <p>{concept.description}</p>
        </li>
        )
    );
}

function App() {
    return (
        <div>
            <Header></Header>
            <main>
                <h2>Time to get started!</h2>
                <section id="core-concepts">
                    <h2>Core concepts</h2>
                    <ul>
                        <CoreConcept />
                    </ul>
                </section>
                <section></section>
            </main>
        </div>
  );
}

export default App;
