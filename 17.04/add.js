import { addNewData } from "./services.js";

const form = document.querySelector("form");
const inputs = document.querySelectorAll(".form-control");

form.addEventListener("submit", function (e) {
    e.preventDefault();
    const suppliers = {
        companyName: inputs[0].value,
        address: {
            street: inputs[1].value,
            phone: inputs[2].value,
            city: inputs[3].value,
            country: inputs[4].value,
        }

    }
    addNewData(suppliers);
})


