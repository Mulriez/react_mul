import React from "react";
import { detail } from "../../API/artikel";
import { useNavigate, useParams } from "react-router-dom";
import Button from "../../komponen/button";

export default function Detail() {
  let { slug } = useParams();
  let navigate = useNavigate()
  const [users, setUsers] = React.useState({
    judul: "",
    thumbnail: "",
    artikel: "",
    imagePreview: null,
  });
  const getDetailArticle = async () => {
    try {
      const response = await detail(slug);
      const dataArtikel = response.data.data;
      console.log(dataArtikel);
      setUsers(() => {
        return {
          judul: dataArtikel.judul,
          thumbnail: dataArtikel.thumbnail,
          artikel: dataArtikel.artikel,
          imagePreview: null,
        };
      });
    } catch (error) {}
  };
  React.useEffect(() => {
    getDetailArticle();
  }, []);

  return (
    <React.Fragment>
      <h1 className="text-center mb-5 mt-3 text-xl">Detail Artikel dengan slug ({slug})</h1>
      <div className="flex justify-evenly border">
      <div>
          <h1 className="text-xl">Judul</h1>
          <p>{users.judul}</p>
          <h1 className="mt-5 text-xl">Artikel</h1>
          <p>{users.artikel}</p>
        </div>
        <div>
          <img src={users.thumbnail} className="w-40 h-40" />
        </div>
      </div>
      <div >
      <Button
      title={"back"}
      onClick={() => {
        navigate("/artikel", { replace: true });
      }}
      />
      </div>
    </React.Fragment>
  );
}
