import { BASE_URL } from "./constant.js";
const endpoint = "/suppliers"
export async function deleteDataById(id) {
    try {
        const response=await axios.delete(BASE_URL+endpoint+`/${id}`);
        return response;
    } catch (error) {
        console.log(error.message);
    }
}

export async function addNewDate(obj) {
    const response=await axios.post(`${BASE_URL}`)
}