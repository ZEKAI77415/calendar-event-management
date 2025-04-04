import React, { useState, useEffect } from 'react';
import axios from 'axios';
import EventList from './components/EventList';
import AddEvent from './components/AddEvent';
import './App.css';

function App() {
  const [events, setEvents] = useState([]);

  useEffect(() => {
    axios.get('http://localhost:3000/events')
      .then(response => {
        setEvents(response.data);
      })
      .catch(error => console.log('Failed to fetch events data: ', error));
  }, []);

  const addEvent = (event) => {
    axios.post('http://localhost:3000/events', event)
      .then(response => {
        setEvents([...events, response.data]);
      })
      .catch(error => console.log('Failed to add event: ', error));
  };

  const handleDelete = (id) => {
    axios.delete(`http://localhost:3000/events/${id}`)
      .then(() => {
        const filteredEvents = events.filter(event => event.id !== id);
        setEvents(filteredEvents);
      })
      .catch(error => console.log('Failed to delete event: ', error));
  };

  return (
    <div className="App">
      <h1>Event Management</h1>
      <AddEvent onAdd={addEvent} />
      <EventList events={events} onDelete={handleDelete} />
    </div>
  );
}

export default App;
