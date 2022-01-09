// ASSESSMENT 4: JavaScript Coding Practical Questions with Jest

// Please read all questions thoroughly
// Pseudo coding is REQUIRED
// If you get stuck, please leave comments to help us understand your thought process

// Use test driven development to complete the following questions
// Add appropriate dependencies: $ yarn add jest

// Reminder: The test will call your function
// Run the file with the following command: $ yarn jest

// describe("", () => {
//     it("",() => {
//         expect(()).toEqual()
//     })
// })




// --------------------1) Create a function that takes in an array, removes the first item from the array and shuffles the remaining content.

// a) Create a test with an expect statement using the variable provided. HINT: Check out this resource: https://jestjs.io/docs/expect#expectarraycontainingarray

var colors1 = ["purple", "blue", "green", "yellow", "pink"]
// Expected output example (can be a different order): ["yellow", "blue", "pink", "green"]
var colors2 = ["chartreuse", "indigo", "periwinkle", "ochre", "aquamarine", "saffron"]
// Expected output example (can be a different order): ["saffron", "aquamarine", "periwinkle", "indigo", "ochre"]

//I will name my funciton flashcard
// I have to declare expected as an array so that when jest is ran, it can expect to recieve an array with the same items, but possibly in a different order
//I have declared two separate "exoected" variables because I was unable to name any other variables in the test. 
//One has to be commented out so that 
describe("flashcard", () => {
   // const expected = ["yellow", "blue", "pink", "green"]
    const expected = ["saffron", "aquamarine", "periwinkle", "indigo", "ochre"]
    it("takes in an array, removes the first item, and returns a randomized array",() => {
       // expect(flashcard(colors1)).toEqual(expect.arrayContaining(expected))
        expect(flashcard(colors2)).toEqual(expect.arrayContaining(expected))
    })
})

//first I will create a function -> flashcard
//it will take in an array
//I will iterate over the array
//it will remove the first element item
//it will randomize the remaining items
//it will return a new array

// b) Create the function that makes the test pass.

const flashcard = (array) => {
    let newArr = array.shift()
     newArr = array.filter(value  => {
            return array[Math.floor(array.length * Math.random())]
        })
        return newArr
    }




// --------------------2) Create a function that takes an array of numbers and returns an array of the minimum and maximum numbers in that order.

// a) Create a test with expect statements for each of the variables provided.

var nums1 = [3, 56, 90, -8, 0, 23, 6]
// Expected output: [-8, 90]
var nums2 = [109, 5, 9, 67, 8, 24]
// Expected output: [5, 109]

//I will name my funtion minMax


describe("minMax", () => {
    it("takes in an array of mixed numbers,returns new array with smallest and largest numbers",() => {
        expect(minMax(nums1)).toEqual([-8, 90])
        expect(minMax(nums2)).toEqual([5, 109])
    })
})


// b) Create the function that makes the test pass.

//first I need to create a function
//the function will need to iterate over an array
//I will use a filter method to iterate
//I will create an empty array to store the numbers
//using math.min, and math.max, I can find the smallest and largest numbers and put them in the specified order 
//I will then return the new array

const minMax = (array) => {
    let finArry = [(Math.min(...array)), (Math.max(...array)) ] 
    newArry = array.filter(value => {
    })
       return finArry

}

        
        // --------------------3) Create a function that takes in two arrays as arguments and returns one array with no duplicate values. STRETCH: Use the spread operator to pass in a dynamic number of arguments.

// a) Create a test with an expect statement using the variables provided.




var testArray1 = [3, 7, 10, 5, 4, 3, 3]
var testArray2 = [7, 8, 2, 3, 1, 5, 4]
// Expected output: [3, 7, 10, 5, 4, 8, 2, 1]

//I will name my function "cull"

describe("cull", () => {
    it("will take in two arrays, combine them and return an array with no duplicate values",() => {
        expect(cull(testArray1,testArray2)).toEqual([3, 7, 10, 5, 4, 8, 2, 1])
    })
})


// b) Create the function that makes the test pass.

//first I need to create a function that takes in two arrays
//I will then concatenate the two arrays 
//from there I will use a filter method to iterate over the concat'd array
//I will then filter out duplicate values and return the new array

const cull = (array1, array2) => {
    let conCatD = [...array1, ...array2] 
    let finArr = conCatD.filter((value,index) => {
            return conCatD.indexOf(value) === index
       })
          return finArr
  }