import React from 'react'

const ListItem = ({note}) => {
  return (
    <li>
        {note.body}
    </li>
  )
}

export default ListItem