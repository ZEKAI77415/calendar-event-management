const express = require('express');
const app = express();
const mysql = require('mysql2');
const cors = require('cors');
const bodyParser = require('body-parser');

app.use(cors());
app.use(bodyParser.json());

const db = mysql.createConnection({
  host: 'localhost',
  user: 'admin_calendar',
  password: 'Password123!',
  database: 'calendar_db',
});

db.connect((err) => {
  if (err) {
    console.error('Database connection error:', err);
    return;
  }
  console.log('Connected to the database');
});

/**
 * @api {get} /events Get all events
 * @apiName GetEvents
 * @apiGroup Events
 *
 * @apiSuccess {Object[]} events List of events.
 * @apiSuccess {Number} events.id Event ID.
 * @apiSuccess {String} events.title Event title.
 * @apiSuccess {String} events.description Event description.
 * @apiSuccess {String} events.start_date Event start date.
 * @apiSuccess {String} events.end_date Event end date.
 * @apiSuccess {String} events.location Event location.
 * @apiSuccess {String} events.reminder Event reminder.
 * 
 * @apiError EventNotFound The events could not be found.
 */

app.get('/events', (req, res) => {
  db.query('SELECT * FROM events', (err, results) => {
    if (err) {
      return res.status(500).json({ message: 'Failed to fetch events', error: err });
    }
    res.json(results);
  });
});

/**
 * @api {post} /events Add a new event
 * @apiName AddEvent
 * @apiGroup Events
 *
 * @apiParam (Request Body) {String} title Title of the event.
 * @apiParam (Request Body) {String} description Description of the event.
 * @apiParam (Request Body) {String} start_date Start date of the event.
 * @apiParam (Request Body) {String} end_date End date of the event.
 * @apiParam (Request Body) {String} location Location of the event.
 * @apiParam (Request Body) {String} reminder Reminder information.
 *
 * @apiParamExample {json} Request-Example:
 * {
 *   "title": "Event Title",
 *   "description": "Event Description",
 *   "start_date": "2025-04-10",
 *   "end_date": "2025-04-10",
 *   "location": "Main Office",
 *   "reminder": "15 minutes before"
 * }
 *
 * @apiSuccess {Number} id ID of the created event.
 * @apiSuccess {String} title Title of the event.
 */

app.post('/events', (req, res) => {
  const { title, description, start_date, end_date, location, reminder } = req.body;
  const query = 'INSERT INTO events (title, description, start_date, end_date, location, reminder) VALUES (?, ?, ?, ?, ?, ?)';
  db.query(query, [title, description, start_date, end_date, location, reminder], (err, result) => {
    if (err) {
      return res.status(500).json({ message: 'Failed to add event', error: err });
    }
    res.status(201).json({
      id: result.insertId,
      title,
      description,
      start_date,
      end_date,
      location,
      reminder,
    });
  });
});

/**
 * @api {delete} /events/:id Delete an event
 * @apiName DeleteEvent
 * @apiGroup Events
 *
 * @apiParam {Number} id Event ID.
 *
 * @apiSuccess {String} message Success message.
 *
 * @apiError EventNotFound The event with the specified ID does not exist.
 */

app.delete('/events/:id', (req, res) => {
  const { id } = req.params;
  
  const query = 'DELETE FROM events WHERE id = ?';
  db.query(query, [id], (err, result) => {
    if (err) {
      return res.status(500).json({ message: 'Failed to delete event', error: err });
    }
    if (result.affectedRows === 0) {
      return res.status(404).json({ message: 'Event not found' });
    }
    res.json({ message: 'Event deleted successfully' });
  });
});

const PORT = 3000;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
