import { useParams, useNavigate, } from "react-router-dom";

export default function Detail() {
  let { id, nm } = useParams();
  let navigate = useNavigate();
  return (
    <div>
      <p
      className="mb-5 italic"
      >Autobots wage their battle to destroy the evil forces of Decepticon</p>
      <p>
        The ID is {id} : {nm}
      </p>
      <button
      className="mt-5"
      onClick={()=>{
        return navigate("/home",{replace:true})
      }}
      >Home
      </button>
    </div>
  );
}
