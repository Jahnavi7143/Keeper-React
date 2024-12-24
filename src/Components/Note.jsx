import React from "react";
import DeleteIcon from "@mui/icons-material/Delete";

function Note(props){

    function handleClick(){
        props.onDelete(props.id);
    }

    return (
        <div className="note">
            <h1>{props.title}</h1>
            <p>{props.content}</p>
            <button onClick={handleClick} >DELETE</button>
        </div>
    );
}


// function Note(){
//     return (
//         <div>
//             {notes.map((x) => {
//                 return (
//                     <div className="note" >
//                         <h1>{x.title}</h1>
//                         <p>{x.content}</p>
//                     </div>
//                 );
//             })}
//         </div>
//     );
// }

export default Note;