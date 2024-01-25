import React, { Component } from "react";

class Header extends Component{
    constructor(props){
        super(props);
        this.state = {favoritecolor: "black"};
    }
      shouldComponentUpdate(){
        return true;
      }
      getSnapshotBeforeUpdate(prevProps,prevState){
        document.getElementById("div1").innerHTML =
        "Before the update, the favorite was " + prevState.favoritecolor;
      }
      componentDidUpdate(){
        document.getElementById("div2").innerHTML =
        "The updated favorite is " + this.state.favoritecolor;
      }
      changeColor = () => {
        this.setState({favoritecolor: "red"});
      }
    render(){
        return(
            <div>
            <h1>My favorite Color is {this.state.favoritecolor}</h1>
            <button type="button" onClick={this.changeColor}>Change Color</button>
            <div id="div1"></div>
            <div id="div2"></div>
            </div>
        );
    }
}
export default Header;