// question no 1
// var email= document.getElementById("email")
// var passw= document.getElementById("passw")
// var dispHeading=document.getElementById("disp");
// dispHeading= email;

    function submit(){

      var emailID = document.getElementById("emailID");

     

var PasswID=document.getElementById("PasswID");

document.getElementById("myButton").addEventListener("click")
 

 document.getElementById("email").innerHTML=emailID.value
   document.getElementById("Passw").innerHTML=PasswID.value
  
} 
  //dispHeading.innerHTML="disp"


// var errorElement =document.getElementById('error');
// form.addEventListener("submit",(e) => {
//     let messages =[]
//     if (name.value ===''|| name.value===null ){
//         messages.push('Name is required')
//     }
//     if (password.value.length<=6){
//         messages.push("password must be longer than 6 characters")
//     }
//     if (password.value.length>=6){
//         messages.push("password must be longer than 6 characters")
//     }
//     if (messages.length >0){
//     e.preventdefault() 
//         errorElement.innerHTML=messages.join(',')
//     }
//     var data= email + passw;
// })
//     var val= e.parentNode.firstChild.nodeValue
//    var editvalue =prompt("Enter updated value",val)
//    e.parentNode.firstChild.nodeValue=editvalue





  
 
 //question no 2 
 function readMore(){
  var text= "All of the tests shown above, and more besides, can be incorporated into a single regular expression test.A regular expression expresses a pattern that in this case, the users entry must match in order to validate. If you're familiar with the wildcard operator,  which stands for any combination of characters of any length  thats the general idea. But regular expressions go far beyond the wildcard operator."
  var pera= document.getElementById("pera")
  pera.innerHTML=text
 }



//question no 3

function addRow(tableID) {

  var table = document.getElementById(tableID);

  var rowCount = table.rows.length;
  var row = table.insertRow(rowCount);

  var cell1 = row.insertCell(0);
  var element1 = document.createElement("input");
  element1.type = "checkbox";
  element1.name="chkbox[]";
  cell1.appendChild(element1);

  var cell2 = row.insertCell(1);
  cell2.innerHTML = rowCount + 1;

  var cell3 = row.insertCell(2);
  var element2 = document.createElement("input");
  element2.type = "text";
  element2.name = "txtbox[]";
  cell3.appendChild(element2);


}

function deleteRow(tableID) {
  try {
  var table = document.getElementById(tableID);
  var rowCount = table.rows.length;

  for(var i=0; i<rowCount; i++) {
    var row = table.rows[i];
    var chkbox = row.cells[0].childNodes[0];
    if(null != chkbox && true == chkbox.checked) {
      table.deleteRow(i);
      rowCount--;
      i--;
    }


  }
  }catch(e) {
    alert(e);
  }
}





//  function from()  {
//    var label = document.getElementById("Name");
//    lb=label.appendChild.nodeValue
//    console.log(lb)
//      //     document.getElementById("1record").innerHTML=Name.value
  //  alert("Name.value")
     
    //  var tdText = document.createTextNode(Name.value)
    
 
 
//}


// function log(e){
  
//   var nam= document.getElementById("Name");
   

//   console.log(nam.Node_TEXT)
// }

// function deleterecord0() { 
//   document.getElementById("row1").remove(); 
// } 
// function deleterecord1() { 
//   document.getElementById("row2").remove(); 
// } 
// function deleterecord2() { 
//   document.getElementById("row3").remove(); 
// } 
// function deleterecord3() { 
//    document.getElementById("row4").remove(); 
// } 
// function deleterecord4() { 
//    document.getElementById("row5").remove(); 
// } 
// function deleterecord5() { 
//   document.getElementById("row6").remove(); 
// } 
// function deleterecord6() { 
//   document.getElementById("row7").remove(); 
// } 
// function deleterecord7() { 
//   document.getElementById("row8").remove(); 
// } 






  