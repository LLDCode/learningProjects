const promise = () => new Promise((success, failure) => {
    const promiseSuccess = true;
    
    setTimeout(() => {
        if(promiseSuccess) return success("It worked!");
        failure("You suckkkkk");
    }, 1000 * 4);

});

const accountability = async () => {
    console.log("doing a thing 2");
    try {
        const result = await promise();

        console.log("doing a thing 3");
        console.log(result);
    } catch(e) {
        console.error(e);
        console.log("doing a thing 5");
    }
}
console.log("doing a thing 1");

accountability();

console.log("doing a thing 4");