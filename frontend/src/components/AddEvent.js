import React, { useState } from 'react';

function AddEvent({ onAdd }) {
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');
  const [start_date, setStartDate] = useState('');
  const [end_date, setEndDate] = useState('');
  const [location, setLocation] = useState('');
  const [reminder, setReminder] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    const newEvent = {
      title,
      description,
      start_date,
      end_date,
      location,
      reminder,
    };
    onAdd(newEvent);
    setTitle('');
    setDescription('');
    setStartDate('');
    setEndDate('');
    setLocation('');
    setReminder('');
  };

  return (
    <div className="form-container">
      <h2>Add New Event</h2>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Event Title"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
        />
        <textarea
          placeholder="Description"
          value={description}
          onChange={(e) => setDescription(e.target.value)}
        />
        <input
          type="datetime-local"
          value={start_date}
          onChange={(e) => setStartDate(e.target.value)}
        />
        <input
          type="datetime-local"
          value={end_date}
          onChange={(e) => setEndDate(e.target.value)}
        />
        <input
          type="text"
          placeholder="Location"
          value={location}
          onChange={(e) => setLocation(e.target.value)}
        />
        <input
          type="text"
          placeholder="Reminder"
          value={reminder}
          onChange={(e) => setReminder(e.target.value)}
        />
        <button type="submit">Add Event</button>
      </form>
    </div>
  );
}

export default AddEvent;
