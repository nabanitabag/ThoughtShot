import React, { useState } from "react";
import Header from "./Header";
import Footer from "./Footer";
import Note from "./Note";
import HighlightedNote from "./HighlightedNote";
import CreateArea from "./CreateArea";

function App() {
  const [notes, setNotes] = useState([]);
  const [savedNotes, setSavedNotes] = useState([]);

  //- Add a new note to the array.
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

  //- Use the filter function to filter out the item that needs deletion.
  function deleteSavedNote(id) {
    //- Pass a id over to the Note component, pass it back to the App when deleting.
    setSavedNotes((prevNotes) => {
      return prevNotes.filter((noteItem, idx) => {
        return idx !== id;
      });
    });
  }

  function saveNote(id) {
    // Save a good note using its id.
    setSavedNotes((prevNotes) => {
      const newSavedNote = notes.find((x, idx) => idx === id);
      // console.log(newSavedNote);
      return [...prevNotes, newSavedNote];
    });

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
            onSave={saveNote}
          />
        );
      })}
      {savedNotes.map((savednoteItem, index) => {
        return (
          <HighlightedNote
            key={index}
            id={index}
            title={savednoteItem.title}
            content={savednoteItem.content}
            onDelete={deleteSavedNote}
          />
        );
      })}
      <Footer />
    </div>
  );
}

export default App;
