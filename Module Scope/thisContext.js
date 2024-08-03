//'this' context has different outcomes according to circumstances as 

{
  //1. Arrow Functions
  //1. For arrow functions 'this has no context but it inherits its parent's scope'
  //2. The output will be {}
  const funcCheck = () => {
    // const funcCheckOne = () => {
    //If we embed return function inside cumulative function it returns undefined
    return this
    // }
  }
  let res = funcCheck()
  console.log(res)
}

//2.IIFE
//The consensus output is global context and undefined if it is use-strict mode
(function () {
  console.log(this)
})()

//3. Normal Function
//Global context
function funcEmbed() {
  // function funcNormal() {
  //The same case it returns undefined
  return this
  // }
}
console.log("This is func Embed", funcEmbed())