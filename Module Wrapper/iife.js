
//Passing parameters to IIFE
(function () {
  const superHero = 'Batman'
  console.log(superHero)
})("Hey");
(function () {
  const superHero = 'Superman'
  console.log(superHero)
})("Hello");
//Output concatenates the Hey and Hello with the respective
//IIFEs
//The function in default of IIFE contains 5 parameters
//1. exports
//2. require
//3. Module
//4. __filename
//5. __dirname