// Based on the category where the data is stored there are 2 types
// Primitive: String ,Number, Boolean, Null, undefined, Symbol, Bigint
// Refrence: Arrays, Objects, Functions

const id = Symbol('123')
const anotherId = Symbol('123')
console.log(id===anotherId)