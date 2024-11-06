// DESTRUCTING

// const arr = [1, 2, 3];
// const [x, y, z] = arr;

// console.log(z);

// NESTED

// const arr1 = [1, 2, [3, 4, [12, 34, [123]]]];

// const [a, b, [c, d, [e, f, [g]]]] = arr1;

// console.log(g);

// DEFAULT VALUES

// const [j, k, l, m = 1] = arr;
// console.log(m);

// OBJECTS

// MUTATING VARIABLES

// let a = 2;
// let b = 4;

// const obj = { a: 22, b: 44, c: 55 }(({ a, b } = obj));
// console.log(a);

// console.log(a);

// nested objects

// write nested objects

const nestedObject = {
  name: "Jake",
  details: {
    age: 25,
    location: {
      country: "USA",
      city: {
        name: "New York", // <=====
        coordinates: {
          latitude: 40.7128,
          longitude: -74.006,
        },
      },
    },
  },
};

const {
  details: {
    location: {
      city: { name },
    },
  },
} = nestedObject;
// console.log(name);

const staff = ["waiter", "manager", "waiter", "cleaner", "waiter"];

const newArray = [...new Set(staff)];
console.log(newArray);

// return new array without dublicates
