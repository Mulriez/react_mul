import { useParams } from "react-router-dom";

export default function Detail() {
  let { id, nm } = useParams();
  return (
    <div>
      <p>ギラギラ残酷な 赤石のライトアップ</p>
      <p>
        The ID is {id} {nm}
      </p>
    </div>
  );
}
