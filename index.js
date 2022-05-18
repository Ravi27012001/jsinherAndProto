console.log("working..");

let name1 = {
    fname : "ravikant",
    branch : "electrical",
    year : 2022,
}
console.log(name1);
let name2 = {
    fname : "saurav",
}
console.log(name2);
name2.__proto__ = name1;

console.log(name2);
console.log(name2.branch);


console.log(name1.__proto__);
console.log(name2.__proto__);
console.log(name1.__proto__.__proto__);
console.log(name2.__proto__.__proto__);
console.log(name2.__proto__.__proto__.__proto__);


 array = [2,3,4,5,6];
 let sum = array.reduce((sum,car)=> sum + car , 0);
 console.log(sum);

 let z = function (proto){
    console.log(Object.keys(proto));
 }
 z(name1);





