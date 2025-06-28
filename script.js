let arr = [1, 2, 3, 4, 5];
let arr2 = ['a', 'b', 'c'];

let arr3 = arr2
// arr3 = ['a', 'b', 'c'];

let arr4 = [arr2,arr];
// let arr4 = [['a', 'b', 'c'],[1, 2, 3, 4, 5]];
let arr5 = [...arr2,...arr] //spread operator
console.log("array 4", arr4);
console.log("array 5", arr5);


console.log("array 4", arr4.length); // sets the length of array
console.log("array 5", arr5.length); // sets the length of array

let arr6 = arr.push(7) // use to add element at the end of array
console.log("arr 6", arr)

let arr6 = arr.push(9, 0) // use to add element at the end of array
console.log("arr 6", arr)

arr.pop() // use to remove element at the end of array
console.log(arr)
arr.pop() // use to remove element at the end of array
console.log(arr)
arr.pop() // use to remove  at the end of array
console.log(arr)
arr.pop() // use to remove at the end of array
console.log(arr)



let arr = [1, 2, 3, 4, 5];
let arr2 = ['a', 'b', 'c'];

arr.shift() // use to remove at at the beginning of array
console.log(arr)




let arr = [1, 2, 3, 4, 5];
let arr2 = ['a', 'b', 'c'];

arr.unshift(0) // use to add at at the beginning of array
console.log(arr.length)
console.log(arr)


//mutable: they are changing your original value.
//immutable: they are not changing your original value


// Different Method and fuction(when .map a method and .map a fuction)

// Transform each element and return the new array



//forEach(execute a function on each element in array, but does not return the new array)




//map(allows you to transform each items in array and return a new array with the updated values, without changing the original array)

arrs = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
aar.map(=>() )// allow you to transform each items in array (this method form of .map)

