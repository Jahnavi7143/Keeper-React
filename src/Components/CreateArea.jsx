import React , {useState} from "react";
import AddIcon from "@mui/icons-material/Add";
import { Fab } from "@mui/material";
import { Zoom } from "@mui/material";

function CreateArea(props){

    const [data , setData] = useState({
        title : "",
        content : ""
    })

    function handleData(event){
        const {name , value} = event.target;

        setData((previous) => {
            if(name === "input"){
                    return {
                        title : value ,
                        content : previous.content 
                    };
            }
            else if(name === "text"){
                return {
                    title : previous.title,
                    content : value 
                };
            }
        })
    }

    function submitNote(event){
        props.onAdd(data);
        event.preventDefault();
        setData({
            title : "",
            content : ""
        })
    }


    return (
        <div>
            <form>
                <input name="input" type="text" placeholder="Title" onChange={handleData} value={data.title} />
                <textarea name="text" type="text" placeholder="Take a note..." onChange={handleData} value={data.content} ></textarea>
                <button onClick={submitNote} >ADD</button>
            </form>
        </div>
    );
}

export default CreateArea;