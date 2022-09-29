import axios from './baseUrl';

export async function getAllUser(pageSize = 10){
    return axios.get(`/users/${pageSize}`)
}

export async function createUser(payload) {
    return axios.post(`/users/create`, payload)
}

export async function update(id, payload) {
    return axios.put(`/users/update/${id}`, payload)
}

export async function detail(id, x) {
    return axios.get(`/users/detail/${id}`, x)
}

export async function del(id) {
    return axios.delete(`/users/hapus/${id}`)
}