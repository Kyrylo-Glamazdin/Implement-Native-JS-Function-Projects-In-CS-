//Name: Kyrylo Glamazdin

/* 
    Reimplementing Array.prototype functions. Each of the first 10 functions can be applied to any js array.
*/


//applies CallBack function on each of the array entries
Array.prototype.myEach = function(CBFunction){
    for (let i = 0; i < this.length; i++){
        CBFunction(this[i]);
    }
}

//returns an array of elements after applying callback function on each of them
Array.prototype.myMap = function(CBFunction){
    let result = [];
    for (let i = 0; i < this.length; i++){
        result.myPush(CBFunction(this[i]));
    }
    return result;
}

//returns an array of elements that pass the condition specified by CallBack function
Array.prototype.myFilter = function(CBFunction){
    let result = [];
    for (let i = 0; i < this.length; i++){
        if (CBFunction(this[i])){
            result.myPush(this[i]);
        }
    }
    return result;
}

//returns true if some elements satisfy the condition specified by the callback function
Array.prototype.mySome = function(CBFunction){
    for (let i = 0; i < this.length; i++){
        if (CBFunction(this[i])){
            return true;
        }
    }
    return false;
}

//returns true if each element satisfies the condifiton specified by the callback function
Array.prototype.myEvery = function(CBFunction){
    for (let i = 0; i < this.length; i++){
        if (!CBFunction(this[i])){
            return false;
        }
    }
    return true;
}

//reduces an array to a single value by applying callback function on each element and accumulating the result
Array.prototype.myReduce = function(CBFunction, startValue){
    let result = undefined;
    if (startValue){
        result = startValue;
    }
    for (let i = 0; i < this.length; i++){
        if (result){
            result = CBFunction(result, this[i]);
        }
        else{
            result = this[i];
        }
    }
    return result;
}

//returns true if a passed element is in the array. false otherwise
Array.prototype.myIncludes = function(valueToCheck){
    for (let i = 0; i < this.length; i++){
        if (this[i] === valueToCheck){
            return true;
        }
    }
    return false;
}

//returns index of a passed element in the array after the index @startPosition (optional). returns -1 if the element is not found
Array.prototype.myIndexOf = function(valueToCheck, startPosition){
    let index = (startPosition  === undefined) ? 0 : startPosition;
    for (index; index < this.length; index++){
        if (this[index] === valueToCheck){
            return index;
        }
    }
    return -1;
}

//appends 1 or more elements to the end of the array
Array.prototype.myPush = function(...elements){
    const initialLength = this.length;
    const extraLength = elements.length;
    for (let i = 0; i < extraLength; i++){
        this[initialLength + i] = elements[i];
    }
}

//returns the last index of the passed element in the given array
Array.prototype.myLastIndexOf = function(element){
    for (let i = this.length - 1; i >= 0; i--){
        if (this[i] === element){
            return i;
        }
    }
    return -1;
}

//returns an array of keys of the provided object
grabKeys = function(object){
    let keys = [];
    for (let val in object){
        if (object.hasOwnProperty(val)){
            keys.push(val);
        }
    }
    return keys;
}

//returns an array of values of a provided object
grabValues = function(object){
    let values = [];
    for (let val in object){
        if (object.hasOwnProperty(val)){
            values.push(object[val]);
        }
    }
    return values;
}







/* 
    UNIT TESTS AND CALLBACK FUNCTIONS
*/

//arrays to test the functions
const array1 = ['a', 'b', 'c'];
const array2 = [1, 2, 3];
const array3 = [1, 20, 3, 4, 50, 60, 70, 8, 9, 10];
const array4 = ['a', 'b', 'c', 'a'];

//prints @x in the console
const callBackFunction = x => {
    console.log(x);
}

//multiplies @x by 2
const multiplyByTwo = x => {
    return x*2;
}

//returns true if @x is greater than 10
const greaterThan10 = x => {
    return x > 10;
}

//returns true if @x is less than 10
const lessThan10 = x => {
    return x < 10;
}

//returns the sum of @x1 and @x2
const sumOfTwo = (x1, x2) => {
    return x1 + x2;
}

//tests myEach
const test1 = () => {
    array1.myEach(callBackFunction) //prints each element of ['a', 'b', 'c']
}

//tests myMap
const test2 = () => {
    const resultArray = array2.myMap(multiplyByTwo); //multiplies each element of [1, 2, 3] by 2
    console.log(resultArray); //prints [2, 4, 6]
}

//tests myFilter
const test3 = () => {
    const resultArray = array3.myFilter(greaterThan10); //returns an array of elements greater than 10 from the array [1, 20, 3, 4, 50, 60, 70, 8, 9, 10]
    console.log(resultArray); //prints [20, 50, 60, 70, 10]
}

//tests mySome
const test4 = () => {
    //returns true if some elements in [1, 2, 3] are greater than 10 (false)
    console.log(array2.mySome(greaterThan10)); //false
    //returns true if some elements in [1, 20, 3, 4, 50, 60, 70, 8, 9, 10] are greater than 10 (true)
    console.log(array3.mySome(greaterThan10)); //true
}

//tests myEvery
const test5 = () => {
    //returns true if all elements in [1, 2, 3] are less than 10 (true)
    console.log(array2.myEvery(lessThan10)); //true
    //returns true if all elements in [1, 20, 3, 4, 50, 60, 70, 8, 9, 10] are less than 10 (false)
    console.log(array3.myEvery(lessThan10)); //false
}

//tests myReduce
const test6 = () => {
    //uses sumOfTwo function which adds two elements together
    console.log(array2.myReduce(sumOfTwo)); // 1 + 2 + 3 = 6
    //uses sumOfTwo function which adds two elements together with an initial value of 100
    console.log(array2.myReduce(sumOfTwo, 100)); // 100 + 1 + 2 + 3 = 106
}

//tests myIncludes
const test7 = () => {
    //checks whether array ['a', 'b', 'c'] includes 'a' (true) and 'd' (false)
    console.log(array1.myIncludes('a')); //true
    console.log(array1.myIncludes('d')); //false
}

//tests myIndexOf
const test8 = () => {
    //returns indexes of letters in array ['a', 'b', 'c', 'a']
    console.log(array4.myIndexOf('a')); // 0
    console.log(array4.myIndexOf('a', 2)); // 3
    console.log(array4.myIndexOf('d')); // -1
}

//tests myPush
const test9 = () => {
    //appends 'd' to the array ['a', 'b', 'c']
    let testArray1 = ['a', 'b', 'c'];
    testArray1.myPush('d');
    console.log(testArray1); //prints ['a', 'b', 'c', 'd']

    //appends 'd', 'e', 'f', 'g', 'h' to the array ['a', 'b', 'c']
    let testArray2 = ['a', 'b', 'c'];
    testArray2.myPush('d', 'e', 'f', 'g', 'h');
    console.log(testArray2); //prints ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h']
}

//tests myLastIndexOf
const test10 = () => {
    //returns last indexes of letters array ['a', 'b', 'c', 'a']
    console.log(array4.myLastIndexOf('a')); // 3
    console.log(array4.myLastIndexOf('d')); // -1
}

//tests grabKeys
const test11 = () => {
    let location = {
        latitude: 40.7678015,
        longitude: -73.968105,
        name: "Hunter College",
        city: "New York"
    }

    console.log(grabKeys(location)); //prints ['latitude', 'longitude', 'name', 'city']
}

//tests grabValues
const test12 = () => {
    let location = {
        latitude: 40.7678015,
        longitude: -73.968105,
        name: "Hunter College",
        city: "New York"
    }

    console.log(grabValues(location)); //prints [40.7678015, -73.968105, 'Hunter College', 'New York']
}