import React, { useState } from "react";

function Counter(){
    const [count,setcount] = useState(0);
    const [name,setname] = useState('Boomika')

    const handleClick = () =>{
        setcount(count + 1);
        setname('Ashwini')
    }

    return (
        <div>
        <p>Count:{count}</p>
        <p>Name:{name}</p>
        <button onClick={handleClick}>Increment</button>
    </div>
    );
}
export default Counter