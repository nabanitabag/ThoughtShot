import React from "react";
import WbIncandescentIcon from "@material-ui/icons/WbIncandescent";
import DeleteIcon from "@material-ui/icons/Delete";

function Note(props) {
  function handleDelete() {
    props.onDelete(props.id);
  }

  function handleSave() {
    props.onSave(props.id);
  }

  //- Callback from the Note component to trigger a delete function.
  return (
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
  );
}

export default Note;
