/**
 * Comparison
 * 1. bigger: >
 * 2. less : <
 * 3. equal: ==
 * 4. grater than or equal: >=
 * 5. less than or equal: <=
 * 6. not equal:!=
 * 7. and:&&
 * 8. or: ||
**/ 

console.log(5>10)
console.log(5<10)

console.log(10 == '10')
console.log(10 === '10')

console.log(10 !== '10')
console.log(10 !== '10')


// if condition
var mousePrice =1600;
if (mousePrice > 1000) {console.log('Could you give me a mouse?')}

// else conditon
const salary =50000;
const govtJob= true;
const isBCS =true;

if (salary > 55000 || govtJob==true) {console.log('patro lock kor')}
else{console.log('ei patro cholbe na, amar maiya beshi khai')}
if ((salary > 45000 && govtJob==true) ||isBCS==true) {console.log('maiyar 14ghusti raji')}


// multi level condition
const price =4000;
if (price >= 5000) {
    const discount = price * 10 / 100;
    const payTo = price - discount;
    console.log(payTo);
}
else if(price > 3000) {
    const discount =price * 5 /100;
    const payTo =price -discount;
    console.log(payTo)
}
else{
    console.log(price);
}


const age=50;
const foodPrice = 1000;
if (age <= 12) {console.log('you can eat free') }

else if(age >= 50) {
    const fdiscount=foodPrice*10/100;
    const payout=foodPrice-fdiscount;
    console.log(payout)
}

else if (age >=60) {
    const fdiscount=foodPrice*50/100;
    const payout =foodPrice-fdiscount;
    console.log(payout);
}

else{
    console.log(foodPrice)
}








