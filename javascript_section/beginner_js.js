//Numbers

var integer_1 = 1.999999999;
    integer_2 = 1.999999999999999;
    integer_3 = 1.9999999999999999; //the 16th 9 kicks it over the limit and rounds up

const   integer_4 = BigInt(1.9999999999999999),
        integer_5 = BigInt(1.9999999999999999999),
        integer_6 = BigInt(integer_5 - integer_4);

console.log(integer_1);
console.log(integer_2);
console.log(integer_3);
console.log(integer_4);
console.log(integer_5);
console.log(integer_6);

// hmmmm... Output:
// 1.999999999
// 1.999999999999999
// 2
// 2n
// 2n
// 0n

//class currently has us learning about variables by coding in the browser console

//note how the switch keeps executing after a case it met until a break is encountered
const day = 2;
console.log('here we DO NOT have breaks');
switch(day){
    case 1:
        console.log('you got 1');
    case 2:
        console.log('you got 2');
    case 3:
        console.log('you got 3');
    case 4:
        console.log('you got 4');
    case 5:
        console.log('you got 5');
}
//now with breaks
console.log('here we DO have breaks');
switch(day){
    case 1:
        console.log('you got 1');
        break;
    case 2:
        console.log('you got 2');
        break;
    case 3:
        console.log('you got 3');
        break;
    case 4:
        console.log('you got 4');
        break;
    case 5:
        console.log('you got 5');
        break;
}