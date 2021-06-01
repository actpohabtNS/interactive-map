import React from 'react'
import { Form } from 'react-bootstrap'
import Room from './Room'

const RoomList = ({ rooms, className, onItemMouseOver, onItemMouseOut, itemClassName }) => {
  return (
    <div className={`rooms-list ${className ? className : ""}`}>
      <Form className="py-4">
        <Form.Control as="input" placeholder="🔍 Пошук кімнат"></Form.Control>
      </Form>

      <div className="accordion" id="accordionPanelsStayOpenExample">
        {rooms.map(room => <Room
            room={room}
            key={room.id}
            className={itemClassName ? itemClassName(room) : ""}
            onMouseOver={onItemMouseOver}
            onMouseOut={onItemMouseOut}
          />
        )}              
      </div>
    </div>
  )
}

export default RoomList;