import { useEffect, useState } from "react";
import {nanoid} from 'nanoid';
import NotesList from "./Components/NotesList";
import Search from "./Components/Search";
import Header from "./Components/Header";
function App() {
  const [notes , setNotes] = useState([]);

const [searchText , setSearchText] = useState(''); 
const [darkMode , setDarkMode]  = useState(false);

useEffect(() => {
  const savedNotes = JSON.parse(localStorage.getItem('react-notes-app-data'));
  console.log("From here: " , savedNotes);

  if(savedNotes){
    setNotes(savedNotes);
  }
} , [])

useEffect(()=>{
  localStorage.setItem('react-notes-app-data' , JSON.stringify(notes));
} , [notes])

  const handleAddNote = (text) => {
    const date = new Date();
    const newNote = {
      id:nanoid(),
      text:text,
      date:date.toLocaleDateString(),
    }
    const newList = [...notes , newNote];
    setNotes(newList);
  }
  const handleDeleteNote = (key) => {
    const newNotes = [];
    notes.map((note) => {
      if(note.id !== key){
        newNotes.push(note);
      }
    })
    setNotes(newNotes);
    // console.log(newNotes);
  }
  return (
    <div className= {`${darkMode && 'dark-mode'}`}> 
      <div className="container">
      <Header handleToggle = {setDarkMode}/>
      <Search handleSearchNote = {setSearchText}/>
      <NotesList 
        notes = {notes.filter((note) => note.text.toLowerCase().includes(searchText))} 
        handleAddNote = {handleAddNote} 
        handleDeleteNote = {handleDeleteNote}
      />
      </div>
    </div>

  );
}

export default App;
