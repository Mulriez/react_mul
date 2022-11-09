import React, {useRef} from 'react';

export default function RefTutorial(){
const inputRef = useRef(null);
const onClick =() => {
console.log(inputRef.current.value);
inputRef.current.focus()
inputRef.current.value = "SHIN"
};
return(
  <div>
    <h1>Black SUN</h1>
    in
  </div>
)
}