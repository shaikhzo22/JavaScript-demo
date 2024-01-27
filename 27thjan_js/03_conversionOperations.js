let score ="123"

//console.log(typeof score);

let valueNumber = Number(score);
// typecasting means converting one datatype into another datatype
console.log(typeof(valueNumber));
console.log(valueNumber);// output is NaN

//"22"=> 22
//"123abc " => NaN
// true =>1; false=>0

let someNumber ="Zobiya"

let stringNumber = String(someNumber)
console.log(stringNumber);
//console.log(typeof(someNumber));
// no pooint of typecasting string var to string var again

/****operations */
let value =3;
let negValue = -value
//console.log(negValue);

/* console.log(2+2);
console.log(2-2);
console.log(2*2);
console.log(2/2);
console.log(2**2);
console.log(2%2); */

let str1 ="zobiya"
let str2 ="shaikh"
let fullName=str1+" "+str2
console.log(fullName);

// console.log("1" +2);
// console.log("1"+2+2+"5");
// console.log("1"+(2+2)+"5");

console.log((3+4)*5%3);
console.log((+true));
console.log(+"");

let num1, num2, num3
// num1=num2=num3=2+2
num1 = num2= num3=(3+4)*5%3
// console.table([num1,num2,num3])

let gameCounter =100
++ gameCounter// pre increment
gameCounter ++; // post increment 
console.log(gameCounter)

