import React, { useState } from "react";
import WbIncandescentIcon from "@material-ui/icons/WbIncandescent";
import DeleteIcon from "@material-ui/icons/Delete";

function Note(props) {
  const [isSaved, setSaved] = useState(false);

  function handleDelete() {
    props.onDelete(props.id);
  }

  function handleSave() {
    // setSaved(true);
    props.onSave(props.id);
  }

  //- Callback from the Note component to trigger a delete function.
  return !isSaved ? (
    <div className="note">
      <h1>{props.title}</h1>
      <p>{props.content}</p>
      <button onClick={handleSave}>
        <WbIncandescentIcon />
      </button>
      <button onClick={handleDelete}>
        <DeleteIcon />
      </button>
    </div>
  ) : (
    <div className="saved-note">
      <h1>{props.title}</h1>
      <p>{props.content}</p>
      <button onClick={handleDelete}>
        <DeleteIcon />
      </button>
    </div>
  );
}

export default Note;
