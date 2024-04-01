import React from "react";
import Header from "./component/header/Header";
import CoreConcept from "./component/coreConcept/CoreConcept";

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
