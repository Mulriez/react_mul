import React from "react";
import Input from "../../komponen/input";
import Button from "../../komponen/button";
import {useNavigate, Link, useParams} from 'react-router-dom'
import { updateArtikel,detail } from "../../API/artikel";
import Swal from 'sweetalert2';

export default function UpdateArtikel() {
    let navigate = useNavigate()
    let {slug, id} = useParams()
  const [isLoading, setIsLoading] = React.useState(false);
  const [errorMessage, setErrorMessage] = React.useState('')
  const [error, setError] = React.useState({})
  const [Art, setArt] = React.useState({
    slug:'',
    judul:'',
    thumbnail:'',
    artikel:'',
    imagePreview:null
  });
  const handleChange = (e) => {
    setArt((Art) => {
      return {
        ...Art,
        [e.target.name]: e.target.value,
      };
    });
  };
  const handleSubmit = async(e) => {
    e.preventDefault()
    console.log(Art);
    try {
        setIsLoading(true)
        const response = await updateArtikel(id, Art)
        // return navigate('/user')
         console.log("response", response.data);
         if (response.data.status === "Fail" ) {
          Swal.fire({
            icon: "error",
            title: "Failed",
            text: response.data.message
          })
         } else {
          const Toast = Swal.mixin({
            toast: true,
            position: 'top-end',
            showConfirmButton: false,
            timer: 3000,
            timerProgressBar: true,
            didOpen: (toast) => {
              toast.addEventListener('mouseenter', Swal.stopTimer)
              toast.addEventListener('mouseleave', Swal.resumeTimer)
            }
          })
          
          Toast.fire({
            icon: 'success',
            title: 'Updated'
          })
         }
         return navigate('/artikel', {replace:true})
    } catch (err) {
        console.log(err);
        setError(err?.response?.data?.errors)
        Swal.fire({
          icon: "error",
          title: "Error!",
          titleText: "Can't Update Article"
        })
    } finally {
      setIsLoading(false)
    }
  }
  const getDetailArticle = async() => {
    try {
        const response = await detail(slug,)
        const dataArtikel = response.data.data
        console.log(dataArtikel);
        setArt(() => {
            return{
                judul: dataArtikel?.judul,
                thumbnail: dataArtikel?.thumbnail,
                artikel: dataArtikel?.artikel
            }
        })
    } catch (error) {
        
    }
  }
  React.useEffect(() => {
    getDetailArticle(id)
  }, [])
  
  console.log("error semua", error);
  return (
    <div>
      <h1>Update Artikel dengan slug {slug}</h1>
      {/* <p className="text-red-500">
        {errorMessage}
      </p> */}
      <form onSubmit={handleSubmit}>
      <p className="text-red-500">{error?.judul?.[0]}</p>
        <Input 
          value={Art.judul} 
          label={"judul"} 
          placeholder="judul" 
          name={"judul"}
          onChange={handleChange} 
        />
        <p className="text-red-500">{error?.thumbnail?.[0]}</p>
        <Input 
          value={Art?.file} 
          label={"thumbnail"} 
          placeholder="thumbnail" 
          type='file'
          name={"thumbnail"}
          onChange={(e) => {
            console.log(e.target.files[0]);
            let file = e.target.files[0]
            if (file.size > 2000000) {
              return Swal.fire(
                'Your file is to Powerfull!!',
                'warning'
              )
            } if (file.type === 'image/png' ||
                  file.type === 'image/jpeg' ||
                  file.type === 'application/pdf'
                ) {
              let reader = new FileReader()
              reader.readAsDataURL(file)
              reader.onloadend = () => {
                setArt((Art) => {
                  return{
                    ...Art,
                    imagePreview : reader.result,
                    thumbnail : file
                  }})
              }
            } else {
              return Swal.fire(
                'File not an Image or PDF!!',
                'error'
              )
            }
          }} 
        />
        <p className="text-red-500">{error?.artikel?.[0]}</p>
        <Input 
          value={Art.artikel} 
          label={"artikel"} 
          placeholder="artikel" 
          name={"artikel"}
          onChange={handleChange} 
        />
        <img src={Art.thumbnail}  className="w-50 h-50"/>
        <Button title={isLoading ? 'Saving Data' : 'Save'} />
        <Link to={'/user'} className='ml-5'>
          <Button title={'Back to user'}/>
        </Link>
        <Link to={'/artikel'} className='ml-5'>
          <Button title={'Back to artikel'}/>
        </Link>
      </form>
    </div>
  );
}


