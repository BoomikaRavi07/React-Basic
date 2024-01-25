import React from "react";

class Counter1 extends React.Component{
    constructor(props){
        super(props);
        this.state ={
            count:0
        }
    }
    handClick = () =>{
        this.setState({count:this.state.count+1})
    }
    render(){
        return(
            
        <div>
            Count value : {this.state.count}<br></br>
            <button onClick={this.handClick}>Increment</button>
        </div>
        )
    }
}
export default Counter1;