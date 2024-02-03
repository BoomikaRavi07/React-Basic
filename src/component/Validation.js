import React,{useState} from "react";

import "./Style.css";

function Validation() {
    const [errorMessage, setErrorMessages] = useState({});
    const [isSubmitted, setSubmitted] = useState(false);

    const database = [
        {
            username: "user1",
            password: "pass1"
        },
        {
            username: "user2",
            password: "pass2"
        }
    ];

    const error = {
        uname: "invalid username",
        pass: "Invalid password"
    };

    const handleSubmit = (event) => {
        event.preventDefault();
        var { uname, pass } = document.forms[0];

        const userData = database.find((user) => user.username === uname.value);

        if (userData) {
            if (userData.password !== pass.value){
                setErrorMessages({name: "pass",message: error.pass});
            }
            else{
                setSubmitted(true);
            }
        }
            else{
                setErrorMessages({ name: "uname", message: error.uname});
            }
        };
        
        const renderErrorMessage = (name) =>
        name === errorMessage.name && (
            <div className="error">{errorMessage.message}</div>
        );

        const renderForm = (
            <div className="form">
                <form onSubmit={handleSubmit}>
                    <div className="input-container">
                        <label>Username</label>
                        <input type="text" name="uname" required/>
                        {renderErrorMessage("uname")}
                    </div>
                    <div className="input-container">
                        <label>Password</label>
                        <input type="text" name="pass" required/>
                        {renderErrorMessage("pass")}
                    </div>
                    <div className="button-container">
                        <input type="submit"/>
                    </div>
                </form>
            </div>
        );

        return(
            <div className="app">
                <div className="login-form">
                <div className="title">Sign In</div>
                {isSubmitted ? <div>User is Successfully logged in</div> :renderForm}
            </div>
            </div>
        );
    }

    export default Validation
