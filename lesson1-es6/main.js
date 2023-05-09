// bai 1
function reverseString(string) {
	return string.split('').reverse().join('');
}

console.log(reverseString('Viết một function đảo ngược một string bất kỳ, sử dụng các phương thức của array.'))


// bai 2
function removeRepeatingElements(arr) {
	return arr.filter(function(element, index) {
		return arr.indexOf(element) == index;
	})
}

console.log(removeRepeatingElements([1, 2, 3, 5, 4, 2, 6, 4]));


// bai 3
function getItem(arr) {
	let value;
	let count = 0; 
	let acc = 0;
	for (let i = 0; i < arr.length; i++) {
		for (let j = i; j < arr.length; j++) {
			if (arr[i] == arr[j]) {
				acc++;
				if (acc > count) {
					count = acc;
					value = arr[i];
				}
			}
		}
		acc = 0;
	}
	return { value, count };
}

console.log(getItem([1, 2, 3, 5, 6, 4, 2, 1, 6, 3, 5, 3]));


// bai 4
import phoneBook from "./src-path.js"
const $ = document.querySelector.bind(document);
const $$ = document.querySelectorAll.bind(document);

// 4.1. sort phone book alphabetically
phoneBook.sort((a, b) => {
	return a.name.localeCompare(b.name);
});

// render phone book
let renderPhoneBook = phoneBook.map(element => {
	return `
	<div class="info-item">
	<span class="info-name">${element.name}</span>
	<span class="info-phoneNo">${element.phoneNo}</span>
	</div>
	`
});

$('.info').innerHTML = renderPhoneBook.join('');

// 4.2. add name & phoneNo
$('.add-btn').onclick = function() {
	let name = $('#name').value.trim();
	let phoneNo = $('#phoneNo').value.trim();

	let newUser = {
		name: name,
		phoneNo: phoneNo
	}

	phoneBook.push(newUser);

	phoneBook.sort((a, b) => {
		return a.name.localeCompare(b.name);
	});

	let addPhoneBook = phoneBook.map(element => {
		return `
		<div class="info-item">
		<span class="info-name">${element.name}</span>
		<span class="info-phoneNo">${element.phoneNo}</span>
		</div>
		`
	});
	
	$('.info').innerHTML = addPhoneBook.join('');
}

// 4.3. search name & phoneNo
$('.find-btn').onclick = function() {
	let search = $('#search').value.trim().toLowerCase();
	let searchPhoneBook = phoneBook.filter(element => {
		if (
			element.name.toLowerCase().includes(search)
		|| element.phoneNo.includes(search)
		) {
			return element;
		}
	})
	
	let filterPhoneBook = searchPhoneBook.map(element => {
		return `
		<div class="info-item">
		<span class="info-name">${element.name}</span>
		<span class="info-phoneNo">${element.phoneNo}</span>
		</div>
		`
	});
	
	$('.info').innerHTML = filterPhoneBook.join('');
}

// 4.4. delete duplicates
$('.delete-btn').onclick = function() {
	let uniqueContacts = [];
	let seenPhoneNo = {};
	phoneBook.forEach(element => {
		if (!seenPhoneNo[element.phoneNo]) {
			uniqueContacts.push(element);
			seenPhoneNo[element.phoneNo] = true;
		}
	})
	
	let deletePhoneBook = uniqueContacts.map(element => {
		return `
		<div class="info-item">
		<span class="info-name">${element.name}</span>
		<span class="info-phoneNo">${element.phoneNo}</span>
		</div>
		`
	});
	
	$('.info').innerHTML = deletePhoneBook.join('');
}