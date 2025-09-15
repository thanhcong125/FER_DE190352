// forEach, for, map
let arrint = [1,2,4,3,5,6];
arrint.forEach(item => console.log(item));
console.log(`----------------------`);
for (let i = 0; i < arrint.length; i++) {
    console.log(arrint[i]);
};
console.log(`----------------------`);
arrint.map(item => console.log(item));

// filter
console.log(`----------------------`);
arrint.filter(item => item % 2 == 0).forEach(item => console.log(item));

//
let peopleArr = [
    {ID: 1 , name: 'zhangsan', age: 18},
    {ID: 2, name: 'lisi', age: 20},
    {ID: 3, name: 'bingchling', age: 16},
    {ID: 4, name: 'blingbling', age: 22},

]
for (let i = 0; i < peopleArr.length; i++) {
    console.log(peopleArr[i]);
};
console.log(`after filter`);
peopleArr.filter(item => item.age > 20).forEach(item => console.log(item));