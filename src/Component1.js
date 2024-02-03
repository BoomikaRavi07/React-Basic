import React, {useState} from "react";
 
function Component1(){
    const[user,setUser]=useState("Jesse Hall");
    return(
       <>
       <h1>{`hello ${user}!`}</h1>
       <Component2 user={user}/>
       </>
    );
}
function Component2({user}){
    return(
        <>
        <h1>Component 2</h1>
        <Component3 user={user}/>
        </>
    );
    }

function Component3({user}){
    return(
        <>
        <h1>Component 3</h1>
        <Component4 user={user}/>
        </>
    );
    }
 function Component4({user}){
     return(
        <>
        <h1>Component 4</h1>
        <Component5 user={user}/>
        </>
        );
        }
function Component5({user}){
        return(
        <>
        <h1>Component 5</h1>
        <Component5 user={user}/>
        </>
        );
        }
        
export default Component1;