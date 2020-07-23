// #include<stdio.h>
//     var a, b;
// {
//       var i,p=1;
//       for(i=1;i<=b;i++)
//             p*=a;
//       return p;
// }
// {
//       var  x,n,p;
//       clrscr();
//       printf("\nEnter the Value of 'x' : ");
//       scanf("%d",x);
//       printf("\nEnter the Value of 'n' : ");
//       scanf("%d",n);
//       p=power(x,n);
//       printf("\nPower : %d",p);
//       getch();
// }
 //question no 2

function leapyear(){
  var year = document.getElementById("year").value
      
          if ( year % 4 == 0)   {
           alert("yes it is leap year") 
             }
           else{
            alert("it is not leap year")

           }
          }            
       
    
        

          //}
         
            //question 2
//         Calculate traingle area
          var  a=11;
          var  b=9;
          var  c=9;

          var triarea = function(a,b,c) {
          var s = (a+b+c)/2;
          var p = Math.sqrt(s*(s-a)*(s-b)*(s-c));
          return p;
        }
        
        document.write(triarea(11,9,9));
            //MARKSHEET   OF SUBJECT

            var subject1=document.getElementById("subject1");
            var Marks1=document.getElementById("Marks1"); 
            var subject2=document.getElementById("subject2");
             var Marks2=document.getElementById("Marks2")
            var subject3=document.getElementById("subject3");
            var Marks3=document.getElementById("Marks3")
             function obtain(id="obtain"){   
             var obtain = Marks1+Marks2+Marks3;
              
            }         
            obtainspan.innerHTML=obtain;


                      
                
              function myFunction() {
                var str = "Hello world, welcome to the universe.";
                var n = str.indexOf("s", );
                document.getElementById("demo").innerHTML = n;
              }

            var string = "heeehilloo woruld";
            var vowel = ["a", "e", "i", "o", "u"];
            
             function name() {
                var i;
                for ( i = 0; i < vowel.length; i++) {
                    var secondLoop = string.length;
                    for ( j = 0; j < secondLoop; j++) {
                        if (vowel[i] == string.charAt(j)) {
                            string = string.slice(0, j).concat(string.slice(j + 1, secondLoop));
                        }
            
                    }
                }
            }
            
            string.character();
            alert(string);



            //question no  7
            function findOccurrences() {
                var str = "Pleass read   this applcation and gave me gratui ty";
                var count = 0;
                let haveSeenVowel = false;
              
                 for (const letter of str.toLowerCase()) {
                  switch (letter) {
                    case 'a':
                    case 'e':
                    case 'i':
                    case 'o':
                    case 'u':
                      {
                        if (haveSeenVowel) {
                          count++;
                          haveSeenVowel = true;
                        } else {
                          haveSeenVowel = true;
                        }
                        break;
                      }
                    default:
                      haveSeenVowel = false
                  }
                }
              
                return count
              }
              
              console.log(findOccurrences());
              


            function LengthConverter(valNum) {
              document.getElementById("outputMeters").innerHTML=valNum*1000;
              
            }
            function Lengthchanger(valNum) {
              document.getElementById("outputfeets").innerHTML=valNum*3280.8;
            }
            function kilometertoinch(valNum) {
              document.getElementById("outputinch").innerHTML=valNum*39370;
            }

            function kilometertocenti(valNum) {
              document.getElementById("outputcenti").innerHTML=valNum*100000;
            }
           // questuion no 9


              var  count  = 1;
              var  working_hours, over_time;
              var  over_time_pay ;

    while(count<=10)
    {
        alert("Enter the working hours of employee no %d: "+ count);
       prompt("%d"& working_hours);
        if(working_hours>40)
        {
            over_time = working_hours - 40;
            over_time_pay = over_time * 12.00;
            alert("Employee No %d overtime pay is %.2f\n"+ count, over_time_pay);
        }
        else {
            alert("You have to work for more than 40 hours to get over time pay\n");

        count++;
    }
  }

  
     //question no 10

  var a,b,c,d,e,f,g;
 
     a= prompt("Enter amount to withdraw")
     b=Math.floor(a/5000);
    
     
     c=Math.floor(a%5000/1000);
     
     d=Math.floor(a%1000/500)
     
     e=Math.floor(a%500/100)
     
     f=Math.floor(a%100/50)
      
     g=Math.floor(a%50/10)
   
alert("you will have"+e+" one hundred rupee notes"+f+ " fifty rupee notes"+g + " ten rupee notes")
