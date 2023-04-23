import { useState } from "react";
import {nanoid} from 'nanoid';
const AddNote = ({notes , handleAddNote}) => {
    // const [newNote , setNewNote] = useState({});
    const [text , setText] = useState('');
    const [count , setCount] = useState(200);
    const characterLimit = 200;
    const handleChange = (e) => {
            if(characterLimit  - e.target.value.length >= 0){
            setText(e.target.value);
            }
    }
    const handleSave = () => {
        if(text.trim().length > 0){
            handleAddNote(text);
            setText('');
            setCount(200);
        }
    }
    return (
        <div className = "note new">
            <textarea rows="8" cols = "10" value = {text} placeholder="Type to add a note...." onChange = {handleChange}>

            </textarea>
            <div className="note-footer">
                <small>{(characterLimit - text.length)} remaining</small>
                <button className="save" type="submit" onClick = {handleSave}>Save</button>
            </div>
        </div>
    )
}

export default AddNote;