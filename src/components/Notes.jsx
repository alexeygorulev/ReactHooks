import React from 'react'

const Notes = ({ notes, onRemove }) => {

  return (
    <ul className='list-group'>
      {notes.map(notes => (
        <li
          className='list-group-item note'
          key={notes.id}
        >
          <div>
            <strong>{notes.title}</strong>
            <small>{notes.date}</small>
          </div>
          <button type='button' className='btn btn-outline-danger btn-sm' onClick={() => onRemove(notes.id)}>
            &times;
          </button>

        </li>
      ))}
    </ul>
  )
}

export default Notes
