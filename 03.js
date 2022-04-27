function mapping(array) {
    return Object.fromEntries(array.map((element)=> (  //first converting to object
        [ element.toLowerCase() , element.toUpperCase()]
        )));  
}
console.log(mapping(["p", "s"]));  /*➞ { "p": "P", "s": "S" }*/
console.log(mapping(["a", "b", "c"])); /*➞ { "a": "A", "b": "B", "c": "C" }*/
console.log(mapping(["a", "v", "y", "z"])); /*➞ { "a": "A", "v": "V", "y": "Y", "z": "Z" }*/