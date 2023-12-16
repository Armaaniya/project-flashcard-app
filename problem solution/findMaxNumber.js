// findMaxNumber
const findMaxNumber = (incoming) => {
    return Math.max(...incoming);
}
let numArray = [10,5,40,20,3];
console.log("The maximum number is:", findMaxNumber(numArray));