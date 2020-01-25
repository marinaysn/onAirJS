/*Create a function that takes a number step (which equals HALF the width of a square) and returns the amount of empty squares. The image shows the squares with step 1, 2 and 3. The return value is the number of cells not on a diagonal, which is 0 for the first square, 8 for the second, and 24 for the third.

Examples
emptySq(1) ➞ 0
emptySq(3) ➞ 24
emptySq(10) ➞ 360
*/

function emptySq(step) {
	let total = 0;
	for (let i = 1, j = 8; i < step; i++ , j += 8) {
		total += j
	}
	console.log(total)
	return total
}

function emptySq1(step) {
	return step <= 1 ? 0 : step * (step - 1) * 4;
}

function emptySq2(step) {
	return (step * step - step) * 4;
}

function emptySq3(step) {
	return Math.pow(step * 2, 2) - step * 4;
}

function emptySq4(step) {
	let sum = 8
	if (step <= 1) { return 0 }
	else {
		for (let i = 2; i < step; i++) {
			sum += 8 * (i)
		}
		return sum
	}
}

let emptySq5 = s => s * (s - 1) * 4


function emptySq6(step) {
	let count = 0
	if (step == 0) {
		return 0
	}
	else {
		for (i = 1; i <= step; i++) {
			count = count + ((i - 1) * 8)
		}
	}
	return count
}


emptySq(0) //➞ 0
emptySq(1) //➞ 0
emptySq(2) //➞ 8
emptySq(3) // ➞ 24
emptySq(4) //➞ 48
emptySq(5) //➞ 80
emptySq(6) //➞ 120
emptySq(7) //➞ 168
emptySq(8) //➞ 224
emptySq(9) //➞ 288
emptySq(10) //➞ 360

console.log('==============================')
console.log(emptySq1(0)) //➞ 0
console.log(emptySq1(1)) //➞ 0
console.log(emptySq1(2)) //➞ 8
console.log(emptySq1(3)) // ➞ 24
console.log(emptySq1(4)) //➞ 48
console.log(emptySq1(5)) //➞ 80
console.log(emptySq1(6)) //➞ 120
console.log(emptySq1(7)) //➞ 168
console.log(emptySq1(8)) //➞ 224
console.log(emptySq1(9)) //➞ 288
console.log(emptySq1(10)) //➞ 360

console.log('==============================')
console.log(emptySq2(0)) //➞ 0
console.log(emptySq2(1)) //➞ 0
console.log(emptySq2(2)) //➞ 8
console.log(emptySq2(3)) // ➞ 24
console.log(emptySq2(4)) //➞ 48
console.log(emptySq2(5)) //➞ 80
console.log(emptySq2(6)) //➞ 120
console.log(emptySq2(7)) //➞ 168
console.log(emptySq2(8)) //➞ 224
console.log(emptySq2(9)) //➞ 288
console.log(emptySq2(10)) //➞ 360

console.log('==============================')
console.log(emptySq3(0)) //➞ 0
console.log(emptySq3(1)) //➞ 0
console.log(emptySq3(2)) //➞ 8
console.log(emptySq3(3)) // ➞ 24
console.log(emptySq(34)) //➞ 48
console.log(emptySq3(5)) //➞ 80
console.log(emptySq3(6)) //➞ 120
console.log(emptySq3(7)) //➞ 168
console.log(emptySq3(8)) //➞ 224
console.log(emptySq3(9)) //➞ 288
console.log(emptySq3(10)) //➞ 360

console.log('==============================')
console.log(emptySq4(0)) //➞ 0
console.log(emptySq4(1)) //➞ 0
console.log(emptySq4(2)) //➞ 8
console.log(emptySq4(3)) // ➞ 24
console.log(emptySq4(4)) //➞ 48
console.log(emptySq4(5)) //➞ 80
console.log(emptySq4(6)) //➞ 120
console.log(emptySq4(7)) //➞ 168
console.log(emptySq4(8)) //➞ 224
console.log(emptySq4(9)) //➞ 288
console.log(emptySq4(10)) //➞ 360

console.log('==============================')
console.log(emptySq5(0)) //➞ 0
console.log(emptySq5(1)) //➞ 0
console.log(emptySq5(2)) //➞ 8
console.log(emptySq5(3)) // ➞ 24
console.log(emptySq5(4)) //➞ 48
console.log(emptySq5(5)) //➞ 80
console.log(emptySq5(6)) //➞ 120
console.log(emptySq5(7)) //➞ 168
console.log(emptySq5(8)) //➞ 224
console.log(emptySq5(9)) //➞ 288
console.log(emptySq5(10)) //➞ 360

console.log('==============================')
console.log(emptySq6(0)) //➞ 0
console.log(emptySq6(1)) //➞ 0
console.log(emptySq6(2)) //➞ 8
console.log(emptySq6(3)) // ➞ 24
console.log(emptySq6(4)) //➞ 48
console.log(emptySq6(5)) //➞ 80
console.log(emptySq6(6)) //➞ 120
console.log(emptySq6(7)) //➞ 168
console.log(emptySq6(8)) //➞ 224
console.log(emptySq6(9)) //➞ 288
console.log(emptySq6(10)) //➞ 360

