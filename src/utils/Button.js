import React from "react";
import './Button.css'
export default function Button(props) {
    return (
        <div>
            <button className={props.className} onClick={props.clickHandler}> {props.name}</button>
        </div>
    )
};