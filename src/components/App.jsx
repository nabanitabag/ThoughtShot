import React, { useState } from "react";
import Header from "./Header";
import Footer from "./Footer";
import Note from "./Note";
import CreateArea from "./CreateArea";

function App() {
  const [notes, setNotes] = useState([]);

  //- Add new note to an array.
  function addNote(newNote) {
    setNotes((prevNotes) => {
      return [...prevNotes, newNote];
    });
  }

  //- Use the filter function to filter out the item that needs deletion.
  function deleteNote(id) {
    //- Pass a id over to the Note component, pass it back to the App when deleting.
    setNotes((prevNotes) => {
      return prevNotes.filter((noteItem, idx) => {
        return idx !== id;
      });
    });
  }

  //- Take array and render seperate Note components for each item.
  return (
    <div>
      <Header />
      <CreateArea onAdd={addNote} />
      {notes.map((noteItem, index) => {
        return (
          <Note
            key={index}
            id={index}
            title={noteItem.title}
            content={noteItem.content}
            onDelete={deleteNote}
          />
        );
      })}
      <Footer />
    </div>
  );
}

export default App;
