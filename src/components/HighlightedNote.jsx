import React from "react";
import DeleteIcon from "@material-ui/icons/Delete";

function HighlightedNote(props) {
  function handleDelete() {
    props.onDelete(props.id);
  }

  return (
    <div className="saved-note">
      <h1>{props.title}</h1>
      <p>{props.content}</p>
      <button onClick={handleDelete}>
        <DeleteIcon />
      </button>
    </div>
  );
}

export default HighlightedNote;
