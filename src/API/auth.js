import Cookies from "js-cookie";
import client from "./baseUrl";
import { syncToken } from "./baseUrl";

export function login(payload) {
  return client.post("/login", payload);
}
export function register(payload) {
  return client.post("/register", payload);
}

export function resetProses(id, token, payload) {
  return client.post(`/reset-password/${id}/${token}`, payload);
}

export function forgotProses(payload) {
  return client.post("/lupa-password", payload);
}

export function authMeProcess(payload) {
  syncToken();
  return client.get("/authme");
}
