/*
Example: There are three towers. The objective of the game is to move all the disks over to tower #3, but you can't place a larger disk onto a smaller disk.

Tower of Hanoi

Create a function that takes a number discs as an argument and returns the minimum amount of steps needed to complete the game.

*/
//Solution 1
function towerHanoi(discs) {
    console.log(Math.pow(2, discs) -1)
    return Math.pow(2, discs) -1
}
towerHanoi(1) //, 1)
towerHanoi(2) //, 3)
towerHanoi(3) //, 7)
towerHanoi(4) //, 15)
towerHanoi(5) //, 31)
towerHanoi(6) //, 63)
towerHanoi(7) //, 127)
towerHanoi(8)//, 255)
towerHanoi(9)//, 511)
towerHanoi(19)//, 524287)
towerHanoi(13)//, 8191)
towerHanoi(0)//, 0)

//Solution 2
function towerHanoi2(discs) {
    if (discs === 0 || discs === 1) {
        console.log(discs)
		return discs
    }    
    if (discs === 2) {
        console.log(3)
		return 3
    }
    
	 let total = 7;
	for ( let i = 0, j = 1; i < discs-3; i++, j*=2){
        total += 8*j
    }
    console.log(total)
	return total
}

towerHanoi2(1) //, 1)
towerHanoi2(2) //, 3)
towerHanoi2(3) //, 7)
towerHanoi2(4) //, 15)
towerHanoi2(5) //, 31)
towerHanoi2(6) //, 63)
towerHanoi2(7) //, 127)
towerHanoi2(8)//, 255)
towerHanoi2(9)//, 511)
towerHanoi2(19)//, 524287)
towerHanoi2(13)//, 8191)
towerHanoi2(0)//, 0)