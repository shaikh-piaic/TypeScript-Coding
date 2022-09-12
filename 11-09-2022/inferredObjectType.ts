let rand = Math.random() < 0.5 ? "a" : 20;
console.log(rand);

const aObj =
	Math.random() < 0.5
		? { name: "Hello", age: 20 }
		: { name: "Hello", gender: "male" };
console.log(aObj.name, aObj.age, aObj.gender);
