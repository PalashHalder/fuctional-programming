// Functional Programming
    // Function is a value
    // value হিসেবে int, String, boolean, অন্য একটি functionও pass করতে পারি।


function Kayes(value) {
   //console.log({value}); 
   value();
}

// Kayes(100);             // int
// Kayes("Imrul Kayes");   // String
// Kayes(true);            // boolean
Kayes(function () {console.log("Hello Palash");})


//==============================
function Kayes(value){
   //return 100
   //return "Hello"
   //return false
   return function () {console.log("I am passed");}
}

const value = Kayes();
value


function Kayes(anothervalue){
   //return 100
   //return "Hello"
   //return false
   return function () {console.log("I am passed");}
}

const anothervalue = Kayes();
anothervalue();



// Object:
  // 1. Object knows sth- Variable
  // 2. Object does sth - Method

  const arr = [1, 2, 3, 4, 5, 6, 7, 8]

  arr.map(function () {
   
  })



