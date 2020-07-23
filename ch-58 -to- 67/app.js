 var main=document.getElementById("main-content")

console.log(main)

var rend=document.getElementById("rend")
var R=document.getElementsByClassName("render")
rend.innerHTML=rend.nodeValue;
console.log(R)
     

    
    
    var firstN = document.getElementById("firstN");
    var lastN=document.getElementById("lastN");
     var emailID=document.getElementById("emailID");
         document.getElementById("myButton").addEventListener("click", function() {
       

    
       document.getElementById("last").innerHTML=lastN.value
       document.getElementById("first").innerHTML=firstN.value

      
        document.getElementById("email").innerHTML=emailID.value
   

});
  

   var form  = document.getElementById("form-content")
    var f =form.childNodes;    
   
    console.log(f)
   
 var lastNode=document.getElementById("lastN")
 var ls=(lastNode.nodeType)
 console.log(ls)


var lastN=document.getElementById("main-content")
console.log(lastN.childNodes[1])
var lastN=document.getElementById("main-content")
console.log(lastN.childNodes[0])
var lastN=document.getElementById("main-content")
console.log(lastN.childNodes[2])


var  Ar= document.getElementById("email")
console.log(Ar.nodeType)

var  Ar= document.getElementById("email")
console.log(Ar.childNodes[0].nodeType)

  