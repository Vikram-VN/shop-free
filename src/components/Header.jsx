import React from "react";

export const Header =(props) => {
console.log(props.counter)
    return (
        <header>
            <h1> {props.counter}</h1>
        </header>

    );
}
