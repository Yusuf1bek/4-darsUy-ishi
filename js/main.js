// Uy ishi

// task -1
// let userNumber = prompt("3 xonali son kiriting");


// if (userNumber >= 100 && userNumber <= 999) {
//     let hundreds = Math.floor(userNumber / 100);
//     let tensNumber = Math.floor((userNumber % 100) / 10);
//     let unitsNumber = userNumber % 10;
//     let total = hundreds + unitsNumber;
//     let difference = total - tensNumber;
//     console.log("Birinchi va uchinchi raqamlarning yig'indisi: " + total);
//     console.log("Ikkinchi raqamning yig'indisi dan: " + difference + " marta katta");
// } else {
//     console.log("3 xonali son kiriting");
// }
// task -1

// task -2
// let numberUser = prompt("Son kiriting ?");

// if ((numberUser) && numberUser > 0) {
//     let total = 0;
//     for (let i = 1; i <= numberUser; i++) {
//         if (numberUser % i === 0) {
//             total += i;
//         }
//     }
//     alert("Sizning sonningiz bo'luvchilari yig'indisi: " + total);
// } else {
//     alert("Son kiriting");
// }
// task -2

// task -3
// let arr = [true, "Salom", 23, undefined];

// for (let i = 0; i < arr.length; i++) {
//     if (typeof arr[i] === "string") {
//         arr[i] = null;
//     }
// }
// console.log(arr);
// task -3

// task -4
// let arr = [2, 3, 4, 52, 2, 3, 4, 53, 2, 23, 43, 2];

// let maxNumber = arr[0];

// for (let i = 1; i < arr.length; i++) {
//     if (arr[i] > maxNumber) {
//         maxNumber = arr[i];
//     }
// }
// console.log(maxNumber);
// task -4

// task -5
// let arr = [54, 32, 76, 12, 22];
// let total = 0;

// for (let i = 0; i < arr.length; i++) {
//     total += arr[i];
// }
// console.log(total);
// task -5

// task -6
// let arr =[1,2,3,4,5,6,7,8,9,10]

// for(let i=0; i < arr.length; i++){
//     if(arr[i] % 2 === 0){
//         arr[i] = 0
//     }
// }
// console.log(arr);
// task -6

// task -7
// let firstNum = prompt("Birinchi son kiriting") -0
// let action = prompt ("Action ( + - * / )") 
// let secondNum = prompt("Ikkinchi son kiriting")-0

// switch (action){
//     case "+" : 
//         console.log(firstNum + secondNum); 
//         break;
//     case "-" :
//         console.log(firstNum - secondNum);
//         break;
//     case "*" :
//         console.log(firstNum * secondNum);
//         break;
//     case "/" :
//         console.log(firstNum / secondNum);
//         break;
// }
// task -7

// task -8
// let userName = prompt("Ism kiriting")
// let arr = ["Komiljon","Yusufbek","Shahboz","Hojiakbar"]
// let isNotFoundName = 0
// for(let nic of arr){
//     switch(userName.toLowerCase()){
//         case nic.toLowerCase():
//             alert("Siz kiritngan ism " + nic);
//             break;
//         default:
//             isNotFoundName++
//     }
// }
// console.log(isNotFoundName == arr.length && "Siz kiritigan ism bu royxata yoq");
// task -8

// task -9
// let users = [
//     {   id: 1, 
//         age: 19, 
//         name: "Yusufbek", 
//         gmail: "yusufbek@gmail.com" 
//     },
//     {   id: 2, 
//         age: 18, 
//         name: "Komiljon", 
//         gmail: "komiljon@gmail.com" 
//     },
//     {   id: 3, 
//         age: 15, 
//         name: "Hojiakbar", 
//         gmail: "@gmhojiakbarail.com" 
//     },

// ];

// let inputName = prompt("Ism kiriting !");

// let found = false;

// for (let user of users) {
//     switch (user.name) {
//         case inputName:
//             console.log("ID: " + user.id);
//             console.log("Yoshlari: " + user.age);
//             console.log("Ismlari: " + user.name);
//             console.log("Gmail: " + user.gmail);
//             found = true;
//             break;
//         default:
//             break;
//     }
// }

// if (!found) {
//     console.log("Bunday ism royxata yoq");
// }
// task -9

// task -10
// let users = [
//     {   id: 1, 
//         age: 19, 
//         name: "Yusufbek", 
//         gmail: "yusufbek@gmail.com" 
//     },
//     {   id: 2, 
//         age: 18, 
//         name: "Komiljon", 
//         gmail: "komiljon@gmail.com" 
//     },
//     {   id: 3, 
//         age: 15, 
//         name: "Hojiakbar", 
//         gmail: "@gmhojiakbarail.com" 
//     },

// ];

// let userAge = users[0];

// for (let user of users) {
//     switch (true) {
//         case (user.age > userAge.age):
//             userAge = user;
//             break;
//         default:
//             break;
//     }
// }
// console.log("Yoshi kotta foydanaluvchi:");
// console.log("ID: " + userAge.id);
// console.log("Yosh: " + userAge.age);
// console.log("Ism: " + userAge.name);
// console.log("Gmail: " + userAge.gmail);
// task -10

// task -13
// let arr = [23, 54, 21, 76, 23, 87,];

// let valueFirst = arr[0];
// let valueLast = arr[arr.length - 1];

// if (typeof valueFirst === 'number' && typeof valueLast === 'number') {
//     let total = valueFirst + valueLast;
//     if (total % 2 === 0) {
//         arr.unshift(total);
//     } else {
//         arr.push(total);
//     }
// } else {
//     console.log("Arrayda notog'ri qiymat berilgan");
// }
// console.log(arr);
// task -13

// task -14
// let arr = [8,7,6,5,4]
//     console.log(arr.reverse());
// task -14

// Uy ishi