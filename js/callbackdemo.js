function myfunction(name,callback){
    console.log("Welcome "+name);
    callback();
}
function calldemo()
{
    console.log("i am callback function");
}
myfunction("IIk",calldemo);