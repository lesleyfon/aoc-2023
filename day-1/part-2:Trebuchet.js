const fs = require("fs");

const inputName = __dirname + "/part-2:input.txt";
const input = fs.readFileSync(inputName, "utf-8").split("\n");

const digitMap = {
	one: "1",
	two: "2",
	three: "3",
	four: "4",
	five: "5",
	six: "6",
	seven: "7",
	eight: "8",
	nine: "9",
	1: "1",
	2: "2",
	3: "3",
	4: "4",
	5: "5",
	6: "6",
	7: "7",
	8: "8",
	9: "9",
};
/**
 * Iterate through the input
 *  for each input[i],
 *  create two variables,
 *    left, right, leftIdx, right idx
 *  iterate through the key val in digit map

 */
const computeRes = (input) => {
	let res = 0;
	for (let i = 0; i < input.length; i += 1) {
		const int = input[i];
		let leftIdx = Infinity,
			rightIdx = -Infinity,
			leftVal,
			rightVal;
		for (let [key, val] of Object.entries(digitMap)) {
			if (int.includes(key)) {
				const idx = int.indexOf(key);
				const rIDx = int.lastIndexOf(key);

				if (leftVal === undefined) {
					leftVal = val;
					leftIdx = idx;
				} else if (leftIdx > idx) {
					leftIdx = idx;
					leftVal = val;
				}

				if (rightVal === undefined) {
					rightVal = val;
					rightIdx = rIDx;
				} else if (rightIdx < rIDx) {
					rightIdx = rIDx;
					rightVal = val;
				}
			}
		}

		const jointVal = leftVal + rightVal;
		res += parseInt(jointVal);
	}
	return res;
};

console.log(computeRes(input));
