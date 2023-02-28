
let arr = [1, 2, 3, 4, [1, 2, 3], [1, [2], 3]]


function remote(arr)
 {
    return arr.reduce((acc, cur) => acc.concat(Array.isArray(cur) ? remote(cur) : cur), []);
};
 
let result = remote(arr);

console.log(result);