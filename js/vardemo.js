let i=10;
function myfunc()
{
    let i=7;
    let k=20;
    console.log("k="+k);
    console.log("i="+i);
    i=15;

}
{
    let j=45;
    console.log("j="+j);
    //console.log("k in global scope="+k);
    
}
myfunc();
console.log("i in global scope="+i);
