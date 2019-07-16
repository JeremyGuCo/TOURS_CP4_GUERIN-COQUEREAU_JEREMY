const express = require('express');
const router = express.Router();

const db = require('../db/conf');

const bodyParser = require('body-parser');

router.use(bodyParser.json());
router.use(bodyParser.urlencoded({
   extended: true
}));

// - En tant qu'utilisateur, je veux pouvoir réserver un spectacle

router.post('/bookings', (req, res) => {
   const formData = req.body;
   db.query('INSERT INTO bookings SET ?', formData, (err, results) => {
      if (err) {
         res.status(500).send("Erreur lors de la sauvegarde d'une nouvelle réservation");
         return
      }
      if (!results) {
         res.status(400).send();
         return;
      }
      db.query('SELECT * FROM bookings WHERE id = ?', results.insertId, (err, results) => {
         if (err) {
            res.status(500).send();
            return;
         }
         res.status(201).send(results[0]);
      });
   });
});

// - En tant qu'utilisateur, je veux pouvoir envoyer un message à l'administrateur

router.post('/messages', (req, res) => {
   const formData = req.body;
   db.query('INSERT INTO messages SET ?', formData, (err, results) => {
      if (err) {
         res.status(500).send("Erreur lors de l'enregistrement d'un nouveau message");
         return
      }
      if (!results) {
         res.status(400).send();
         return;
      }
      db.query('SELECT * FROM messages WHERE id = ?', results.insertId, (err, results) => {
         if (err) {
            res.status(500).send();
            return;
         }
         res.status(201).send(results[0]);
      });
   });
});

// - En tant qu'utilisateur, je veux pouvoir accéder à la liste des artistes

router.get('/artists', (req, res) => {
   const idPlaylist = req.params.id;
   db.query('SELECT * FROM artists', idPlaylist, (err, results) => {
      if (err) {
         res.status(500).send("Erreur lors de la récupération des artistes");
         return;
      }
      if (!results.length) {
         res.status(404).send("Aucun résultat");
         return;
      }
      res.status(200).json(results);
   });
});

// - En tant qu'administrateur, je veux pouvoir créer, modifier, supprimer la fiche d'un artiste

router.post('/artists', (req, res) => {
   const formData = req.body;
   db.query('INSERT INTO artists SET ?', formData, (err, results) => {
      if (err) {
         res.status(500).send("Erreur lors de l'enregistrement d'un nouvel artiste");
         return
      }
      if (!results) {
         res.status(400).send();
         return;
      }
      db.query('SELECT * FROM artists WHERE id = ?', results.insertId, (err, results) => {
         if (err) {
            res.status(500).send();
            return;
         }
         res.status(201).send(results[0]);
      });
   });
});


router.put('/artists/:id', (req, res) => {
   const id = req.params.id;
   const formData = req.body;
   db.query('UPDATE artists SET ? WHERE id = ?', [formData, id], (err, results) => {
      if (err) {
         res.status(500).send("Erreur lors de la modification d'un artiste");
         return;
      }
      db.query('SELECT * FROM artists WHERE id = ?', id, (err, results) => {
         if (err) {
            res.status(500).send();
            return;
         }
         res.status(200).send(results[0]);
      });
   });
});

router.delete('/artists/:id', (req, res) => {
   const id = req.params.id;
   db.query('DELETE FROM artists WHERE id = ? ', id, err => {
      if (err) {
         res.status(500).send("Erreur lors de la suppression d'un artiste");
         return;
      }
      res.status(201).send()
   })
})


// - En tant qu'administrateur, je veux pouvoir accéder aux réservations

router.get('/bookings', (req, res) => {
   const idPlaylist = req.params.id;
   db.query('SELECT * FROM bookings', idPlaylist, (err, results) => {
      if (err) {
         res.status(500).send("Erreur lors de la récupération des réservations");
         return;
      }
      if (!results.length) {
         res.status(404).send("Aucun résultat");
         return;
      }
      res.status(200).json(results);
   });
});

// - En tant qu'administrateur, je veux pouvoir accéder aux messages reçus

router.get('/messages', (req, res) => {
   const idPlaylist = req.params.id;
   db.query('SELECT * FROM messages', idPlaylist, (err, results) => {
      if (err) {
         res.status(500).send("Erreur lors de la récupération des messages");
         return;
      }
      if (!results.length) {
         res.status(404).send("Aucun résultat");
         return;
      }
      res.status(200).json(results);
   });
});

module.exports = router;