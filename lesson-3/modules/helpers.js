// bai 5
export const A = [1, 5, 3, 8, 10];

// bai 5.1
export function avg(A) {
	const sumA = A.reduce((acc, cur) => acc + cur, 0)
	const avgA = sumA / A.length
	return avgA
}

// bai 5.2
export function decrease(A) {
	// cach 1
	// for (let i = 0; i < A.length; i++) {
	// 	for (let j = i; j < A.length; j++) {
	// 		if (A[i] < A[j]) {
	// 			let temp = A[i];
	// 			A[i] = A[j];
	// 			A[j] = temp;
	// 		}
	// 	}
	// }
	// return A;

	// cach 2
	A.sort((a, b) => b - a)
	return A;
}

// bai 5.3
export function sumPositive(A) {
	const positiveA = A.filter(element => element >= 0)
	const sumA = positiveA.reduce((acc, cur) => acc + cur, 0)
	return sumA
}

// bai 5.4
export function sumOdd(A) {
	const oddA = A.filter(element => element % 2 !== 0)
	const sumA = oddA.reduce((acc, cur) => acc + cur, 0)
	return sumA
}

// bai 5.5
export function secondBiggest(A) {
	// sort array in descending orders (code above)
	// get the 2nd element of the array
	return A[1]
}

// bai 5.6
export function perfectSquare(A) {
	let count = 0
	for (let i = 0; i < A.length; i++) {
		if (Math.sqrt(A[i]) % 1 === 0) {
			count++
		}
	}
	return count
}