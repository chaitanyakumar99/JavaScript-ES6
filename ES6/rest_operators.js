//rest operator:-The rest operator in JavaScript (...) is used to collect multiple elements
// or properties into a single array or object. 

function grd(firstname,...othernames){

    console.log(`"Hello," ${firstname}`)
    console.log(`"Hello," ${othernames.join(" , ")}`)

}

grd("arun","varma","kumar","ajith")