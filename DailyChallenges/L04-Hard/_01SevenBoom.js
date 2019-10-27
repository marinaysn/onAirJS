/*Create a function that takes an array of numbers and return "Boom!" 
if the number 7 appears in the array. Otherwise, return "there is no 7 in the array".

Examples
sevenBoom([1, 2, 3, 4, 5, 6, 7]) ➞ "Boom!"
sevenBoom([8, 6, 33, 100]) ➞ "there is no 7 in the array"
sevenBoom([2, 55, 60, 97, 86]) ➞ "Boom!"
*/

//TODO: Alex, practice writing Tests also

const assert = require('assert')

it('should return true', () => {
  assert.equal(true, true)
})



let seven_check = sevenBoom([2, 6, 9, 9, 3])
seven_check = sevenBoom([1, 2, 3, 4, 5, 6, 7])
seven_check = sevenBoom([8, 6, 33, 100])
seven_check = sevenBoom([2, 55, 60, 97, 86])
seven_check = sevenBoom([33, 68, 400, 5])
seven_check = sevenBoom([86, 48, 100, 66])
seven_check = sevenBoom([76, 55, 44, 32])
seven_check = sevenBoom([35, 4, 9, 37])

console.log('===========================')

let seven_check1 = sevenBoom1([2, 6, 9, 9, 3])
seven_check1 = sevenBoom1([1, 2, 3, 4, 5, 6, 7])
seven_check1 = sevenBoom1([8, 6, 33, 100])
seven_check1 = sevenBoom1([2, 55, 60, 97, 86])
seven_check1 = sevenBoom1([33, 68, 400, 5])
seven_check1 = sevenBoom1([86, 48, 100, 66])
seven_check1 = sevenBoom1([76, 55, 44, 32])
seven_check1 = sevenBoom1([35, 4, 9, 37])

console.log('**********************************')
let seven_check3 = sevenBoom3([2, 6, 9, 9, 3])
seven_check3 = sevenBoom3([1, 2, 3, 4, 5, 6, 7])
seven_check3 = sevenBoom3([8, 6, 33, 100])
seven_check3 = sevenBoom3([2, 55, 60, 97, 86])
seven_check3 = sevenBoom3([33, 68, 400, 5])
seven_check3 = sevenBoom3([86, 48, 100, 66])
seven_check3 = sevenBoom3([76, 55, 44, 32])
seven_check3 = sevenBoom3([35, 4, 9, 37])


function sevenBoom(arr) {
    let str = arr.join().toString()
		if (str.match(/[7]/g)) {
			return console.log("Boom!")
		}	
	return console.log("there is no 7 in the array")
}

function sevenBoom1(arr) {

    return arr.join().toString().match(/[7]/g) ? "Boom!" : "there is no 7 in the array"

   return arr.join().toString().match(/[7]/g) ? console.log("Boom!") : console.log("there is no 7 in the array")

}

function sevenBoom3(arr) {
	return arr.join().includes("7") ? console.log("Boom!") : console.log("there is no 7 in the array");
}

console.log('===========================')



