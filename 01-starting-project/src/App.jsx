import React, {useState} from "react";
import Header from "./component/header/Header";
import CoreConcept from "./component/coreConcept/CoreConcept";
import TabButton from "./component/tabButton/TabButton";
import {CORE_CONCEPTS, EXAMPLES} from "./data/data-with-examples";

function App() {
    const [selectedTab, setSelectedTab] = useState('components');

    function handleSelect(selectedButton) {
        console.log(selectedButton);
        setSelectedTab(selectedButton);
    }

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
                <section id="examples">
                    <h2>Examples</h2>
                    <menu>
                        <TabButton onSelect={() => handleSelect('components')}>Components</TabButton>
                        <TabButton onSelect={() => handleSelect('jsx')}>JSX</TabButton>
                        <TabButton onSelect={() => handleSelect('props')}>Props</TabButton>
                        <TabButton onSelect={() => handleSelect('state')}>State</TabButton>
                    </menu>
                    <div id="tab-content">
                        <h1>{EXAMPLES[selectedTab].title}</h1>
                        <p>{EXAMPLES[selectedTab].description}</p>
                        <pre>
                            <code>
                                {EXAMPLES[selectedTab].code}
                            </code>
                        </pre>
                    </div>
                </section>
            </main>
        </div>
  );
}

export default App;
