import React, { useRef } from "react";

export default function RefTutorial() {
  // const inputRef = useRef(null);
  const homeRef = useRef(null);
  const aboutRef = useRef(null);
  const topRef = useRef(null);

  // const onClick = () => {
  //   console.log("REF INPUT",inputRef.current);
  //   inputRef.current.focus();
  //   inputRef.current.value = "SHIN";
  //   inputRef.current.focus();
  //   // inputRef.current.type = "password";
  //   inputRef.current.placeholder = "COBA";
  //   inputRef.current.className = "purple-red-500";
  // };

  const scrollToSection = (ref) => {
    console.log(ref.current.offSetTop);
    window.scrollTo({
      top: ref.current.offSetTop,
      behavior: "smooth"
    })
  };
  const scrollToTop = (ref) => {
    console.log(ref.current.offSetTop);
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  }
  return (
    <div ref={topRef}>
      {/* <h1>Black SUN</h1>
      <input ref={inputRef} type={"text"} placeholder="Write down here" />
      <button onClick={onClick}>Change Name</button> */}

      <div className="space-x-5">
        <button 
        onClick={()=>{
          console.log(homeRef.current.offSetTop);
          scrollToSection(homeRef);
        }}>
          home
        </button>
        <button 
        onClick={()=>{
          scrollToSection(aboutRef);
        }}>
          about
        </button>
      </div>

      <div ref={homeRef} className="h-screen w-full bg-slate-400 pt-10">
        <h2 className="text-red-500 font-semibold">HOME</h2>
      </div>
      <div ref={aboutRef} className="h-screen w-full bg-stone-500 pt-10">
        <h2 className="text-blue-500 font-semibold">ABOUT</h2>
      </div>

      <button 
      onClick={()=> {
        scrollToTop(topRef);
      }}
      className="fixed bg-fuchsia-500 cursor-pointer z-10 bottom-2 right-5"
      >
        back to top
      </button>
    </div>
  );
}
