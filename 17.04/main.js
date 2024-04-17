
import { BASE_URL } from "./constant.js";
async function getDate(endpoint) {
    const response = await fetch(`${BASE_URL}/${endpoint}`);
    const data = await response.json();
    return data;
}
// console.log(getDate("suppliers"));
function drawTable(array) {
    const tbody = document.querySelector("tbody")
    array.forEach(element => {

        tbody.innerHTML += `
        <tr>
    <td>${element.id}</td>
    <td>${element.companyName}</td>
    <td>${element.contactName}</td>
    <td>${element.contactName}</td>
    <td>${element.contactTitle}</td>
    <td><a class="btn btn-primary" href="detail.html?id=${element.id}">Details</a></td>
    <td> <button type="button" class="btn btn-success">Edit</button></td>
    <td><button type="button" class="btn btn-danger">Delete</button></td>
         </tr>
        `
    });
}

getDate("suppliers").then((data) => {
    drawTable(data);
})



