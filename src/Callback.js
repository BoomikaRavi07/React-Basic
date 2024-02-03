function greet(name,myFunction){
    console.log('Hello world');

    myFunction(name);
}

//callback function 
function sayName(name){
    console.log('Hello' + '' + name);
}

setTimeout(greet,2000,'John',sayName);