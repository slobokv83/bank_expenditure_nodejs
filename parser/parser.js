let keys = [];
let occ = {};

// Get all occurrences of value in list
function getAllIndexes(arr, val) {
	var indexes = [],
		i;
	for (i = 0; i < arr.length; i++) if (arr[i] === val) indexes.push(i);
	return indexes;
}

// Parse all amounts and Incomes/Expenses and avareges amounts per category
function parser(result) {
	result.forEach(el => {
		if (el.subClass !== null) {
			keys.push(el.subClass.title);
		}
	});
	uniq = [...new Set(keys)];

	uniq.forEach(ind => {
		let sum = 0;
		let arr = getAllIndexes(keys, ind);
		arr.forEach(joj => {
			sum += parseInt(result[joj].amount);
		});
		occ[ind] = sum / arr.length;
	});
	console.log('THIS IS RESULT: ', occ);
}

module.exports = { getAllIndexes, parser };
