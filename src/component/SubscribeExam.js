import React from 'react';

class SubscribeExam extends React.Component{
    constructor(props) {
        super(props);
        this.state={
            message:"Imarticus Learning"
        }
    }
    handleEvent =(event)=>{
         if(event.type === "mousemove"){
            this.setState({message: "Thanks For Sunscribe"});
        }
    }
    render () {
        return (
            <div className="container">
                <div className="text-center">
                    {this.state.message}
                </div>
                <div className="text-center">
                    <button className="style"
                    onMouseMove={this.handleEvent}>
                       Subscribe
                    </button>
                </div>
            </div>
        );
    }

    
}
export default SubscribeExam;