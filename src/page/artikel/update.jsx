import React from "react";
import Input from "../../komponen/input";
import Button from "../../komponen/button";
import { useNavigate, useParams } from "react-router-dom";
import { createAllArtikel, detail, updateArtikel } from "../../API/artikel";
export default function UpdateArtikel() {
  const [payload, setPayload] = React.useState({
    judul: "",
    thumbnail: "",
    artikel: "",
    imagePreview: null,
  });
  const [isLoading, setIsLoading] = React.useState(false);
  let {slug} = useParams()
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
      const response = await updateArtikel (payload)
      let data = response.data
      if (data.status === "Fail") {
       return alert(data?.message)
      }
      alert("berhasil")
      console.log(response);
      return navigate("/artikel", {replace: true})
    } catch (err) {
      console.log(err);
    }
  }
  const getDetailHandle =  async() => {
    try {
      const response = await detail(slug) 
      console.log(response)
      const data = response.data.data
      setPayload((payload)=>{
        return{
          ...payload,
          id: data.id,
          judul: data.judul,
          tumbnail: data.thumbnail,
          artikel: data.artikel,
          imagePreview: data.thumbnail,
        }
      })
    } catch (err) {
      console.log(err);
    }
  }

  React.useEffect(()=>{
    getDetailHandle()
  }, [])

  return (
    <form onSubmit={handleSubmit}>
      <h1>EDIT ARTIKEL dengan dengan slug ( {slug} )</h1>
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
      <Button title={"perbaharui"} />
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



// import React from "react";
// import Input from "../../komponen/input";
// import Button from "../../komponen/button";
// import {useNavigate, Link, useParams} from 'react-router-dom'
// import { updateArtikel,detail } from "../../API/artikel";
// import Swal from 'sweetalert2';

// export default function UpdateArtikel() {
//     let navigate = useNavigate()
//     let {slug, id} = useParams()
//   const [isLoading, setIsLoading] = React.useState(false);
//   const [errorMessage, setErrorMessage] = React.useState('')
//   const [error, setError] = React.useState({})
//   const [Art, setArt] = React.useState({
//     slug:'',
//     judul:'',
//     thumbnail:'',
//     artikel:'',
//     imagePreview:null
//   });
//   const handleChange = (e) => {
//     setArt((Art) => {
//       return {
//         ...Art,
//         [e.target.name]: e.target.value,
//       };
//     });
//   };
//   const handleSubmit = async(e) => {
//     e.preventDefault()
//     console.log(Art);
//     try {
//         setIsLoading(true)
//         const response = await updateArtikel(id, Art)
//         // return navigate('/user')
//          console.log("response", response.data);
//          if (response.data.status === "Fail" ) {
//           Swal.fire({
//             icon: "error",
//             title: "Failed",
//             text: response.data.message
//           })
//          } else {
//           const Toast = Swal.mixin({
//             toast: true,
//             position: 'top-end',
//             showConfirmButton: false,
//             timer: 3000,
//             timerProgressBar: true,
//             didOpen: (toast) => {
//               toast.addEventListener('mouseenter', Swal.stopTimer)
//               toast.addEventListener('mouseleave', Swal.resumeTimer)
//             }
//           })
          
//           Toast.fire({
//             icon: 'success',
//             title: 'Updated'
//           })
//          }
//          return navigate('/artikel', {replace:true})
//     } catch (err) {
//         console.log(err);
//         setError(err?.response?.data?.errors)
//         Swal.fire({
//           icon: "error",
//           title: "Error!",
//           titleText: "Can't Update Article"
//         })
//     } finally {
//       setIsLoading(false)
//     }
//   }
//   const getDetailArticle = async() => {
//     try {
//         const response = await detail(slug,)
//         const dataArtikel = response.data.data
//         console.log(dataArtikel);
//         setArt(() => {
//             return{
//                 judul: dataArtikel?.judul,
//                 thumbnail: dataArtikel?.thumbnail,
//                 artikel: dataArtikel?.artikel
//             }
//         })
//     } catch (error) {
        
//     }
//   }
//   React.useEffect(() => {
//     getDetailArticle(id)
//   }, [])
  
//   console.log("error semua", error);
//   return (
//     <div>
//       <h1>Update Artikel dengan slug {slug}</h1>
//       {/* <p className="text-red-500">
//         {errorMessage}
//       </p> */}
//       <form onSubmit={handleSubmit}>
//       <p className="text-red-500">{error?.judul?.[0]}</p>
//         <Input 
//           value={Art.judul} 
//           label={"judul"} 
//           placeholder="judul" 
//           name={"judul"}
//           onChange={handleChange} 
//         />
//         <p className="text-red-500">{error?.thumbnail?.[0]}</p>
//         <Input 
//           value={Art?.file} 
//           label={"thumbnail"} 
//           placeholder="thumbnail" 
//           type='file'
//           name={"thumbnail"}
//           onChange={(e) => {
//             console.log(e.target.files[0]);
//             let file = e.target.files[0]
//             if (file.size > 2000000) {
//               return Swal.fire(
//                 'Your file is to Powerfull!!',
//                 'warning'
//               )
//             } if (file.type === 'image/png' ||
//                   file.type === 'image/jpeg' ||
//                   file.type === 'application/pdf'
//                 ) {
//               let reader = new FileReader()
//               reader.readAsDataURL(file)
//               reader.onloadend = () => {
//                 setArt((Art) => {
//                   return{
//                     ...Art,
//                     imagePreview : reader.result,
//                     thumbnail : file
//                   }})
//               }
//             } else {
//               return Swal.fire(
//                 'File not an Image or PDF!!',
//                 'error'
//               )
//             }
//           }} 
//         />
//         <p className="text-red-500">{error?.artikel?.[0]}</p>
//         <Input 
//           value={Art.artikel} 
//           label={"artikel"} 
//           placeholder="artikel" 
//           name={"artikel"}
//           onChange={handleChange} 
//         />
//         <img src={Art.thumbnail}  className="w-50 h-50"/>
//         <Button title={isLoading ? 'Saving Data' : 'Save'} />
//         <Link to={'/user'} className='ml-5'>
//           <Button title={'Back to user'}/>
//         </Link>
//         <Link to={'/artikel'} className='ml-5'>
//           <Button title={'Back to artikel'}/>
//         </Link>
//       </form>
//     </div>
//   );
// }


