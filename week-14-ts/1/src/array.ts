function filterMax(num: number[]) {
  let max = num[0];
  for (let i = 0; i < num.length; i++) {
    // console.log(num[i])
    if (max < num[i]) {
      max = num[i];
    }
  }
  return max;
}

let num = [-2, 45, 3, 34, 54];

console.log(filterMax(num));

function fe<T>(arr: T[]) {
  return arr[0];
}

console.log(fe<string> (["Bhawani", "Singh"]).toLowerCase())