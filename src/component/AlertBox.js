import React from "react";
import { Alert,Button } from "react-bootstrap";

class AlertBox extends React.Component{
    constructor(props,context){
        super(props,context);
        this.state={
            show:true
        };
        this.handleDismiss = this.handleDismiss.bind(this);
        this.handleShow = this.handleShow.bind(this);
    }
    handleDismiss(){
        this.setState({show:false})
    }
    handleShow(){
        this.setState({show:true})
    }
    render(){
        if(this.state.show){
            return(
                <>
                <div class="al">
                  <Alert bsStyle="danger" onDismiss={this.handleDismiss}>
                    <h4>Oops! You got an error</h4>
                    <p>
                        Change this and try again. This is Alert Box example in 
                    </p>
                    <p>
                        <Button onClick={this.handleDismiss}>Hide Alert</Button>
                    </p>
                  </Alert>
                  </div>
                </>
            )
        }
        return <Button onClick={this.handleShow}>ShowAlert</Button>;
    }
}
export default AlertBox;