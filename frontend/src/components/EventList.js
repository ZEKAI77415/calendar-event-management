import React from 'react';

function EventList({ events, onDelete }) {
  return (
    <div className="event-list-container">
      <h2>All Events</h2>
      <ul>
        {events.map(event => (
          <li key={event.id} className="event-item">
            <h3>{event.title}</h3>
            <p>{event.description}</p>
            <p>{event.start_date} - {event.end_date}</p>
            <p>{event.location}</p>
            <p>{event.reminder}</p>
            {/* Delete button */}
            <button onClick={() => onDelete(event.id)}>Delete</button>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default EventList;
