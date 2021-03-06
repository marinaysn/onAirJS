/*

Even vs. Odds

Odd numbers like to hangout with odd numbers. Even numbers like to hangout with even numbers.

A spot is an insertion between two numbers in an array. Given an array of n integers in length, there are n-1 spots available.

For instance:

[3, 4, 9, 10, 1]  // Array of 5 digits can also be thought of as...

[3, __ , 4, __ , 9, __, 10, __, 1]  // ...an array of 4 spots.
After a number is newly inserted into a spot, it's left neighbor is the number directly to the left of it and it's right neighbor is the number directly to the right of it.

For instance:

[3, 6, 4, 9, 10, 1]  // Left neighbor of 6 is 3, right neighbor of 6 is 4.
Odd numbers like having the following (left neighbor, right neighbor combinations): (odd, even), (even, odd), (odd, odd) .They dislike having both neighbors being even, or (even, even).

Similarly, even numbers like the following neighbor combinations: (even, odd), (odd, even), (even, even). They dislike having both neighbors being odd, or (odd, odd).

Given an array, calculate the number of liked spots.

Examples
availableSpots([0, 4, 6, 8], 9) ➞ 0
// 9 likes NONE of the following spots: [0, __, 4], [4, __ , 6], [6, __, 8] b/c all of his neighbors are even.

availableSpots([0, 4, 6, 8], 12) ➞ 3
// 12 likes ALL of the spots.

availableSpots([4, 4, 4, 4, 5], 7) ➞ 1
// 7 dislikes every spot except the last one at: [4, __, 5].

availableSpots([4, 4], 8) ➞ 1

*/

function availableSpots(arr, num) {

	let count = 0;

	if (num % 2 > 0){
		for ( let i = 0, j = 1; j< arr.length; i++, j++){
			if (!(arr[i] % 2 === 0 && arr[j]% 2 === 0)) {
				count++;
			}
		}
	}

	else {
		for ( let i = 0, j = 1; j< arr.length; i++, j++){
			if (!(arr[i] % 2 > 0 && arr[j]% 2 > 0)) {
				count++;
			}
		}
	}

	return count;
	
}

Test.assertEquals(availableSpots([0, 4, 6, 8], 9), 0)
Test.assertEquals(availableSpots([0, 4, 6, 8], 6), 3)
Test.assertEquals(availableSpots([1, 2, 3, 4], 6), 3)
Test.assertEquals(availableSpots([1, 2, 3, 4], 5), 3)
Test.assertEquals(availableSpots([1, 1, 1, 4], 7), 3)
Test.assertEquals(availableSpots([1, 1, 4, 4], 7), 2)
Test.assertEquals(availableSpots([1, 4, 4, 4], 7), 1)
Test.assertEquals(availableSpots([4, 4, 4, 4], 7), 0)
Test.assertEquals(availableSpots([5, 5, 5, 8, 8, 5, 5, 5, 5], 32), 3)
Test.assertEquals(availableSpots([4, 4], 8), 1)

//console.log(abc);