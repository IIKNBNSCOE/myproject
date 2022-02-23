//Promise, Promise chaining using then,catch and finally
let n=5;
new Promise(function myfun(resolve,reject)
{
    if(n>0)
    resolve("positive number");
    else
    reject("negative number");

}).then(function(result)
{
  console.log("Number is "+result) ;
}).catch(function(err)
{
    console.log("Number is "+err) ;

}).finally(function()
{
    console.log("Finally always executes");
})
