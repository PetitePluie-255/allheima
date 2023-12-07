function getSum2(num3, num4) {
  let sum = 0;
  for (let i = num3; i <= num4; i++) {
    sum += i;
  }
  return sum;
}
console.log(getSum2(1, 100));
