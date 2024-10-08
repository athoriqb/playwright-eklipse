//objects
let customer = {
    firstName: "John",
    lastName: "Smith"
}
console.log(customer)
//dot notation
customer.firstName = "Mike"
//bracket notation
customer.lastName = "Silver"
console.log(customer)
console.log(customer.firstName)
console.log(customer['lastName'])

//arrays
let car = ["Volvo","Toyota","Tesla"]
console.log(car[1])
car[0] = "BMW"
console.log(car[0])

//array of object
const users = [
    { name: 'Alice', age: 30, city: 'New York' },
    { name: 'Bob', age: 25, city: 'Los Angeles' }
];

// Mengakses properti
console.log(users[0].name); // Output: Alice

// Iterasi melalui array of objects
users.forEach(user => console.log(`${user.name} lives in ${user.city}`));

//object with array value
const user = {
    name: 'Alice',
    hobbies: ['reading', 'coding', 'hiking']
};

console.log(user.hobbies[1]); // Output: coding
