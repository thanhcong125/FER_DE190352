const ages = [33, 12, 20, 16, 8, 54, 21, 44, 61, 13, 15, 45, 25, 64, 32];

const [first, , third = 0, ...restAges] = ages;

const isEven = (first) => first % 2 === 0;
filteredAges = restAges.filter(isEven);

console.log(filteredAges);   // [12, 20, 16]

console.log(isEven(first));  // false (33 không chia hết cho 2)
console.log(first);          // 33
console.log(third);          // 20
console.log(restAges);       // [16]
