import React from "react";
import axios from "axios";
import { Link, useNavigate } from "react-router-dom";
import Button from "../komponen/button";
import Swal from "sweetalert2";
import Skeleton from "react-loading-skeleton";
import { getAllUser, del } from "../API/usr";
import Cookies from "js-cookie";
import { useSelector, useDispatch } from "react-redux";
import { increment, decrement } from "../redux/action/countAction";

export default function User() {
  const [users, setUsers] = React.useState([]);
  //state untuk menyimpan data user dari api
  const [page, setPage] = React.useState(100);
  const [isPageUser, setIsPageUser] = React.useState(false);
  const store = useSelector((state) => state);
  const count = useSelector((state) => state.count);
  const dispatch = useDispatch();
  console.log("store =>", store);
  console.log("count =>", count);

  let navigate = useNavigate();

  const getUserHandle = async () => {
    try {
      setIsPageUser(true);
      const response = await getAllUser(page);
      console.log("response => ", response.data);
      setUsers(response.data.data);
    } catch (err) {
      console.log("user =>", users);
      console.log("page =>", page);
      console.log(err);
    } finally {
      setIsPageUser(false);
    }
  };

  const deleteUserHandle = (id) => {
    Swal.fire({
      title: "هل تريد حذفه؟",
      text: "لن تتمكن من التراجع عن هذا!",
      icon: "question",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "نعم ، احذفها",
      cancelButtonText: "لا",
    }).then(async (result) => {
      if (result.isConfirmed) {
        try {
          const respone = await del(id);
          console.log("نعم ، احذفها");
          getUserHandle();
          Swal.fire("Deleted!", "Your file has been deleted.", "success");
        } catch (error) {
          Swal.fire("Failed!", "Failed to delete.", "error");
        }
      }
    });
    console.log("delete berjalan", id);
  };

  console.log("user => ", users);
  console.log("page => ", page);

  React.useEffect(() => {
    getUserHandle();
  }, [page]);

  return (
    <div>
      <h1 className="text-xl text-blue-600">User</h1>
      <div className="flex space-x-3 mb-4">
      <Link to="/user/create">
        <Button title={"+ User"}/>
      </Link>
      <div className="text-white">
        <Button
          title={"Log out"}
          onClick={() => {
            Cookies.remove("myapps_token");
            return navigate("/login", { replace: true });
          }}
        />
      </div>
      <Link to="/artikel">
        <Button title={"back"}/>
      </Link>
      </div>
      <table className="table-auto center">
        <thead>
          <tr className="text-left border">
            <th className="pr-5">No</th>
            <th className="pr-15">Username</th>
            <th className="pr-15">Nama</th>
            <th className="pr-5">Email</th>
            <th className="pr-5">Jenis Kelamin</th>
            <th className="pr-5">Di Buat</th>
            <th className="pr-5">Di Update</th>
            <th className="pr-5">Aksi</th>
          </tr>
        </thead>
        <tbody>
          {isPageUser ? (
            <tr>
              <td colSpan={9}>
                <Skeleton baseColor="white" highlightColor="grey" count={5} />
              </td>
            </tr>
          ) : (
            users.map((user, index) => {
              return (
                <tr key={index} className="border">
                  <td>{index + 1}</td>
                  <td>{user.username}</td>
                  <td>{user.name}</td>
                  <td>{user.email}</td>
                  <td>{user.jenis_kelamin}</td>
                  <td>{user.stored_at}</td>
                  <td>{user.updated_at}</td>
                  <td>
                    <Button
                      onClick={() => {
                        return navigate(`/user/update/${user.id}`);
                      }}
                      color="blue"
                      title={"edit"}
                    />
                    <Button
                      onClick={() => {
                        deleteUserHandle(user.id);
                      }}
                      color="red"
                      title={"Delete"}
                    />
                  </td>
                </tr>
              );
            })
          )}
        </tbody>
      </table>
      <div className="border grid grid-cols-1 gap-5 mt-3">
        {/* <Button 
        color="blue" 
        title={"CHANGE"} 
        onClick={()=>{
          dispatch({
            type: "change",
            color: "#0008C1"
          })
        }}
        />
        <Button 
        color="yellow" 
        title={"CHANGE"} 
        onClick={()=>{
          dispatch({
            type: "change",
            color: "#FFFF00"
          })
        }}/>
        <Button 
        color="green" 
        title={"SPIRIT"} 
        onClick={()=>{
          dispatch({
            type: "return",
            color: "#FF1E1E"
          })
        }}/> */}
        <Button color="green" title={'green'} onClick={() => {
          dispatch({
            type: "change",
            color: "#7CFC00"
          })
        }}/>
        <Button color="purple" title={'purple'} onClick={() => {
          dispatch({
            type: "change",
            color: "#533483"
          })
        }}/>
        <Button title={'return'} onClick={() => {
          dispatch({
            type: "return"
          })
        }}/>
        <p>status: {count.status}</p>
        <p>value: {count.value}</p>
        <Button
          color="purple"
          title={"Tambah"}
          onClick={() => {
            dispatch(increment());
          }}
        />
        <Button
          title={"Kurang"}
          onClick={() => {
            dispatch(decrement());
          }}
        />
      </div>
    </div>
  );
}
