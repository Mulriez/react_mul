import { useParams } from "react-router-dom";

export default function Detail() {
  let { id, nm } = useParams();
  return (
    <div>
      <p>I LOVE YOU mo roku ni iwanai</p>
      <p>
        The ID is {id} : {nm}
      </p>
    </div>
  );
}
