const fs = require("fs");

const inputName = __dirname + "/part-1:input.txt";
const input = fs.readFileSync(inputName, "utf-8").split("\n");

const getNumsFromInput = (input) => {
	const res = [];

	for (let i = 0; i < input.length; i += 1) {
		let first, last;
		const currInput = input[i];
		let j = 0,
			k = currInput.length - 1;
		while (first === undefined || last === undefined) {
			if (first === undefined && Number.isSafeInteger(parseInt(currInput[j]))) {
				first = currInput[j];
			}
			if (last === undefined && Number.isSafeInteger(parseInt(currInput[k]))) {
				last = currInput[k];
			}
			j += 1;
			k -= 1;
			if (first && last) break;
		}

		first = first + last;

		res.push(parseInt(first));
	}
	return res;
};

console.log(getNumsFromInput(input).reduce((s, n) => s + n));
