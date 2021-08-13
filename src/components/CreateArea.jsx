import React, { useState } from "react";
import FilterDramaIcon from "@material-ui/icons/FilterDrama";
import Fab from "@material-ui/core/Fab";
import { Zoom } from "@material-ui/core";

function CreateArea(props) {
  //- Create a constant that keeps track of the title and content.
  const [note, setNote] = useState({
    title: "",
    content: ""
  });

  function handleChange(event) {
    const { name, value } = event.target;
    setNote((prevNote) => {
      return {
        ...prevNote,
        [name]: value
        //turns name var into actual value of name i.e title and content
      };
    });
  }

  //- Pass the new note back to the App through props.
  function submitNote(event) {
    props.onAdd(note);
    setNote({
      title: "",
      content: ""
    });
    //to stop refreshing after every click
    //also retaining the title and content values
    event.preventDefault();
  }

  return (
    <div>
      <form classname="create-note">
        <input
          name="title"
          onChange={handleChange}
          value={note.title}
          placeholder="Mood/Theme"
        />
        <textarea
          name="content"
          onChange={handleChange}
          value={note.content}
          placeholder="Take a screenshot of your thought..."
          rows="3"
        />
        <Zoom in={true}>
          <Fab onClick={submitNote}>
            <FilterDramaIcon />+
          </Fab>
        </Zoom>
      </form>
    </div>
  );
}

export default CreateArea;
