// require('./batman.js')
// require('./superman.js')
// const SuperHero = require('./super-hero.js')
// console.log(SuperHero.getName())
// SuperHero.setName('Superman')
// console.log(SuperHero.getName())

// const newSuperHero = require('./super-hero.js')
// console.log(newSuperHero.getName())

// The output is Batman,Superman,Superman..Why?
// This is because "Module Caching"..
// It is because of this remembering technique it could impede
// the creation of multiple instances of the same class


const SuperHero = require('./super-hero.js')
//Batman Instance
const batman = new SuperHero('Batman')
console.log(batman.getName())
batman.setName('Bruce Wayne')
console.log(batman.getName())

//SuperMan Instance
const superman = new SuperHero('Superman')
console.log(superman.getName())
superman.setName('Knight')
console.log(superman.getName())