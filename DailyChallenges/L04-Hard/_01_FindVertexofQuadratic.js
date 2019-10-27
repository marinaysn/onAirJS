/*Every quadratic curve y = a x² + b x + c has a vertex point: the turning point where the curve stops heading down and starts going up.
Given the values a, b and c, you need to return the coordinates of the vertex. Return your answers rounded to 2 decimal places.

Examples
findVertex(1, 0, 25)  ➞ [0, 25]
// The vertex of y=x²+25 is at (0, 25).

findVertex(-1, 0, 25) ➞ [0, 25]
// The vertex of y=-x²+25 is at (0, 25).

findVertex(1, 10, 4) ➞ [-5, -21]
// The vertex of y=x²+10x+4 is at (-5, -21).

Vertex of a Parabola
https://www.mathwarehouse.com/geometry/parabola/vertex-of-a-parabola.php

*/

function findVertex(a, b, c) {
	let x = (b / (2*a)) * (-1);
	let y = (a * (x * x)) + (b * x) + c
	return [x, y];
}

let abc = findVertex(-1,0,25)   //, [0,25])
console.log(abc);
abc =  findVertex(1,10,25)//, [-5,0])
console.log(abc);
abc = findVertex(8, 4, 0)//,[ -0.25, -0.5 ])
console.log(abc);
abc = findVertex(4, -200, 1000)//,[25,-1500])
console.log(abc);
abc = findVertex(1, -50, -1000)//,[25,-1625])
console.log(abc);
abc = findVertex(-1, 20, 600)//, [10,700])
console.log(abc);
abc = findVertex(5, 1, 20)//,[-0.1,19.95])

console.log(abc);