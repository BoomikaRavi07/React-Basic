import React from "react";
import { useState } from "react";

export default function Timer1(){
    const [seconds, setSeconds] = useState(0)

    const startTimer = () => {
        setInterval(() => {
            setSeconds(seconds => seconds + 1)
        }, 1000);
    }

    const stopTimer = () => {
        clearInterval(setSeconds(0))
        document.querySelector('#counter').remove()
    }

    return (
        <div className="counter-container">
            <button className="start-button" onClick={startTimer}>start</button>
            <button className="stop-button" onClick={stopTimer}>stop</button>
            <p id="counter">{seconds}</p>
        </div>
    )
}
