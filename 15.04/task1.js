let form = document.querySelector("form");
let allInputs = document.querySelectorAll(".form-control");

class User {
    constructor(username, email, password) {
        this.username = username;
        this.email = email;
        this.password = password;
        this.id = new Date().getTime();
    }
}

let allUsers = getFromLocalStorage() || [];

form.addEventListener("submit", (e) => {
    e.preventDefault();
let bool=allUsers.some()
    let userObj = new User(
        allInputs[0].value,
        allInputs[1].value,
        allInputs[2].value
    );
    allUsers.push(userObj);
    setToLocalStorage(allUsers);
    allInputs.forEach((item) => (item.value = ""));
    window.location='login.html'
});

function setToLocalStorage(arr) {
    localStorage.setItem("allUsers", JSON.stringify(arr));
}

function getFromLocalStorage() {
    return JSON.parse(localStorage.getItem("allUsers"));
}
