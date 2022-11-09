import Cookies from "js-cookie";
import axios from "./baseUrl2";
import { syncToken } from "./baseUrl2";

export function login(payload) {
  return axios.post("/login", payload);
}
export function register() {
  return axios.post("/register");
}

export function authMeProcess(payload) {
  syncToken();
  return axios.get("/authme", {
    headers: {
      Authorization: `Bearer ${Cookies.get("myapps_token")}`
    }
  })
}
