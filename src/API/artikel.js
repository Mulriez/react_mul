import axios from "./baseUrl2";

export async function getAllArtikel() {
    return axios.get(`/artikel`)
}

export async function createAllArtikel(payload) {
    console.log("sended",payload);

   const formData = new FormData()
   formData.append('judul', payload.judul)
   formData.append('artikel', payload.artikel)
   formData.append('thumbnail', payload.thumbnail)

    return axios.post(`/artikel`, formData)
}


