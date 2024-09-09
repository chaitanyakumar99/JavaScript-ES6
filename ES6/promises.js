const myPromoise = new Promise((resolve, reject) => {
    const success = false;

    if (success) {
        resolve("The operation was sucessfully");
    } else {
        reject("The operation failed")
    }

})

myPromoise
    .then((message) => {
        console.log(message)
    })
    .catch((error) => {
        console.log(error)
    })