//solution 1
function getBudgets(array){
    let sum = 0 ;
  array.forEach(element => {
      sum+= element.budget
      
  });
  return sum;
}    
/* solution2
function getBudgets(array) {
    return array.map(obj => Object.values(obj)[2]).reduce((sum, element) => sum + element);
  }
*/

console.log(getBudgets([
    { name: "John", age: 21, budget: 23000 },
    { name: "Steve", age: 32, budget: 40000 },
    { name: "Martin", age: 16, budget: 2700 }
    ]));

console.log(getBudgets([
    { name: "John", age: 21, budget: 29000 },
    { name: "Steve", age: 32, budget: 32000 },
    { name: "Martin", age: 16, budget: 1600 }
    ]))
