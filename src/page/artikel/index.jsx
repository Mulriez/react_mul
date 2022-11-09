import React from "react";
import Skeleton from "react-loading-skeleton";
import Button from "../../komponen/button";
import { useNavigate, Link } from "react-router-dom";
import { deleteArtikel, getAllArtikel } from "../../API/artikel";
import { useSelector } from "react-redux";

export default function Artikel() {
  const [list, setList] = React.useState([]);
  const [isFetch, setIsFetch] = React.useState(false);
  const nama = useSelector((state) => state.authProcess.name);
  const email = useSelector((state) => state.authProcess.email);
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
  const getUser = async () => {
    try {
    } catch (error) {}
  };
  return (
    <div>
      <div className="space-x-3 mt-5">
        <Link to="/tambahArt">
          <Button color="purple" title={"Tambah"} />
        </Link>
        <Link to="/user">
          <Button color="blue" title={"user"} />
        </Link>
      </div>
      <div className=" bg-slate-500 text-white w-40 rounded-md mt-5 mb-5 mr-5">
        <h1>Who is Login:</h1>
        <h3>{nama}</h3>
        <h3>{email}</h3>
      </div>
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
                      onClick={async () => {
                        console.log("delete jalan");
                        const response = await deleteArtikel(artikel.id);
                        console.log(response.data);
                        try {
                          if (response.data.status === "Fail") {
                            alert("gagal");
                          } else {
                            alert("berhasil");
                          }
                          getListHandle();
                        } catch (err) {
                          console.log(err);
                        }
                      }}
                      color="red"
                      title={"Delete"}
                    />
                    <Button
                      onClick={() => {
                        return navigate(`/detail/${artikel.slug}`);
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
