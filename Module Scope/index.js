require('./batman.js')
require('./superman.js')

//The output is Batman followed by Superman...
//Why?
//There is no conslict or error in this case..Because the modules have their own scope
//It achieves the theory of module decentralization using "Immediately invoked Function Expression"..

//How this happens in Node.js?
//Check iife.js file

