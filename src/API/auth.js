import axios from "./baseUrl2"

export function login(payload){
    return axios.post("/login", payload)
}