var myMap = new Map();
// maps are not objects
myMap.set(1, "Uno");
myMap.set(2, "Dos");
myMap.set(3, "Tres");
myMap.set(4, "Cuatro");
 console.log(myMap);

 for (let key of myMap.keys()){
     console.log(`key is ${key}`);
 }
 for (let key of myMap.values()){
     console.log(`value is ${key}`);
 }

 for (let [key, value] of myMap){
     console.log(`key is: ${key} and value is ${value}`);
 }

 myMap.forEach( (v, k) => console.log(`${v} and key is ${k}`) );
//  forEach gives the values not the indexes .....in this case the keys are indexes

myMap.delete(2);
console.log(myMap);