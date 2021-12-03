//Numbers

var integer_1 = 1.999999999;
    integer_2 = 1.999999999999999;
    integer_3 = 1.9999999999999999; //the 16th 9 kicks it over the limit and rounds up

const integer_4 = BigInt(1.9999999999999999);
const integer_5 = BigInt(1.9999999999999999999);
const integer_6 = BigInt(integer_5 - integer_4);

console.log(integer_1);
console.log(integer_2);
console.log(integer_3);
console.log(integer_4);
console.log(integer_5);
console.log(integer_6);

// hmmmm... Output
// 1.999999999
// 1.999999999999999
// 2
// 2n
// 2n
// 0n
