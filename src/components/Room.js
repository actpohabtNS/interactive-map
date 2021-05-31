import React from 'react'
import { FaUserAlt } from 'react-icons/fa'

const Room = ({ room }) => {
  let hasStaff = room.staff.length !== 0;
  return (
    <div className="accordion-item room-block mb-3 border-0 rounded bg-light" key={room.number}>
      <h2 className="accordion-header fs-0" id={`panelsStayOpen-heading${room.number}`}>
        <button className={`accordion-button collapsed pb-0 ${!hasStaff ? "no-expand" : ""}`} type="button" data-bs-toggle="collapse" data-bs-target={`#panelsStayOpen-collapse${room.number}`} aria-expanded="true" aria-controls={`panelsStayOpen-collapse${room.number}`}>
          {room.number}
        </button>
        <button className={`accordion-button f-room-desc collapsed pt-0 ${!hasStaff ? "no-expand" : ""}`} type="button" data-bs-toggle="collapse" data-bs-target={`#panelsStayOpen-collapse${room.number}`} aria-expanded="true" aria-controls={`panelsStayOpen-collapse${room.number}`}>
          <div className={`room-type room-${room.category}`}>{room.title}</div>
        </button>
      </h2>
      {
        hasStaff ?
        <div id={`panelsStayOpen-collapse${room.number}`} className="accordion-collapse collapse" aria-labelledby={`panelsStayOpen-heading${room.number}`}>
          <div className="accordion-body">
            <FaUserAlt size={14} className="text-secondary" /> Викладачі:
            { room.staff.map(person => <div key={person}>{person}</div>) }
          </div>
        </div>
        : null
      }
      
    </div>
  )
};

export default Room;