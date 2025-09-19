console.log("File is running");
const double = (x) => x * 2;
console.log(double(7)); 
const isEven = (num) => num % 2 === 0;
console.log(isEven(10)); 
console.log(isEven(7));
console.log('-----------------------------------------------------------------');
restparameterFunction = (a, b, ...rest) => {
  console.log(a);
  console.log(b);
  console.log(rest);
}

const sum = (...nums) => {
  return nums.reduce((acc, curr) => {
    const num = Number(curr);
    return isNaN(num) ? acc : acc + num;
  }, 0);
};

const avg = (...nums) => {
  let { total, count } = nums.reduce(
    (acc, curr) => {
      const num = Number(curr);
      if (!isNaN(num)) {
        acc.total += num;
        acc.count++;
      }
      return acc;
    },
    { total: 0, count: 0 }
  );

  if (count === 0) return 0;
  return Number((total / count).toFixed(2));
};


console.log(sum(1, 2, 3));        // 6
console.log(sum(1, "x", 4));      // 5
console.log(avg(1, 2, 3, 4));     // 2.5
console.log(avg());               // 0

const companies = [
  { name: "Company One", category: "Finance", start: 1981, end: 2004 },
  { name: "Company Two", category: "Retail", start: 1992, end: 2008 },
  { name: "Company Three", category: "Auto", start: 1999, end: 2007 },
  { name: "Company Four", category: "Retail", start: 1989, end: 2010 },
  { name: "Company Five", category: "Technology", start: 2009, end: 2014 },
  { name: "Company Six", category: "Finance", start: 1987, end: 2010 },
  { name: "Company Seven", category: "Auto", start: 1986, end: 1996 },
  { name: "Company Eight", category: "Technology", start: 2011, end: 2016 },
  { name: "Company Nine", category: "Retail", start: 1981, end: 1989 }
];

const ages = [33, 12, 20, 16, 5, 54, 21, 44, 61, 13, 15, 45, 25, 64, 32];

const person = {
  name: "Costas",
  address: {    street: "Lalaland 12"
  }
};


const {
  address: {
    street,
    city = "Unknown City"   // nếu city không tồn tại thì lấy mặc định
  }
} = person;

console.log(street); // Lalaland 12
console.log(city);   // Unknown City

const age = [33, 12, 20, 16];

const [first, , third = 0, ...restAges] = ages;

console.log(first);     // 33
console.log(third);     // 20
console.log(restAges);  // [16]
