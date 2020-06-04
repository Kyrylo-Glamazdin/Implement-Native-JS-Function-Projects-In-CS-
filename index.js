Array.prototype.myEach = function(CBFunction){
    for (let i = 0; i < this.length; i++){
        CBFunction(this[i]);
    }
}

Array.prototype.myMap = function(CBFunction){
    let result = [];
    for (let i = 0; i < this.length; i++){
        result.push(CBFunction(this[i]));
    }
    return result;
}

Array.prototype.myFilter = function(CBFunction){
    let result = [];
    for (let i = 0; i < this.length; i++){
        if (CBFunction(this[i])){
            result.push(this[i]);
        }
    }
    return result;
}

Array.prototype.mySome = function(CBFunction){
    for (let i = 0; i < this.length; i++){
        if (CBFunction(this[i])){
            return true;
        }
    }
    return false;
}

Array.prototype.myEvery = function(CBFunction){
    for (let i = 0; i < this.length; i++){
        if (!CBFunction(this[i])){
            return false;
        }
    }
    return true;
}

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

Array.prototype.myIncludes = function(valueToCheck){
    for (let i = 0; i < this.length; i++){
        if (this[i] === valueToCheck){
            return true;
        }
    }
    return false;
}

Array.prototype.myIndexOf = function(valueToCheck, startPosition){
    let index = (startPosition  === undefined) ? 0 : startPosition;
    for (index; index < this.length; index++){
        if (this[index] === valueToCheck){
            return index;
        }
    }
    return -1;
}

Array.prototype.myPush = function(...elements){
    const initialLength = this.length;
    const extraLength = elements.length;
    for (let i = 0; i < extraLength; i++){
        this[initialLength + i] = elements[i];
    }
}

Array.prototype.myLastIndexOf = function(element){
    for (let i = this.length - 1; i >= 0; i--){
        if (this[i] === element){
            return i;
        }
    }
    return -1;
}

grabKeys = function(object){
    let keys = [];
    for (let val in object){
        if (object.hasOwnProperty(val)){
            keys.push(val);
        }
    }
    return keys;
}

grabValues = function(object){
    let values = [];
    for (let val in object){
        if (object.hasOwnProperty(val)){
            values.push(object[val]);
        }
    }
    return values;
}









const array1 = ['a', 'b', 'c'];
const array2 = [1, 2, 3];
const array3 = [1, 20, 3, 4, 50, 60, 70, 8, 9, 10];
const array4 = ['a', 'b', 'c', 'a'];

const callBackFunction = x => {
    console.log(x);
}

const multiplyByTwo = x => {
    return x*2;
}

const greaterThan10 = x => {
    return x > 10;
}

const lessThan10 = x => {
    return x < 10;
}

const sumOfTwo = (x1, x2) => {
    return x1 + x2;
}

const test1 = () => {
    array1.myEach(callBackFunction)
}

const test2 = () => {
    const resultArray = array2.myMap(multiplyByTwo);
    console.log(resultArray);
}

const test3 = () => {
    const resultArray = array3.myFilter(greaterThan10);
    console.log(resultArray);
}

const test4 = () => {
    console.log(array2.mySome(greaterThan10)); //false
    console.log(array3.mySome(greaterThan10)); //true
}

const test5 = () => {
    console.log(array2.myEvery(lessThan10)); //true
    console.log(array3.myEvery(lessThan10)); //false
}

const test6 = () => {
    //uses sumOfTwo function which adds two elements together
    console.log(array2.myReduce(sumOfTwo)); // 1 + 2 + 3 = 6
    //uses sumOfTwo function which adds two elements together with an initial value of 100
    console.log(array2.myReduce(sumOfTwo, 100)); // 100 + 1 + 2 + 3 = 106
}

const test7 = () => {
    //checks whether array ['a', 'b', 'c'] includes 'a' (true) and 'd' (false)
    console.log(array1.myIncludes('a')); //true
    console.log(array1.myIncludes('d')); //false
}

const test8 = () => {
    //returns indexes of letters in array ['a', 'b', 'c', 'a']
    console.log(array4.myIndexOf('a')); // 0
    console.log(array4.myIndexOf('a', 2)); // 3
    console.log(array4.myIndexOf('d')); // -1
}

const test9 = () => {
    //appends 'd' to the array ['a', 'b', 'c']
    let testArray1 = ['a', 'b', 'c'];
    testArray1.myPush('d');
    console.log(testArray1);

    //appends 'd', 'e', 'f', 'g', 'h' to the array ['a', 'b', 'c']
    let testArray2 = ['a', 'b', 'c'];
    testArray2.myPush('d', 'e', 'f', 'g', 'h');
    console.log(testArray2);
}

const test10 = () => {
    //returns indexes of letters array ['a', 'b', 'c', 'a']
    console.log(array4.myLastIndexOf('a')); // 3
    console.log(array4.myLastIndexOf('d')); // -1
}

const test11 = () => {
    let location = {
        latitude: 40.7678015,
        longitude: -73.968105,
        name: "Hunter College",
        city: "New York"
    }

    console.log(grabKeys(location));
}

const test12 = () => {
    let location = {
        latitude: 40.7678015,
        longitude: -73.968105,
        name: "Hunter College",
        city: "New York"
    }

    console.log(grabValues(location));
}