// 1. ციკლის საშუალებით გამოიტანეთ რიცხვები 5დან - 100მდე
// let i=5;
// for (let i=5; i<100; i++)
// console.log(i);

// 2. მოცემულია მასივი:
// let array1= [1, 2, 4, -1, -3, 8, 7, 0, -5, 18, 12];
// ციკლის საშუალებით გამოიტანეთ მხოლოდ ის რიცხვები რომლებიც მეტია 0 ზე და ნაკლებია 10ზე


// let array1= [1, 2, 4, -1, -3, 8, 7, 0, -5, 18, 12];

// for (let itm of array1) {
//     if (itm > 0 && itm < 10) {
//         console.log(itm);
//     }
// }

// 3. მოცემულია მასივი
// let array2 = [1, 2, 3, 4, 5, 6, 7, 8, 9];
// ციკლის საშუალებით შეამოწმეთ, თუ ამ მასივში არის რიცხვი 5 - მაშინ დალოგეთ - ‘არის’ და გააჩერეთ ციკლი

// let array2 = [1, 2, 3, 4, 5, 6, 7, 8, 9];

// for (let itm2 of array2){
//     if (itm2===5){
//         console.log(`არის`)
//         break;
//     } 
//    }

// 4.  მოცემულია მასივი:
//    let array3= [1, 2, 3, 4, 5];
//    ციკლის საშუალებით გამოთვალეთ რიცხვების ჯამი
   

// let array3= [1, 2, 3, 4, 5];
// let sum=0;

// for (let itm3 of array3){
//      sum+=itm3;
//     };
    
// console.log(sum);

	
// 5. მოცემულია მასივი:
// let array4= [1, 2, 3, 4, 5];
// ციკლის საშუალებით გამოთვალეთ საშუალო არითმტიკული (ჯამი გავყოთ ელემნტების რაოდენობაზე)

// let array4= [1, 2, 3, 4, 5];
// sum1=0;

// for (let num of array4) {
//     sum1+=num;
// }

//  let average=sum1/array4.length;
// console.log(average);

// 7. მოცემულია მასივი
// გამოიტანეთ ყველა რიცხვი 7 ის გარდა ( continue)
//  let array5 = [1, 2, 3, 7, 6, 9];

let array5 = [1, 2, 3, 7, 6, 9];

for(let num1 of array5) {
    if (num1===7)
    continue;
    console.log(num1);
}



