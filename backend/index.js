const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');
const fs = require('fs');
const path = require('path');

const app = express();
const PORT = process.env.PORT || 5001;

app.use(cors());
app.use(bodyParser.json());


const dbPath = path.join(__dirname, 'db.json');

function readDB() {
  const data = fs.readFileSync(dbPath, 'utf-8');
  return JSON.parse(data).reservations;
}

function writeDB(reservations) {
  fs.writeFileSync(dbPath, JSON.stringify({ reservations }, null, 2));
}

let reservations = readDB();

app.post('/reservations', (req, res) => {
  const newReservation = {
    id: reservations.length + 1,
    ...req.body
  };
  reservations.push(newReservation);
  writeDB(reservations);
  res.status(201).json(newReservation);
});

app.get('/reservations', (req, res) => {
  res.json(reservations);
});

app.get('/reservations/:id', (req, res) => {
  const reservation = reservations.find(r => r.id === parseInt(req.params.id));
  if (reservation) {
    res.json(reservation);
  } else {
    res.status(404).json({ message: "Reserva no encontrada" });
  }
});

app.put('/reservations/:id', (req, res) => {
  const reservation = reservations.find(r => r.id === parseInt(req.params.id));
  if (reservation) {
    Object.assign(reservation, req.body);
    writeDB(reservations);
    res.json(reservation);
  } else {
    res.status(404).json({ message: "Reserva no encontrada" });
  }
});

app.delete('/reservations/:id', (req, res) => {
  reservations = reservations.filter(r => r.id !== parseInt(req.params.id));
  writeDB(reservations);
  res.status(204).send();
});

app.get('/', (req, res) => {
  res.send('Servidor Express funcionando');
});

app.listen(PORT, () => {
  console.log(`Servidor corriendo en http://localhost:${PORT}`);
});
