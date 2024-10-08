//loose comparison
console.log(0 == false); // true
console.log(1 == true); // true
console.log('' == false); // true

//strict comparison
console.log(0 === 0); // false, karena 0 adalah number dan false adalah boolean
console.log(1 === true); // false, karena 1 adalah number dan true adalah boolean
console.log('' === false); // false, karena '' adalah string dan false adalah boolean