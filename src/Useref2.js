import { useState,useEffect,useRef } from "react";

function Useref2(){
    const [inputValue,setInputValue]=useState("");
    const previousInputValue = useRef("");
    useEffect(() => {
        previousInputValue.current = inputValue;
    },[inputValue]);

    return(
        <>
        <input  type="text"value={inputValue}onChange={(e) => setInputValue(e.target.value)}/>
         <h2>Current Value: {inputValue}</h2>
         <h2>Previous Value: {previousInputValue}</h2>
        </>
    );
}
export default Useref2;