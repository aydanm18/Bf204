

let arr = [
    {
        name: "test",
        key: 1,
    },
    {
        name: "task",
        key: 2,
    },
    {
        name: "tanqo",
        key: 3,
    },
    {
        name: "like",
        key: 4,
    },
    {
        name: "task",
        key: 5,
    },
    {
        name: "trust",
        key: 6,
    },
    {
        name: "test",
        key: 7,
    },
    {
        name: "last",
        key: 8,
    },
    {
        name: "tanqo",
        key: 9,
    },
    {
        name: "elephant",
        key: 10,
    },
    {
        name: "love",
        key: 11,
    },
    {
        name: "small",
        key: 12,
    },
    {
        name: "little",
        key: 13,
    },
];

// function newArr(array) {
//     return array.filter((element) =>element.name[0].toLocaleLowerCase()==='t')
// }
// console.log(newArr(arr))

// function newArr1(array) {
//     let counter = 0;
//     array.forEach(element => {
//         if (element.name[0] === 't' && element.name[element.name.length - 1] === 't') {
//             counter++;
//         }
//     });
//     return counter;
// }

// console.log(newArr1(arr))


// function newArr2(array) {
//     return array.filter((element) => element.name[0].toLocaleLowerCase() === 't' && element.name[element.name.length - 1] === 't').reduce(
//         (sum, element) => sum += element.key, 0)
// }
// console.log(newArr2(arr))


// arr.forEach(element => {
//     if (element.name[element.name.length - 1] === 'e') {
//         element.name = 'SuperDev'
//     }


// })

// console.log(arr)

// function newArr3(array) {
//     return array.sort((a, b) => a.name.length - b.name.length)[array.length - 1]
// }
// console.log(newArr3(arr))


// function newArray4(array) {
//     return array.sort((a, b) => a.name.length - b.name.length)[array.length - 1].key
// }
// console.log(newArray4(arr))

// function newArr5(array) {
// let max = 0;
// x = 0
// for (let i = 0; i < array.length; i++) {
//     if (array[i].name.length > max) {
//         max = array[i].name.length;
//         x = i
//     }

// }
// return x ** 2;

//     let max = 0;
//     x = 0
//     array.forEach((element, i) => {
//         if (element.name.length > max) {
//             max = element.name.length;
//             x = i
//         }

//     }); 


// function newArr6(array) {
//     return array.filter((element) => element.name.length > 4)
// }
//  console.log(newArr6(arr))

// function newArr7(array) {
//     return array.sort((a, b) => b.key - a.key)[0].name
// }
// console.log(newArr7(arr))


