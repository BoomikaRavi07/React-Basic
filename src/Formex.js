import React, { useState } from "react";

function Formex(){
    const[name,setName] = useState("");
    const[age,setAge] = useState(0);

    const handleSubmit = (event) => {
        event.preventDefault();
        alert(`The name you entered was: ${name}`);
    }

    return(
        <form onSubmit={handleSubmit}>
            <lable>Enter your name:
                <input type="text"value={name}
                onChange={(e) => setName(e.target.value)}/>
            </lable><br></br>
            <label>The Entered age:
            <input type="text" value={age}
            onChange={(e) => setAge(e.target.value)} />
            </label>
            <h1>Name:{name}</h1>
            <input type="submit"/>
        </form>
    )
}
export default Formex;