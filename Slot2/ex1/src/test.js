let square = a => {
   return  a * a;
}
let sum = (a, b) => {
    return a + b;
}
let xinchao = (name, timeofday) =>{
    console.log(`Good ${timeofday} my fen ${name} `);
}
let goodday = () => {
    console.log(`chào bạn iu `);
}
let person = {
    name: "john",
    age: 30,
    greet: function() {
        console.log(`hello, my name is ${this.name} and i am from ${this.age} years old ` );
    }
};
goodday();
xinchao('copilot', 'morning');
xinchao('cong', 'morning');
console.log(sum (3, 4));
console.log(square(5));
console.log(square(10));
