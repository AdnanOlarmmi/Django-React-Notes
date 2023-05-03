import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';

const Notepage = () => {
    let { id } = useParams();
    let [note, setNote] = useState({})
    useEffect(() => {
        getNote();
    }, [])
    let getNote = async () => { 
        let response = await fetch(`/api/notes/${id}`)
        let data = await response.json()
        setNote(data)
    }

   

    let updateNote = async () => {
        await fetch(`/api/notes/${id}`, {
            method: 'PUT',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(note)
        })}
  return (
    <div>
        <h1>Note Page {id} </h1>
        <input value={note.body} onInput={(e) => {
          let body = e.target.value;
            setNote({
                ...note,
                body: body
            })

            console.log(note);
           updateNote()
        }
        }  />

    </div>
  )
}

export default Notepage;