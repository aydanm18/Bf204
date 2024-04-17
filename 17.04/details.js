const url=new URLSearchParams(window.location.search);
import { BASE_URL } from "./constant.js";
const wrapperCard=document.querySelector(".wrapper")
const loadingOverlay=document.querySelector(".loading-overlay")
const id=url.get("id");
async function getDate(endpoint , id) {
  try {
    loadingOverlay.classList.remove("d-none")
    const response = await fetch(`${BASE_URL}/${endpoint}/${id}`);
    const data = await response.json();
    drawCard(data);

    console.log(data);
  } catch (error) {
    console.log(error)
  }finally{
    loadingOverlay.classList.add("d-none")

  }
}
 getDate("suppliers" , id)
function drawCard(data) {
  
    wrapperCard.innerHTML=`
    <div class="card" style="width: 18rem;">
    <div class="card-body">
      <h5 class="card-title">${data?.companyName}</h5>
      <p class="card-text">${data?.contactName}</p>
      <p class="card-text">${data?.contactName} , ${data?.contactTitle} </p>
      <a href="task.html" class="btn btn-primary">Go Back</a>
    </div>
  </div>

    `
}

