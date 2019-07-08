
// Object Destructuring

// const person = {
//   name: 'Jaeha',
//   age: 24,
//   location: {
//     city: 'Seoul',
//     temp: 26
//   }
// }

// const {name:firstName = 'Anonymous', age, location} = person;
// const {city, temp: temperature} = location;
// // const name = person.name;
// // const age = person.age;

// console.log(`${firstName} is ${age}.`)

// if (temperature && city) {
//   console.log(`It's ${temperature} in ${city}.`)
// }



// Array Destructuring

const address = ['1299 S Juniper Street', 'Philadelphia', 'Pennsylvania', '19147']
const [, city, state = 'New York'] = address

console.log(`You are in ${city} ${state}.`);

const item = ['Coffee (hot)', '$2.00', '$2.50', '$2.75']

const [menu, ,medium, ] = item
console.log(`A medium ${menu} costs ${medium}`)