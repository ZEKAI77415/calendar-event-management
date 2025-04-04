const express = require('express');
const sqlite3 = require('sqlite3').verbose();
const bodyParser = require('body-parser');

const app = express();
app.use(bodyParser.json());

const db = new sqlite3.Database('events.db');

db.serialize(() => {
  db.run(`CREATE TABLE IF NOT EXISTS events (
    id INTEGER PRIMARY KEY AUTOINCREMENT,
    title TEXT,
    description TEXT,
    date TEXT,
    location TEXT
  )`);

  db.run("DELETE FROM events");

  const stmt = db.prepare("INSERT INTO events (title, description, date, location) VALUES (?, ?, ?, ?)");
  for (let i = 1; i <= 20; i++) {
    const day = i < 10 ? '0' + i : i;
    stmt.run(
      `Event ${i}`,
      `This is the description for event ${i}.`,
      `2025-04-${day}`,
      `Location ${i}`
    );
  }
  stmt.finalize();
});


/**
 * @api {post} /events Create a new event
 * @apiName CreateEvent
 * @apiGroup Events
 *
 * @apiParam (Request Body) {String} title Title of the event.
 * @apiParam (Request Body) {String} [description] Description of the event.
 * @apiParam (Request Body) {String} date Date of the event (YYYY-MM-DD).
 * @apiParam (Request Body) {String} location Location of the event.
 *
 * @apiParamExample {json} Request-Example:
 * {
 *   "title": "Team Meeting",
 *   "description": "Discuss project milestones",
 *   "date": "2025-04-10",
 *   "location": "Conference Room"
 * }
 *
 * @apiSuccess {Number} id ID of the created event.
 * @apiSuccess {String} title Title of the event.
 */
app.post('/events', (req, res) => {
  const { title, description, date, location } = req.body;
  const stmt = db.prepare("INSERT INTO events (title, description, date, location) VALUES (?, ?, ?, ?)");
  stmt.run(title, description, date, location, function(err) {
    if (err) return res.status(500).json({ error: err.message });
    res.json({ id: this.lastID, title, description, date, location });
  });
  stmt.finalize();
});


/**
 * @api {get} /events Get all events
 * @apiName GetAllEvents
 * @apiGroup Events
 *
 * @apiSuccess {Object[]} events List of all events.
 */
app.get('/events', (req, res) => {
  db.all("SELECT * FROM events", (err, rows) => {
    if (err) return res.status(500).json({ error: err.message });
    res.json(rows);
  });
});


/**
 * @api {get} /events/:id Get a specific event
 * @apiName GetEvent
 * @apiGroup Events
 *
 * @apiParam {Number} id The unique ID of the event.
 *
 * @apiSuccess {Object} event Event details.
 */
app.get('/events/:id', (req, res) => {
  db.get("SELECT * FROM events WHERE id = ?", req.params.id, (err, row) => {
    if (err) return res.status(500).json({ error: err.message });
    res.json(row);
  });
});


/**
 * @api {put} /events/:id Update an event
 * @apiName UpdateEvent
 * @apiGroup Events
 *
 * @apiParam {Number} id The unique ID of the event.
 * @apiParam (Request Body) {String} [title] New title.
 * @apiParam (Request Body) {String} [description] New description.
 * @apiParam (Request Body) {String} [date] New date.
 * @apiParam (Request Body) {String} [location] New location.
 *
 * @apiSuccess {Object} event The updated event.
 */
app.put('/events/:id', (req, res) => {
  const { title, description, date, location } = req.body;
  db.run("UPDATE events SET title = COALESCE(?, title), description = COALESCE(?, description), date = COALESCE(?, date), location = COALESCE(?, location) WHERE id = ?",
    [title, description, date, location, req.params.id],
    function(err) {
      if (err) return res.status(500).json({ error: err.message });
      db.get("SELECT * FROM events WHERE id = ?", req.params.id, (err, row) => {
        if (err) return res.status(500).json({ error: err.message });
        res.json(row);
      });
    }
  );
});


/**
 * @api {delete} /events/:id Delete an event
 * @apiName DeleteEvent
 * @apiGroup Events
 *
 * @apiParam {Number} id The unique ID of the event.
 *
 * @apiSuccess {String} message Confirmation message.
 */
app.delete('/events/:id', (req, res) => {
  db.run("DELETE FROM events WHERE id = ?", req.params.id, function(err) {
    if (err) return res.status(500).json({ error: err.message });
    res.json({ message: "Event deleted successfully" });
  });
});


const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Task Manager API is running on port ${PORT}`);
});
