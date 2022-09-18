type calc = (a: number, b: number) => number;

let returnNumberOrString: (a: number, b: number) => number | string;
returnNumberOrString = (a, b) => {
	if (a > 0) {
		return a + b;
	} else {
		return "Unable to Add";
	}
};

let returnNumberOrUndefined: ((a: number, b: number) => number) | undefined;
returnNumberOrUndefined = undefined;
