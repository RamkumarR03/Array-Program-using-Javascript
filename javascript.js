// 31.07.2024,,

//  1]  Generating an array of a range...

let arr=[10,20,30,40,50,60,70,80];
let range=5;
for(i=0;i<range;i++){
    console.log(arr[i]);
}

//  2]  Rotating an array:
 
let arr1=[1,3,45,6,78];
let arr2=arr1.pop();
arr1.unshift(arr2);
console.log(arr1);

// 3)Find the longest string:

function findLongestString(arr) {
    arr.sort((a, b) => b.length - a.length);
    return arr[0]; 
    }
    let strings = ["short", "longer", "longest", "tinyparticle"];
    let longestString = findLongestString(strings);
    console.log(longestString); 
  
  //4) Sorting array with complex object:

  let people = [
    { name: "Alice", age: 25 },
    { name: "Bob", age: 30 },
    { name: "Charlie", age: 20 }
  ];
  
  
  people.sort((a, b) => a.age - b.age);
  
  console.log(people);
  
  //5)Removing array : 

  let array = [1, 2, 3, 4, 5];
array = array.filter(item => item !== 3);
console.log(array);

  