 /* String Reverse*/
 var s="hello how are you"
 var j="";
 
 for(var k=s.length-1;k>=0;k--)
 {
     j=j+s[k]
 }
 console.log(j);
 var d=document.querySelector("#name");
 d.innerHTML=`<h1>${j}</h1>`;