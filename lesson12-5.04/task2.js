const body = document.body;

const students = [
    "Aytac",
    "Aysel",
    "Zakir",
    "Aydan",
    "Farid",
    "Ilvin",
    "Ilqar",
];


const wrapper = document.querySelector(".wrapper");
const studentsList = document.createElement("ul");
students.forEach((item) => {
    const liItem = document.createElement("li");
    liItem.textContent = item;
    studentsList.appendChild(liItem);
    liItem.addEventListener('click', function () {
        this.remove();
    })
});

wrapper.appendChild(studentsList);
body.append(wrapper)