type Human = {
	name: string;
	age: number;
};

type Book = {
	author: Human;
	title: string;
	ISBN: number;
	noOfPages: number;
	genre: "Tech" | "Comedy" | "Romance";
	language?: "English" | "Arabic" | "French";
};

let myBook01: Book = {
	author: {
		name: "Shaikh",
		age: 22,
	},
	title: "TypeScript by Josh",
	ISBN: 123456789,
	noOfPages: 890,
	genre: "Tech",
};

let myBook02: Book = {
	author: {
		name: "Shaikh",
		age: 22,
	},
	title: "TypeScript by Josh",
	ISBN: 123456789,
	noOfPages: 890,
	genre: "Tech",
	language: "English",
};

console.log(myBook01);
console.log(myBook02);
