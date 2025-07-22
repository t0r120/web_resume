/* let names = ['Juan','Pepe', 'Victoria','Pancracia','Ramon'];
const savedNames = names.slice(0, names.length);
const deletedNames = names.splice(0,3);

console.log(`Original names: ${savedNames}`); 
console.log(`Deleted names: ${deletedNames}`);
console.log(`Changed name: ${names.splice(0,3)}`);


let greeting = " Hello!  ";
const trimmed = greeting.trim()
for(let i = 0; i<names.length; i++){

    console.log(`${trimmed} ${names[i]}`)
}


function superPower(power = "Super strength"){
    return "Pum! my power is " + power;

}

const superName = (superName = "?") => "My name is " + superName;

const add = (a,b) => {
    if(a >= 0 && b > 0){
        return a + b;
    }
    return false;
} 

console.log(superPower("Fly"));
console.log(superName("Clarck Kent"));
console.log(add(-1, 10));


const capitalize = (string) =>{
     let capitalized =  string.charAt(0).toUpperCase()
     const word = string.slice(1)
     return capitalized + word
    }

const lastLetter = string => {

    return string[string.length - 1]
}

console.log(lastLetter("hola"));
*/


alert("Welcome");




