// bai 1
const arr1 = [1, 2, 4, 5, 6];
const arr2 = [1, 6, 8, 9, 0];

const arr3 = [...arr1, ...arr2];
const newArr3 = arr3.filter((element, index) => {
	return arr3.indexOf(element) !== index;
})
console.log(newArr3)


// bai 2
const arr = [1, 54, 6, 7];

const newArr = arr.map(element => element + 5)
console.log(newArr)


// bai 3
const m = [1, 2, 4, 5, 6, 7];
const n = [3, 5, 675, 8, 96];

function sort() {
	const mAndN = [...m, ...n];
	const newMAndN = mAndN.filter(element => {
		return (
			element !== 1
			&& element !== 8
			&& element !== 10
			&& element !== 96
			&& element !== 7
		)
	})
	console.log(newMAndN)
}

sort();


// bai 4
const players = [
	{ id: 11, name: 'Messi', age: 33 },
	{ id: 12, name: 'Ronaldo', age: 34 },      
	{ id: 13, name: 'Young', age: 35 },        
	{ id: 14, name: 'Mane', age: 21 },          
	{ id: 15, name: 'Salah', age: 24 },
]

const playersModified = {};
players.map(element => {
	playersModified[element.id] = element;
	return playersModified;
})
console.log(playersModified);


// bai 5
import { A, avg, decrease, sumPositive, sumOdd, secondBiggest, perfectSquare } from "./modules/helpers.js"
// bai 5.1
console.log(avg(A))
// bai 5.2
console.log(decrease(A))
// bai 5.3
console.log(sumPositive(A))
// bai 5.4
console.log(sumOdd(A))
// bai 5.5
console.log(secondBiggest(A))
// bai 5.6
console.log(perfectSquare(A))