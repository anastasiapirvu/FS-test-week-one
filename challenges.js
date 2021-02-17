/*------------------
1)
Write a function that determines
if a number is a palindrome. A number is a
palindrome if it reads the same forwards and
backwards. 

Note:
- All negative numbers should return false.
- Single numbers should return true.

------------------*/

// function isPalindrome(num) {

// // initialise  
// // convert number to string
// // return true or false

// let numbers = num.toString();

// if (numbers === numbers.split("").reverse().join("")) {
//         return true; 
// } else {
//     return false;
// }}
// //Test cases:
// console.log(isPalindrome(12321)); // true
// console.log(isPalindrome(-12321)); // false
// console.log(isPalindrome(1)); // true
// console.log(isPalindrome(84146)); // false
// console.log(isPalindrome(12)); // false

/*------------------
2)
Create a function that takes a grid
as an argument and adds all the numbers
in that grid together.


------------------*/

function addGridItems(grid) {
    // initialise
    // loop through elements
    // add each element 

    let sum = 0; 
    for (let elem1 in grid[0]);
        for (let elem2 in grid[1]);
            for (let elem3 in grid[2]);
         sum += elem3;  
     return sum;     


console.log(addGridItems);
}

//Examples:
const y = [[[1], [2]]];
console.log(addGridItems(y)); // 3

const x = [[[1, 0, -3], [2, 4], [3]], [[4, 4, 3], [5, -3, -1], [6, 10]], [[7, -5, -5], [8, 0], [9, 1]]];
console.log(addGridItems(x)); // 50

/*------------------
3)
Create a function that turns a string into a
file name: all letters are lowercase, spaces are
swapped for underscores, and it includes a
file extension. 

This function should take two parameters: the string, 
and the type of file it is (so you know what file
extension to add). You only need to cover
the extensions below:
- PDF: .pdf
- image: .png
- JSON: .json


------------------*/

// function createFileName(str, type) {
    // new string
    // specify the extention files
    //to lowercase
    // to underscore
    // what it returns

//     let newFile = "";
//     newFile = str.toLowerCase();

//     for (let i in type){
//         if (typeof[i] === "PDF" {
//         return type(pdf);

//     } if (typeof[i] === "image" {
//         return type(png);

//     }  if (typeof[i] === "JSON" {
//         return type(json);
//     }}   
//     return (createFileName);    
// } 

// Examples:
// console.log(createFileName("Sofia Engineering Resume", "PDF")); // "sofia_engineering_resume.pdf"
// console.log(createFileName("Sofia Profile Photo", "image")); // "sofia_profile_photo.png"
// console.log(createFileName("Data from Pokemon API", "JSON")); // "data_from_pokemon_api.json"

/*------------------
4) Print the following pattern
99 96 93 90 88
99 96 93 90
99 96 93
99 96
99

Hints:
- Use a loop within a loop.
------------------*/
// loop through the numbers (5 times ?)
// decrement each new number by 3 (last one by 2?)

// let num = "";
// for (let n = 0; n < num.lenght; n -=3){
//     for (o = 0; k < num[n].lenght; o -=3){
//         for (p = 0; p < num[n][o].lenght; p -=3){
//             for (q = 0; q < num[n][o][p].lenght; q -=3){
//                 for (r = 0; r < num[n][o][p][q].lenght; r -=2){
// console.log(num[n][o][p][q][r])
// }}}}}