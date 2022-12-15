import axios from './baseUrl';

export async function GetProduct(
  kategori,
  keyword,
  hargaTerendah,
  hargaTertinggi
) {
  return axios.get(
    `/produk/list?kategori=${kategori}&page=1&pageSize=100&keyword=${keyword}&hargaTerendah=${hargaTerendah}&hargaTertinggi=${hargaTertinggi}`
  );
}

export async function GetDetailProduct(uuid) {
  return axios.get(`/produk/detail/${uuid}`);
}

export async function GetKeranjang() {
  return axios.get(`/keranjang`);
}

export async function PostKeranjang(load) {
  return axios.post(`/keranjang/tambah`, load);
}

export async function DelKeranjang(id) {
  return axios.delete(`/keranjang/hapus/${id}`,);
}

export async function Beli(pay) {
  return axios.post(`/beli/tambah`, pay);
}
