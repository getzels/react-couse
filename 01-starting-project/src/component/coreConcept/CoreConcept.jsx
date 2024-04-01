import {CORE_CONCEPTS} from "../../data/data";
import "./CoreConcept.css"

export default function CoreConcept() {
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