import React, { useState } from "react";
import AddRoundedIcon from '@material-ui/icons/AddRounded';
import Fab from '@material-ui/core/Fab';
import Zoom from '@material-ui/core/Zoom';

function CreateArea(props) {
const [isExpanded ,setExpanded] =useState(false);
function handleExpand(){
   setExpanded(true);
}
  const [note, setNote] = useState({
    title: "",
    content: ""
  });

  function handleChange(event) {
    const { name, value } = event.target;

    setNote(prevNote => {
      return {
        ...prevNote,
        [name]: value
      };
    });
  }

  function submitNote(event) {
    props.onAdd(note);
    setNote({
      title: "",
      content: ""
    });
    event.preventDefault();
  }

  return (
    <div>
      <form className="create-note">
      {isExpanded&&  <input
          name="title"
          onChange={handleChange}
          value={note.title}
          placeholder="Title"
        />}
       
        <textarea
         onClick={handleExpand}
          name="content"
          onChange={handleChange}
          value={note.content}
          placeholder="Take a note..."
          rows={isExpanded?"3":"1"}
        />
        <Zoom in={isExpanded}><Fab onClick={submitNote}><AddRoundedIcon /></Fab></Zoom>
        
        
      </form>
    </div>
  );
}

export default CreateArea;
