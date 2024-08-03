class SuperHero {
  constructor(name) {
    this.name = name
  }

  getName() {
    return this.name
  }

  setName(name) {
    this.name = name
  }
}
module.exports = SuperHero
// module.exports = new SuperHero('Batman')
// Instead of exporting the instance of a class, we should export
// the class itself to support the engendering of multiple instances.