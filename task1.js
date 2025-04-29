function countEvenOddZeroElements(arr) {
	let even = 0;
	let odd = 0;
	let zero = 0;

	for (let item of arr) {
		if (typeof item === 'number' && !isNaN(item)) {
			if (item === 0) {
				zero++;
			} else if (item % 2 === 0) {
				even++;
			} else {
				odd++;
			}
		}
	}

	console.log(`Количество чётных элементов: ${even}`);
  console.log(`Количество нечётных элементов: ${odd}`);
  console.log(`Количество нулевых элементов: ${zero}`);
}

countEvenOddZeroElements([0, 1, 2, 3, 4, 5, 'a', null, undefined]);