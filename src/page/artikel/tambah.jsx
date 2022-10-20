import React from "react";
import Input from "../../komponen/input";
import Button from "../../komponen/button";
import { useNavigate } from "react-router-dom";
import { createAllArtikel } from "../../API/artikel";
export default function Tambah() {
  const [payload, setPayload] = React.useState({
    judul: "",
    thumbnail: "",
    artikel: "",
    imagePreview: null,
  });
  const [isLoading, setIsLoading] = React.useState(false);
  const navigate = useNavigate();
  const handleChange = (e) => {
    setPayload((payload) => {
      return {
        ...payload,
        [e.target.name]: e.target.value,
      };
    });
  };

  const handleSubmit = async (e) => {
    try {
      setIsLoading(true)
      e.preventDefault()
      alert("berhasil")
      const response = await createAllArtikel (payload)
      return navigate("/artikel", {replace: true})
    } catch (err) {
      console.log(err);
    }
  }

  return (
    <form onSubmit={handleSubmit}>
      <Input
        value={payload.judul}
        label={"Judul"}
        name="judul"
        onChange={handleChange}
      />
      <Input
        value={payload.artikel}
        label={"Artikel"}
        name="artikel"
        onChange={handleChange}
      />
      <Input
        value={payload?.file}
        label={"thumbnail"}
        name="thumbnail"
        type="file"
        onChange={(e) => {
          console.log("event", e.target.files[0]);
          let file = e.target.files[0];
          // if (file.size > 200000) {
          //   return alert("ukuran lebih dari 200 kb");
          // }
          if (
            file.type === "image/jpeg" ||
            file.type === "image/png" ||
            file.type === "image/gif" ||
            file.type === "application/pdf"
          ) {
            let reader = new FileReader();
            reader.readAsDataURL(file);
            reader.onloadend = () => {
              setPayload((payload) => {
                return {
                  ...payload,
                  imagePreview: reader.result,
                  thumbnail: file,
                };
              });
            };
            console.log("pas banget");
          } else {
            return alert("file harus image/pdf");
          }
        }}
      />
      <img src={payload.imagePreview} alt={payload.imagePreview} />
      <br />
      <Button title={"simpan"} />
      <Button
        title={"back"}
        color="blue"
        onClick={() => {
          navigate("/artikel", { replace: true });
        }}
      />
    </form>
  );
}
