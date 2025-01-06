let info = {
  name: "Adam",
  age: 25,
  gender: "male",
};

console.log(`${info.name} , ${info.age} , ${info.gender}`)

// #######################################################
// task 2
let person = { name: "Adam", age: 25 };

persongender = "male";

console.log(person);
// #######################################################
// task 3
let person1 = { name: "Adam", age: 25 };
person["gender"] = "male";
console.log(person);
// #######################################################
// task 4
let info1 = {
  name: "Adam",
  age: 25,
  gender: "male",
};

console.log(info1.name);
// #######################################################
// task 5
let info2 = {
  name: "Adam",
  age: 25,
  gender: "male",
};

console.log(info2["name"]);
// ########################################################
// task 6
let person5 = { name: "Adam", age: 25, gender: "male" };
for (let key in person5) {
    console.log(`${key} :${person5[key]}`);

}
// ########################################################
// task 7
let info3 = {
  name: "Adam",
  age: 25,
  gender: "male",
};
let keys = Object.keys(info3);
console.log(keys);
// ########################################################
// task 8
let info4 = {
  name: "Adam",
  age: 25,
  gender: "male",
};
let keys1 = Object.values(info4);
console.log(keys1);
// ########################################################
// task 9
let info5 = {
  name: "Adam",
  age: 25,
  gender: "male",
};
let keys2 = Object.entries(info5);
console.log(keys2);
// ########################################################
// task 10
let info6 = {
  name: "Adam",
  age: 25,
  
};
let info7 = { gender: "male" };
let keys3 = Object.assign(info6,info7);
console.log(keys3);
// ########################################################
// task 11
let info8 = {
  name: "Adam",
  age: 25,
  gender: "male",
};
let keys4 = Object.freeze(info8);
console.log(keys4);
// ########################################################
// task 12
let info9 = {
  name: "Adam",
  age: 25,
};
let keys5 = Object.seal(info9);
console.log(keys5);

