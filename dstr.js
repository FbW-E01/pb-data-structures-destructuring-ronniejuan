// # Destructuring

// **Instructions**
// #### 1. Array Destructuring
// * Declare the variables `fruit`, `vegetable`, `food`.
//  Assign the following values to the variables respectively: "banana", "cucumber", "bread", "cakes", "pizza" (assign the "bread", "cakes" and "pizza" to `food`)
// . Use array destructuring to complete this task.


// let fruit =["banana"]
// let vegetable=["cucumber"]
// let food=["bread", "cakes", "pizza"]
// const [ fruit, vegetable, food]= now;

let fruit,vegetable,food;
[fruit,vegetable,...food] = ["banana","cucumber","bread", "cakes", "pizza"]
console.log(fruit);
console.log(vegetable);
console.log(food);



// #### 2.Object Destructuring
// * Create an object which contains a few key value pairs of human names and halloween costumes e.g. 
// `fran: "witch"`. Assign each value to a variable. Print out the values.

const names = {
    Mijael:"Gorvachow",
    Adolfo:["Hitler","Hund"],
    Agusto:"Pinochet",
}   
let {Mijael, Adolfo,Agusto} = names // 3 variablers with the same name of the object.
console.log(Mijael)
console.log(Adolfo[1])
console.log(Agusto)

// #### 3. Parameters: Object Destructuring 
// * Create an object with band/musician details e.g.
//  name of the band/musician, greatest hit, nationality, genre etc. 
// * Then, create a function to print all of the band/musician's data. 
// * Example
// ```javascript
// `Regina Spektor is a American-Russian singer/songwriter and pianist. The musician sings indie-pop and their greatest hit is "Us"`.
// ```

const music={
    Author:"Steve Reich",
    Album:"Music for 18 Musicians",
    Year: 1981,
    Genre:"Clasic/Minimalism",
    RecordIn:"New York",
    Duration:"247min"
}


function infoMusic({Author,Album, Year, Genre, RecordIn, Duration}){
console.log(`${Author} in ${Year} made an album call ${Album} recorded in ${RecordIn} from the genre ${Genre} with a Duration of ${Duration}`)
}

infoMusic(music);
