`use strict;`

// 1. ციკლის საშუალებით გამოიტანეთ რიცხვები 5დან - 100მდე
let i = 5;
for (let i = 5; i < 100; i++) console.log(i);

// 2. მოცემულია მასივი:
// let array1= [1, 2, 4, -1, -3, 8, 7, 0, -5, 18, 12];
// ციკლის საშუალებით გამოიტანეთ მხოლოდ ის რიცხვები რომლებიც მეტია 0 ზე და ნაკლებია 10ზე

let array1 = [1, 2, 4, -1, -3, 8, 7, 0, -5, 18, 12];

for (let itm of array1) {
	if (itm > 0 && itm < 10) {
		console.log(itm);
	}
}

// 3. მოცემულია მასივი
// let array2 = [1, 2, 3, 4, 5, 6, 7, 8, 9];
// ციკლის საშუალებით შეამოწმეთ, თუ ამ მასივში არის რიცხვი 5 - მაშინ დალოგეთ - ‘არის’ და გააჩერეთ ციკლი

let array2 = [1, 2, 3, 4, 5, 6, 7, 8, 9];

for (let itm2 of array2) {
	if (itm2 === 5) {
		console.log(`არის`);
		break;
	}
}

// 4.  მოცემულია მასივი:
//    let array3= [1, 2, 3, 4, 5];
//    ციკლის საშუალებით გამოთვალეთ რიცხვების ჯამი

let array3 = [1, 2, 3, 4, 5];
let sum = 0;

for (let itm3 of array3) {
	sum += itm3;
}

console.log(sum);

// 5. მოცემულია მასივი:
// let array4= [1, 2, 3, 4, 5];
// ციკლის საშუალებით გამოთვალეთ საშუალო არითმტიკული (ჯამი გავყოთ ელემნტების რაოდენობაზე)

let array4 = [1, 2, 3, 4, 5];
sum1 = 0;

for (let num of array4) {
	sum1 += num;
}

let average = sum1 / array4.length;
console.log(average);

// 6. მოცემულია მასივი
// გამოიტანეთ ყველა რიცხვი 7 ის გარდა ( continue)
//  let array5 = [1, 2, 3, 7, 6, 9];

let array5 = [1, 2, 3, 7, 6, 9];

for (let num1 of array5) {
	if (num1 === 7) continue;
	console.log(num1);
}

// 7.

let user1 = {
	firstName: "Giorgi",
	lastName: `Smith`,
	age: 25,
	studentStatus: `active`,
};

console.log(user1.studentStatus);

// 8.

let user = {
	name: "anna",
	age: 20,
	studentStatus: "active",
};

if (user.studentStatus === "active" && user.age < 18) {
	console.log("hello anna");
} else if (user.name === "Levani") {
	console.log("hello Levani");
} else if (user.studentStatus === "active" || user.age < 25) {
	console.log("hello anna");
} else {
	console.log("error");
}

// .ternary operator

const message =
	user.name === "Levani"
		? "Hello Levani"
		: user.studentStatus === "active" || user.age < 25
		? "Hello anna"
		: "error";
console.log(message);

//  9. მოცემულია მასივი:
// let array6 = [ 2, 3, 5, 10,25,24,11, 100 , 6,7, 10 ]
// ამოიღეთ მხოლოდ ლუწი რიცხვები

// შესრულება
let array6 = [2, 3, 5, 10, 25, 24, 11, 100, 6, 7, 10];

const isEven = array6.filter((number) => number % 2 === 0);
console.log(isEven);

// 10.
//  მოცემულია მასივი
// let users = [
//     {username: 'giorgi', status: false},
//     {username: 'levani', status: false},
//     {username: 'anna', status: true}
// ]
// კონსოლში გამოიტანეთ მარტო ის ობიექტი, რომლის status property-ის მნიშვნელობა არის true;

let users = [
	{ username: "giorgi", status: false },
	{ username: "levani", status: false },
	{ username: "anna", status: true },
];

let trueStatusUsers = [];

users.forEach((user) => {
	user.status === true ? trueStatusUsers.push(user) : null;
});

console.log(trueStatusUsers);

// 11. Მოცემული მასივიდან ამოიღეთ მხოლოდ ციფრები, რომლებიც 5-ის ჯერადია:
// Let array7 = [32, 14, 10, ‘hello’, null, ‘40’, 50];

let array7 = [32, 14, 10, "hello", null, "40", 50];

const multiplesOf5 = array7.filter(
	(Element) => typeof Element === "number" && Element % 5 === 0
);

console.log(multiplesOf5);

// 12.Მოცემული მასივიდან კონსოლში გამოიტანეთ მხოლოდ დადებითი რიცხვები:

let array8 = [
	[2, -3, 5, 11],
	[1, -35, -11],
	[12, -36, -24],
];
let positiveNumbers = array8.map((subArray) =>
	subArray.filter((number) => number > 0)
);
let positiveNumbersFlat = positiveNumbers.flat();

console.log(positiveNumbersFlat);
