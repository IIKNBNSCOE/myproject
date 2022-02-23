async function myfunction()
{
    console.log("This is asynchronous function");
    return Promise.resolve("resolved");
}
ff=myfunction();
ff.then(function(res){
    console.log(res);
})