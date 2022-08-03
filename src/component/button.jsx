import React from "react";

// export default function Button({ title, color = "red", onClick, name, id, disalbled = false, }) {
//     return (
//         <React.Fragment>
//             <button
//                 onClick={onClick}
//                 name={name}
//                 id={id}
//                 disabled={disalbled}
//                 style={{
//                     backgroundColor: color,
//                 }}
//                 className="btn"
//             >
//                 {title}</button>
//         </React.Fragment>
//     )
// }

export default function Button({ title, color = "red",disabled,...props}) {
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