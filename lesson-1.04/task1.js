
// function volumeOfBox(size) {
//     return size.width*size.length*size.height;
// }

//  console.log(volumeOfBox({ width: 2, length: 5, height: 1 })) // 10

//  console.log(volumeOfBox({ width: 4, length: 2, height: 2 })) // 16

//  console.log(volumeOfBox({ width: 2, length: 3, height: 5 })) // 30


// function volumeOfBox(str) {
//     let count = 0;
//     for (let i = 0; i < str.length; i++) {
//         if (str[i] == "a" || str[i] == "e" || str[i] == "i" || str[i] == "o" || str[i] == "u") {
//             count++;
//         }

//     } 
//     return count;
// }
// console.log(volumeOfBox("Hello"))
// console.log(volumeOfBox("Aydan"))
// console.log(volumeOfBox("cat"))


// function volumeOfBox(str) {
//    str=str.split(" ")
//    let max=str[0].length;
//    for (let i = 0; i < str.length; i++) {
//     if (str[i].length>max) {
//         max=str[i].length;
//     }

//    }
//    return max;
// }
// console.log(volumeOfBox("Helloooooo aydan")) //10

// function getCapatalizeWord(str) {
//     str=str.split(" ");
//     for (let i = 0; i < str.length; i++) {
//         str[i]=str[i][0].toUpperCase() + str[i].slice(1);

//     }
//     return str.join(" ");
// }

// console.log(getCapatalizeWord("biz kenan mellimin telebeleriyik"));



// function volumeOfBox(str1, str2) {
//     str1 = str1.split("").sort();
//     str2 = str2.split("").sort();
//     return str1.toString() === str2.toString();

// }

// console.log(volumeOfBox("salam", "masal"));


// function selectOnlyUniqueChars(str) {
//     let result= [];
//     for (let i = 0; i < str.length; i++) {
//         if (str.indexOf(str[i]) === str.lastIndexOf(str[i])) {
//             result.push(str[i]);
//         }

//     }
//     return result
// }
// console.log(volumeOfBox("saaaaaalhhhhham"));


function createPerson(name, surname, age, callbackFn,callbackFn2) {
    let person = {
        name,
        surname,
        age
    }
    callbackFn(person)
    callbackFn2(person)
    return person;
}

function getFullName(person) {
    console.log(person.name + ' ' + person.surname);
}

function getBirthYear(person) {

    console.log(new Date().getFullYear()-person.age);
}

createPerson('jim', 'kerry', 54, getFullName,getBirthYear)


function getWord(str) {
    
}
