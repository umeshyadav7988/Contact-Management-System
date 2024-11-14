const express = require('express');
const bodyParser = require('body-parser');
const db = require('./db');
const app = express();

app.use(bodyParser.json());

app.post('/contacts', (req, res) => {
  const { firstName, lastName, email, phone, company, jobTitle } = req.body;
  const query = 'INSERT INTO contacts (firstName, lastName, email, phone, company, jobTitle) VALUES (?, ?, ?, ?, ?, ?)';
  db.query(query, [firstName, lastName, email, phone, company, jobTitle], (err) => {
    if (err) return res.status(400).json({ error: err.message });
    res.status(201).json({ message: 'Contact created' });
  });
});

app.get('/contacts', (req, res) => {
  const query = 'SELECT * FROM contacts';
  db.query(query, (err, results) => {
    if (err) return res.status(500).json({ error: err.message });
    res.json(results);
  });
});

app.put('/contacts/:id', (req, res) => {
  const { id } = req.params;
  const { firstName, lastName, email, phone, company, jobTitle } = req.body;
  const query = 'UPDATE contacts SET firstName=?, lastName=?, email=?, phone=?, company=?, jobTitle=? WHERE id=?';
  db.query(query, [firstName, lastName, email, phone, company, jobTitle, id], (err) => {
    if (err) return res.status(400).json({ error: err.message });
    res.json({ message: 'Contact updated' });
  });
});

app.delete('/contacts/:id', (req, res) => {
  const { id } = req.params;
  const query = 'DELETE FROM contacts WHERE id=?';
  db.query(query, [id], (err) => {
    if (err) return res.status(400).json({ error: err.message });
    res.json({ message: 'Contact deleted' });
  });
});

app.listen(3000, () => console.log('Server running on http://localhost:5000'));
