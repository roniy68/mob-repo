class Person {
	constructor(name, age, passion){
		this.name = name;
		this.age = age;
		this.passion = passion;
	}
}

const person1 = new Person('Dieum', 25, 'Loves Programming');
const person2 = new Person('Rony', 22, 'I love Music');

console.log(`I am ${person1.name}. I am ${person1.age} years old. ${person1.passion}`);
console.log(`I am ${person2.name}. I am ${person2.age} years old. ${person2.passion}`);
