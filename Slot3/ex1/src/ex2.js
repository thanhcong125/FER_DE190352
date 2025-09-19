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
console.log(avg());