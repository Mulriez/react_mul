import React from "react";

export default function Input({label, isError,textError, ...props}) {
    return (
        <div className='input'>
            <textarea  {...props} className='input-text' htmlFor={label} />
            {isError && <p className='error'>
                {textError}
            </p>}
        </div>
    )
}