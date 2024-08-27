import React, { useState } from 'react';

const EventManagement = () => {
  // State to hold the list of events
  const [events, setEvents] = useState([]);
  const [eventName, setEventName] = useState('');
  const [eventDate, setEventDate] = useState('');

  // Handler to add an event
  const handleAddEvent = () => {
    if (eventName && eventDate) {
      const newEvent = {
        id: Date.now(),
        name: eventName,
        date: eventDate,
      };
      setEvents([...events, newEvent]);
      setEventName('');
      setEventDate('');
    }
  };

  // Handler to delete an event
  const handleDeleteEvent = (id) => {
    setEvents(events.filter((event) => event.id !== id));
  };

  return (
    <div>
      <h1>Event Management</h1>
      
      {/* Form to add a new event */}
      <div>
        <input
          type="text"
          placeholder="Event Name"
          value={eventName}
          onChange={(e) => setEventName(e.target.value)}
        />
        <input
          type="date"
          value={eventDate}
          onChange={(e) => setEventDate(e.target.value)}
        />
        <button onClick={handleAddEvent}>Add Event</button>
      </div>
      
      {/* Display list of events */}
      <div>
        <h2>Event List</h2>
        {events.length === 0 ? (
          <p>No events available</p>
        ) : (
          events.map((event) => (
            <div key={event.id} style={{ marginBottom: '10px' }}>
              <h3>{event.name}</h3>
              <p>{event.date}</p>
              <button onClick={() => handleDeleteEvent(event.id)}>Delete</button>
            </div>
          ))
        )}
      </div>
    </div>
  );
};

export default EventManagement;
