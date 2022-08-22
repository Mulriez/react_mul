import React from "react";

export default function Button({ title, color = "blue",disabled,...props}) {
    return (
        <React.Fragment>
            <button
            disabled={disabled}
             {...props}
                style={{
                    backgroundColor: color,
                    opacity : disabled ? 0.5 : 1
                }}
                className="btn"
            >
                {title}</button>
        </React.Fragment>
    )
}