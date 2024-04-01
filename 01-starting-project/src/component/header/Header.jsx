import React from "react";
import conceptsImg from "../../assets/react-core-concepts.png";
import "./Header.css";

const reactDescriptions = ['Fundamentals', 'Core', 'Crucial'];

function genRandomNumber(max) {
    return Math.floor(Math.random() * (max + 1));
}

export default function Header() {

    const description = reactDescriptions[genRandomNumber(2)];
    return (
        <header>
            <img src={conceptsImg} alt="Stylized atom"/>
            <h1>React Essentials</h1>
            <p>
                {description} React concepts you will need for almost any app you are
                going to build!
            </p>
        </header>);
}