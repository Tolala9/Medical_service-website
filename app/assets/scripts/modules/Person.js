function Person(fullName) {
	this.name = fullName;
	this.greet = function() {
		console.log("Hi " + this.name );
	}
}
  

module.exports = Person;