import React from "react"
import Input from "../komponen/input"
import Button from "../komponen/button"
import Select from "../komponen/select"
import axios from "axios"
import { useNavigate, Link } from "react-router-dom"

export default function CreateUser(){
    let navigate = useNavigate()

    const [isLoading,setIsLoading] = React.useState(false)
    let [MsgError,setMsgError] = React.useState('')
    const [errorz,setErrorz] = React.useState({})
    const [users,setUsers] = React.useState({
        username:"",
        email:"",
        name: "",
        jenis_kelamin:"",
        password:"",
        password_confirmation:"",
    });

    const handleChange = (e) => {
        setUsers((users) => {
          return {
            ...users,
            [e.target.name]: e.target.value,
          };
        });
      };

      const handleSubmit = async (e) => {
        e.preventDefault()
        console.log(users)
        try{
            setIsLoading(true);
            const response = await axios.post("https://belajar-react.smkmadinatulquran.sch.id/api/users/create", users) 
            setIsLoading(false);
            return navigate ('/user')

        }
        catch (err){
            console.log(err);

            setErrorz(err?.response?.data?.errorz)
            setIsLoading(true);
            setMsgError("periksa inputan kembali")
        }
      }
    return(
        <div>
            <h1 className="text-xl text-purple-600">
                Tambah User
            </h1>
            <p className="text-red-700" > {MsgError}</p>
            <form
            onSubmit={handleSubmit}
            >
                <p >{errorz?.username?.[0]}</p>
                <Input 
                value={users.username} 
                label={"username"}
                name={'username'}
                onChange={handleChange}/>

                <Input 
                label={"name"}
                value={users.name}
                name={'name'}
                onChange={handleChange}/>

                <Input value={users.email} 
                label={"email"} 
                type="email"
                name={'email'}
                onChange={handleChange}
                />

                <Select
                 value={users.jenis_kelamin}
                 label={"jenis Kelamin"}
                 placeholder="jenis_kelamin"
                 name={'jenis_kelamin'}
                 onChange={handleChange}
                 >
                    <option>Pilih</option>
                    <option value={"laki-laki"}>Lelaki</option>
                    <option value={"perempuan"}>Perempuan</option>
                </Select>

                <Input 
                value={users.password}
                label={"password"}
                name={'password'}
                onChange={handleChange}
                />
                <Input 
                value={users.password_confirmation} 
                label={"konfirmasi password"}
                name={'password_confirmation'}
                onChange={handleChange}
                />
                <Button title={isLoading ? 'saving' : 'save'}/>
                <Link to="/user" className="px-4 text-white"> 
                <Button color="blue" title={"Back"}/>
                </Link>
            </form>
        </div>
    )
}