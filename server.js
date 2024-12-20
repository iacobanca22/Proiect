const express = require('express');
const bodyParser = require('body-parser');
const dotenv = require('dotenv');
const sequelize = require('./database');
const Utilizator = require('./models/utilizator');
const LocParcare = require('./models/loc_parcare');
const Rezervare = require('./models/rezervare');

dotenv.config();
const app = express();
const port = process.env.PORT || 3000;

// Middleware pentru procesarea datelor JSON
app.use(bodyParser.json());

// Sincronizare cu baza de date
sequelize.sync()
  .then(() => console.log('Baza de date este sincronizată!'))
  .catch(err => console.error('Eroare la sincronizarea bazei de date:', err));

// Rute API

// Obține toți utilizatorii
app.get('/utilizatori', async (req, res) => {
  try {
    const utilizatori = await Utilizator.findAll();
    res.json(utilizatori);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

// Crează un utilizator
app.post('/utilizatori', async (req, res) => {
  try {
    const { nume, email, telefon } = req.body;
    const utilizator = await Utilizator.create({ nume, email, telefon });
    res.status(201).json(utilizator);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

// Obține toate locurile de parcare
app.get('/locuri', async (req, res) => {
  try {
    const locuri = await LocParcare.findAll();
    res.json(locuri);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

// Crează o rezervare
app.post('/rezervari', async (req, res) => {
  try {
    const { utilizator_id, loc_parcare_id, data_inceput, data_sfarsit } = req.body;
    const rezervare = await Rezervare.create({ utilizator_id, loc_parcare_id, data_inceput, data_sfarsit });
    res.status(201).json(rezervare);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

// Pornirea serverului
app.listen(port, () => {
  console.log(`Serverul rulează pe portul ${port}`);
});