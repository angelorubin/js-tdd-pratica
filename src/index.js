import * as R from "ramda";

const arr1 = [1, 2, 2, 2, 3];
const arr2 = [4, 5, 6];

const joined = R.union(arr1, arr2);

console.log(joined);
