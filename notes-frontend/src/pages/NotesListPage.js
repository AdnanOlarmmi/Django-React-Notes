import React, {useState, useEffect} from 'react'
import ListItem from '../components/ListItem'
import { Link } from 'react-router-dom';
import deleteme from "../img/delete.png";


const NotesListPage = () => {
    let [notes, setNotes] = useState([])
    useEffect(() => {
        getNotes();
    }, [])

     let getNotes = async () => {
        let response = await fetch('/api/notes')
        let data = await response.json()
        setNotes(data)
    }
    const deleteNote = async (id) => {
        await fetch(`/api/notes/${id}`, {
            method: 'DELETE',
            headers: {
                'Content-Type': 'application/json'
            },
        })
        getNotes();
    }

    const addNote = async (body) => {
        await fetch(`/api/notes`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(body)
        })
        getNotes();
    }

    const [body, setbody] = useState('')
    
  return (
    <div>
        <h1>Notes List Page</h1>
        <ul>
            {notes.map((note) => {
                return <div key={note.id}><Link  to={`/note/${note.id}`}>
                <ListItem note={note} /> 
                </Link> 
                <img onClick={()=> {
                    deleteNote(note.id)
                }} src={deleteme} alt="delete" width="20px" height="20px" />
                </div>
            })}
        </ul>

        <form onSubmit={(e)=>{
            e.preventDefault();
            const body = e.target[0].value
            addNote({body});
            setbody('')
            
            
        }}>
            <input value={body} 
            onChange={(e) => {
                setbody(e.target.value)
            }}
            type="text" />
            <button type="submit">Add Note</button>
        </form>
    </div>
  )
}

export default NotesListPage