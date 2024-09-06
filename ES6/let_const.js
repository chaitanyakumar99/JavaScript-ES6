// //let const provides block-level-scope variables declared 
// //inside a block cannot be accessed from outside the block

//block scope

{
    let x=2;
    console.log(x)
}

//function scope

function hi(){
    const a=25
    console.log(a)
}
hi()

// Global scope

let x=2;
let y=20;

function text(){

    console.log(x);
    console.log(y);

}

text()