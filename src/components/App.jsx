import React ,{useState}from "react";
import Header from "./Header";
import Footer from "./Footer";
import Note from "./Note";
import CreateArea from "./CreateArea"

function App() {
  const [items,addItem]=useState([]);
  function addNote(newNote){
    addItem(prevValue =>{
     return [...prevValue,newNote]
    })
  }
  function deleteNote(id){
  addItem(prevItem => {
    return prevItem.filter((noteItem,index)=>{
      return index !==id;
    })
  })
  }
  return (
    <div>
    
    <Header /> 
    <CreateArea onAdd={addNote}/>
   { items.map((item,index) =>{
      return <Note key={index} id={index} title ={item.title} content={item.content} onDelete={deleteNote}/>
    })}
     
      <Footer /></div>
   
  );
}

export default App;
