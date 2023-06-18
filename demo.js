/*
console.log(1);

setTimeout(() => {
    console.log(2);
}, 3000)

console.log(3);
*/

//============================
/*
console.log(1)

setTimeout(() =>{
    console.log(2);
    console.log(3)
}, 6000)
*/

//==========================
/*
let teachers = ['Setu', 'Mahir'];

function addNewTeacher(name) {
    setTimeout(function() {
        teachers.push(name);
        printNames();
    }, 2000);
}

function printNames() {
    setTimeout(function() {
        console.log(teachers);
    }, 1000);
}

addNewTeacher('Rijwan');
*/



//==========================
/*
let teachers = ['Setu', 'Mahir'];

function addNewTeacher(name) {
    setTimeout(function() {
        teachers.push(name);
        logR();
    }, 2000);
}

function printNames() {
    setTimeout(function() {
        console.log(teachers);
    }, 1000);
}

function logR() {
    setTimeout(function() {
        for (let i = 0; i < teachers.length; i++) {
            if (teachers[i].includes('r') || teachers[i].includes('R')) {
                console.log(teachers[i]) ;
            }
            
        }
    }, 1000);
}

addNewTeacher('Rijwan');
*/
//============================================

let teachers = ['Setu', 'Mahir'];

function addNewTeacher(name, fun) {    // function কে parameter হিসেবে pass করা হয়েছে
    setTimeout(function() {
        teachers.push(name);
        fun();
    }, 2000);
}

function printNames() {
    setTimeout(function() {
        console.log(teachers);
    }, 1000);
}

function logR() {
    setTimeout(function() {
        for (let i = 0; i < teachers.length; i++) {
            if (teachers[i].includes('r') || teachers[i].includes('R')) {
                console.log(teachers[i]) ;
            }
            
        }
    }, 1000);
}

addNewTeacher('Rijwan', printNames);   
// এখানে ২টি service আছে(printName ও logR)। addNewTeacher-এ যেটা call করা হবে সেটাই আসবে।
// printNames call করলে push করার পর পুরো teachers array টা আসবে
// logR call করলে sort করে r/R যুক্ত নামগুলো আসবে।

