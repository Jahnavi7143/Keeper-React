import React, { useState } from "react";
import Header from "./Header";
import Footer from "./Footer";
import Note from "./Note";
import CreateArea from "./CreateArea";

function App() {

    const date = new Date();
    var year = date.getFullYear();

    // const [newData , setNewData] = useState({
    //     title : "",
    //     content : ""
    // })

    const [notes , setNotes] = useState([]);

    function handleNewData(newdata){
        setNotes((previous) => {
            return (
                [...previous , newdata]
            );
        })
    }


    function deleteItem(id){
        console.log(id);
        setNotes((previous) => {
            return previous.filter((item , index) => {
                return index !== id;
            })
        })
    }

    return (
        <div>
            <Header />
            <CreateArea onAdd = {handleNewData} />
            {/* {notes.map((item,index) => {
                return (
                    <div className="note" key={index} >
                        <h1>{item.title}</h1>
                        <p>{item.content}</p>
                        <button onClick={() =>{
                            deleteItem(index);
                        }} >DELETE</button>
                    </div>
                );
            })} */}
            {notes.map((item,index) => {
                return (
                    <Note 
                        id={index}
                        key = {index}
                        title = {item.title}
                        content = {item.content}
                        onDelete={deleteItem}
                    />
                );
            })}
            
            <Footer />
        </div>
    );
}


//   return (
//     <div>
//       <Header />
//       <CreateArea />
//       <Note key={1} title="Note title" content="Note content" />
//       <Footer />
//     </div>
//   );

export default App;
