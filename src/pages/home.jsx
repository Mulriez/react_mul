import React from "react";
import { useNavigate } from "react-router-dom";

export default function Home() {
    const navigate = useNavigate()

  const [msg, setMsg] = React.useState("BELUM LOGIN");
  const handleLogin = () => {
    setMsg('Proses Login');
    return navigate("about", {replace: true});
  };
  return (
    <div>
      <p>Navigate Home</p>
      <p>{msg}</p>
      <button onClick={handleLogin}>Login</button>
    </div>
  );
}
