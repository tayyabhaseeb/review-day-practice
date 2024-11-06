console.log("Hello World");

// Value vs Reference

const obj = {
  name: "Tayyab",
  age: 23,
};

const dateOfBirth = 17092000;

function info(birthDay, data) {
  data.name = "Humza"; // impacts on line 22
  birthDay = 31091999;

  return `Value vs refer causes the effect the value ==> string is just a copy
 the original doesnot change but obj is passed as reference so orignal obj changes 
 because it points to the orignal regerence in memeory ${data.name} ===> ${birthDay}`;
}

console.log(info(dateOfBirth, obj));
console.log(obj); // { name: 'Humza', age: 23 }

// js ==> we have (pass in) a reference ==> which is a value(in the end)
// not ==> (pass by)  reference
// in js we only have (pass by) ==> (value) it mean

// HOF ==> Receives or Returns a function
