function commonEnd(a, b) {
  if (!a || a.length === 0 || !b || b.length === 0) {
  return false;
}
  if (a[0] === b[0] || a[a.length-1] === b[b.length-1]) {
  return true;
} else {
  return false;
}
}

function endsMeet(values, n) {
  let a1 = [];
  let a2 = [];
  if (values.length < n || n < 1 || !values || !Number.isInteger(n)) {
    return [];
  }
  else {
      array1 = values.slice(0, n);
      array2 = values.slice(values.length - n, values.length + 1);
      newArray = array1.concat(array2);
      return newArray;
  }
}

function difference(numbers) {

  if (!numbers || numbers.some(isNaN) || numbers.length < 1) {
    return undefined;
  }
  else {
      if (numbers.length === 1) {
      return 0;
    } else {
      max = Number(Math.max.apply(null, numbers));
      min = Number(Math.min.apply(null, numbers));
    }
    return max - min;
  }
}

function max(number) {
    if (!number || number.length < 3 || number.length % 2 == 0) {
    return undefined;
  } if (number.some(isNaN)) {
    return undefined;
  }

  let last = number[number.length-1]
  let middle = number[((number.length/2)-1) + 0.5]
  let first = number[0]

    if ((last > first) && (last > middle)) {
    return last;
  } else if ((first > middle) && (first > last)) {
    return first;
  } else if ((middle > last) && (middle > first)) {
    return middle;
  } else {
    return first;
  }
}

function middle(values) {
 let array = [];

   if (values == undefined || values.length % 2 == 0 || values.length < 3 ){
   return [];

 } else {

   let middle1 = values[values.length - (Math.ceil(values.length / 2))]
   let middle2 = values[(values.length - 1) - (Math.ceil(values.length / 2))]

   array.push(middle2, middle1)

   return array;

 }
 }

function increasing(numbers) {
  // write your code here
}

function everywhere(values, x) {
  // write your code here
}

function consecutive(numbers) {
  // write your code here
}

function balance(numbers) {
  // write your code here
  console.log("test");
}

function clumps(values) {
  // write your code here
}

/*
 * Exports all functions for use in external grader.js file. Do not modify.
 */

module.exports = {
  commonEnd,
  endsMeet,
  difference,
  max,
  middle,
  increasing,
  everywhere,
  consecutive,
  balance,
  clumps
};
