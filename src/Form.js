import { useState } from "react";

function Form(){
    const [myCar,setMycar] = useState("Volvo");
    const [textarea,setTextArea] = useState("Content")

    const handleChange = (event) => {
        setMycar(event.target.value)
    }

    const handleArea = (event) => {
        setTextArea(event.target.value)
    }

    return (
        <form onSubmit={handleSubmit}>
            <select value={myCar} onChange={handleChange}>
            <option value="Ford">Ford</option> 
            <option value="Volvo">Volvo</option> 
            <option value="Fiat">Fiat</option> 
            </select><br></br>
            <textarea value={textarea} onChange={handleArea}/>
            <input type="submit"/>
           </form>
    )
}
export default Form