function Sum(...num: number[]) {
	let res: number = 0;
	res = num.reduce((prev, next) => (prev += next));
	console.log(res);
}

Sum(1, 312, 5, 7, 876, 33, 89, 90, 677, 5, 5, 43);
