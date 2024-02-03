import { useState } from "react";

function MyForm(){
    const [inputs,setInputs] = useState({});

    const handleChange  =(event) => {
        const name = event.target.name;
        const value = event.target.value;
        setInputs(values => ({...values,[name]:value}))
    }

    const handleSubmit = (event) => {
        event.preventDefault();
        console.log(inputs);;
    }

    return(
        <form onSubmit={handleSubmit}>
            <h4>Login details</h4>
        <lable>Enter your name:
            <input type="text" name="username" value={inputs.username || ""}
            onChange={handleChange}/>
        </lable><br></br>
        <label>Enter your age:
        <input type="text" name="age" value={inputs.age || ""}
        onChange={handleChange} />
        </label><br></br>
        <input type="submit"/>
    </form>
)
    
}
export default MyForm