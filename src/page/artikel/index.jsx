import React from "react";
import Skeleton from "react-loading-skeleton";
import Button from "../../komponen/button";
import { useNavigate, Link } from "react-router-dom";
import { deleteArtikel, getAllArtikel } from "../../API/artikel";

export default function Artikel() {
  const [list, setList] = React.useState([]);
  const [isFetch, setIsFetch] = React.useState(false);
  const navigate = useNavigate();
  const getListHandle = async () => {
    try {
      setIsFetch(true);
      const response = await getAllArtikel();
      setList(response.data.data.data);
    } catch (err) {
      console.log(err);
    } finally {
      setIsFetch(false);
    }
  };
  React.useEffect(() => {
    getListHandle();
  }, []);

  return (
    <div>
      <div>
        <Link to="/tambahArt">
        <Button
          color="purple"
          title={"Tambah"}
        />
        </Link>
      </div>
      <h1></h1>
      <table className="table-auto w-[1000px]">
        <thead>
          <tr className="text-left border flex">
            <th className="mr-5">No</th>
            <th className="mr-5">Judul</th>
            <th className="mr-5">Thumbnail</th>
            <th className="mr-5">penulis</th>
            <th className="mr-5">Dibuat</th>
            <th className="mr-5">Diupdate</th>
            <th>Aksi</th>
          </tr>
        </thead>
        <tbody>
          {isFetch ? (
            <tr>
              <td colspan={9}>
                <Skeleton count={1} />
              </td>
            </tr>
          ) : (
            list.map((artikel, index) => {
              return (
                <tr key={index} className="border">
                  <td>{index + 1}</td>
                  <td>{artikel?.judul}</td>
                  <td>
                    <img src={artikel?.thumbnail} className="w-10 h-10" />
                  </td>
                  <td>{artikel?.user?.name}</td>
                  <td>{artikel?.created_at}</td>
                  <td>{artikel?.updated_at}</td>
                  <td>
                    {""}
                    <Button
                      onClick={() => {
                        return navigate(`/artikel/update/${artikel.slug}`);
                      }}
                      color="blue"
                      title={"Edit"}
                    />
                    <Button
                      onClick={async() => {
                        console.log("delete jalan");
                        const response = await deleteArtikel(artikel.id)
                        console.log(response.data)
                        try {
                          if (response.data.status === "Fail") {
                            alert('gagal')
                          }
                          else {
                            alert('berhasil')
                          }
                          getListHandle()
                        }
                        catch (err){
                          console.log(err);
                        }
                      }}
                      color="red"
                      title={"Delete"}
                    />
                     <Button
                      onClick={() => {
                        return navigate(`/detail/${artikel.slug}`)
                        console.log("delete jalan");
                      }}
                      color="purple"
                      title={"view"}
                    />
                  </td>
                </tr>
              );
            })
          )}
        </tbody>
      </table>
    </div>
  );
}
