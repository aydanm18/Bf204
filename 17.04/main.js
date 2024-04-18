
import { BASE_URL } from "./constant.js";
import { deleteDataById } from "./services.js";
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
        <tr id="data-id">
    <td>${element.id}</td>
    <td>${element.companyName}</td>
    <td>${element.contactName}</td>
    <td>${element.contactName}</td>
    <td>${element.contactTitle}</td>
    <td><a class="btn btn-primary" href="detail.html?id=${element.id}">Details</a></td>
    <td> <button type="button" class="btn btn-success">Edit</button></td>
    <td><button type="button" class="btn btn-danger " id="delete-btn">Delete</button></td>
         </tr>
        `
     const deleteBtn=document.querySelectorAll("#delete-btn");
     deleteBtn.forEach((btn) =>{
        btn.addEventListener("click" , function () {
          this.closest("tr").getAttribute("data-id");
            Swal.fire({
                title: "Are you sure?",
                text: "You won't be able to revert this!",
                icon: "warning",
                showCancelButton: true,
                confirmButtonColor: "#3085d6",
                cancelButtonColor: "#d33",
                confirmButtonText: "Yes, delete it!"
              }).then((result) => {
                if (result.isConfirmed) {
                    deleteDataById(element.id);
                    this.closest("tr").remove();
                  Swal.fire({
                    title: "Deleted!",
                    text: "Your file has been deleted.",
                    icon: "success"
                  });
                }
              });
        })
     })
    });
}

getDate("suppliers").then((data) => {
    drawTable(data);
})
 


