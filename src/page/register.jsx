import { useNavigate,} from "react-router-dom" 

export default function Register(){
    let navigate = useNavigate();

    return(
        <div>
            Register Page
            <button 
            className="flex mt-3 text-red-500"
            onClick={()=>{
                return navigate(-1)
            }}>
                {""}
                Kembali ke Login
                </button>
        </div>
    )
}