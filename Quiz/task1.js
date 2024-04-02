// function Human(name, surname, age, isMale = true) {
//     this.name = name;
//     this.surname = surname;
//     this.age = age;
//     this.isMale = isMale;
//     this.getFullName = function () {
//         let str = surname.chatAt(0).toUpperCase() + ',' + name.toUpperCase();
//         this.fullname = str;
//         return this.fullname;
//     }
//     // this.getFullName();
// }

// function Student(university, faculty, major, degree, course, gpa = 0) {
//     this.university = university;
//     this.faculty = faculty;
//     this.major = major;
//     this.degree = degree;
//     this.course = course;
//     this.gpa = gpa;

//     this.studentID = function () {
//         var id = this.university.slice(0, 3).toUpperCase() + this.faculty.slice(0, 2).toUpperCase() + Math.floor(Math.random() * 9000) + 1000;
//         return id;
//     };
// }

// let student = new Student("BDU", "IT", "Developer", 3, 9, 1);
// Object.setPrototypeOf(student, new Human("Aydan", "Babayeva", 20, false));
// let student1 = new Student("AZTU", "CS", "Developer", 3, 8, 3);
// Object.setPrototypeOf(student, new Human("Aylin", "Babayeva", 20, false));
// let student2 = new Student("BANM", "CS", "Developer", 3, 7, 5);
// Object.setPrototypeOf(student, new Human("Aydan", "Babayeva", 20, false));
// let student3 = new Student("BDU", "IT", "Programming", 3, 6, 7);
// Object.setPrototypeOf(student, new Human("Aydan", "Babayeva", 20, false))
// let student4 = new Student("BDU", "IT", "Programming", 3, 5, 9);
// Object.setPrototypeOf(student, new Human("Aydan", "Babayeva", 20, false))


// let array = [student, student1, student2, student3, student4]
// function searchStudent(array) {
//     let newArray = [];
//     for (let i = 0; i < newArray.length; i++) {
//         if (newArray[i].gpa > 3 && newArray[i].university.toLowerCase() == "bdu" && newArray[i].faculty.toLowerCase == "IT" || newArray[i].faculty.toLowerCase == "Programming") {
//             array.push(newArray[i])
//         }
//         return newArray;
//     }
// }
// console.log(student);
// console.log(student1);
// console.log(student2);
// console.log(student3);
// console.log(student4)












































