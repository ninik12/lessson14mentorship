//not primitive values
//array -მასივი

// let userName = ['mariami', 'anna', ['ნიკა', 'ბექა'], 'nini'];
//               //   0          1           2            3                          

// console.log(userName[1]);
// console.log(userName.length); //გვიჩვენებს რამდენი მნიშნელობისგან შედგება მასივი
// console.log(userName[userName.length - 1]); //ამ ჩანაწერით მასივის ათვლას ვიწყებთ ბოლოდან ანუ მარჯვნიდან
// console.log(userName[2][0]);


// let user = 'anna'
// console.log(user.length); //გვიჩვენებს რამდენი ასოსგან/სიმბოლოსგან შედგება სტრინგი

// //ობიექტi object
// let userInfo = {
//     // key: value
//     userStudent: 'nika',
//     userAge: 25,
//     userStatus: true,
//     userPhone : {
//         code:598,
//         phone: 125373,
//     },
//     userHobbies: ['music', 'dance', 'reading'],
//     userComment: [
//         {
//             id: 1,
//             comment: 'hello 1'
//         },
//         {
//             id: 2,
//             comment: 'hello 2' 
//         }
//     ],
// };


// //dot notation
// console.log(userInfo.userStudent);
// console.log(userInfo.userPhone.phone);
// console.log(userInfo.userHobbies[1]);
// console.log(userInfo.userComment[0].comment);

// //bracket notation
// console.log(userInfo['userStatus']);
// console.log(userInfo['userPhone']['phone']);
// console.log(userInfo['userHobbies'][1]);
// console.log(userInfo['userComment'][0]['comment']);




//ციკლი loop -array

let namesStudents = ['anna', 'mariami', 'luka', 'nini', 'nika']

//1. for loop
// for(let item = 0; item < namesStudents.length; item++){
//     console.log(namesStudents[item]);
// }
// for (let index = 0; index < namesStudents.length; index++) {
//     const element = namesStudents[index];
//     console.log(element);

// }


//2. while loop
// let index = 0;
// while (index < namesStudents.length){
//     console.log(namesStudents[index]);
//     index++; 
// }

//3. for of
// for (let element of namesStudents){
//     console.log(element); 
// }


//4. for in
// for (let key in namesStudents){
//     console.log(key);
// }

let numbersArray = [15, 36, 24, 10, 6, 39];


for (let number of numbersArray) {
    if (number > 20) {
        console.log(number);
    }
}

for (let index = 0; index < numbersArray.length; index++) {
    const element = numbersArray[index];
    if (element > 20) {
        console.log(element);
    }
}

let languages = ['html', 'javascript', 'boostrap', 'css'];

for (let item of languages) {
    if (item.length > 5) {
        console.log(item);
    }
}

let nestedArray = [[10, 25], [36, 24, 7], [82, 100]];

for (let index = 0; index < nestedArray.length; index++) {
    const element = nestedArray[index];
    // console.log(element);
    for (let item = 0; item < element.length; item++) {
        const value = element[item];
        // console.log(value);
    }
}
for (let item of nestedArray) {
    for (let el of item) {
        // console.log(el);

    }
}


//break & continue

let numberNew = [25, 36, 17, 28, 4]

for (let item of numberNew) {
    // console.log(item);
    if (item === 17) {
        break;  //ამ შემთხვევაში ციკლი ჩერდება 17-ზე და 17-საც არ დაგვიბეჭდავს
    }
    // console.log(item); //25, 36
}
for (let el of numberNew) {
    if (el === 17) {
        continue  //ამ შემთხვევაში დაბეჭდავს ყველას გარდა 17-ისა
    }
    console.log(el); //25, 36, 28, 4

}

let newObj = {
    userName: 'ana',
    userAge: 19,
}

let printResult = newObj.userName + " " + 'არის' + " " + newObj.userAge + " " + 'წლის'
console.log(printResult);

let printResult2 = `${newObj.userName} არის ${newObj.userAge} wlis.`
console.log(printResult2);


//functions
//1. function declaration
function newfnc1() {
    console.log('hello');
}
newfnc1();


//2. function expression
let testfnc2 = function() {
    console.log('hello new friend');
}

testfnc2();

//3. arrow function
let testFnc3 = () => {
    console.log('hello 3');
    
}
testFnc3();