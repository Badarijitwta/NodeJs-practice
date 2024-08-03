(function () {
  const superHero = 'Batman'
  console.log(superHero)
})();
//This is the demonstration of Immediately Invoked Function Expression
//where the same method is inculcated in wrapping the modules in Node.js.

(function () {
  const superHero = 'Superman'
  console.log(superHero)
})();

//The output is same -- Batman is followed by Superman
//This provides immunity to variables and functions of either modules and avoids ambiguity and collissions.

//There are multiple ways and syntaxes to indicate or declare IIFE
//Its intention is to award the function declaration into function expression.

+function (a, b) {
  const c = a + b
  console.log(c)
}(3, 4)

!function (a, b) {
  const c = a * b
  console.log(c)
}(3, 4)

