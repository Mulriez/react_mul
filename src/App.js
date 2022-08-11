import React from "react";

function App() {
  let [count, setCount] = React.useState(0);
  let [text, setText] = React.useState(0);
  let [message, setMessage] = React.useState(0);

  React.useEffect(() => {
    setMessage(message + 1);
    console.log("Run useEffect");
  }, [count, text]);

  let [isLoading, setIsLoading] = React.useState(true);
  React.useEffect(()=>{
    setTimeout(() => {
      setIsLoading(false)
    }, 1000);
  },[])

  if(isLoading){
    return <h1>Loading...</h1>
  }

  return (
    <React.Fragment>
      <h1>Belajar Use Effect</h1>
      <h3>{message === 10 ? 'ten':'not ten'}</h3>
      <h1>message: {message}</h1>
      <h1>Count: {count}</h1>
      <button
        onClick={() => {
          setCount(count + 1);
        }}
      >
        TAMBAH
      </button>
      <button
        onClick={() => {
          setText(!text);
        }}
      >
        CHANGE
      </button>
    </React.Fragment>
  );
}

export default App;
