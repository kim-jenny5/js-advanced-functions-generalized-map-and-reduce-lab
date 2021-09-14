function map(arr, func) {
  const newArr = [];
  for (const num of arr) {
    newArr.push(func(num));
  }
  return newArr;
}

function reduce(arr, func, x) {
  let aggregate;
  if (x) {
    aggregate = x;
    for (const num of arr) {
      aggregate = func(num, aggregate);
    }
    // return aggregate;
  } else {
    aggregate = arr[0];
    const newArr = arr.slice(1, arr.length);
    for (const num of newArr) {
      aggregate = func(num, aggregate);
    }
    // return aggregate;
  }
  return aggregate;
}
