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
         res.status(500).json("Erreur lors de la sauvegarde d'une nouvelle réservation");
         return
      }
      if (!results) {
         res.status(400).json('Aucun résultat');
         return;
      }
      db.query('SELECT * FROM bookings WHERE id = ?', results.insertId, (err, results) => {
         if (err) {
            res.status(500).json('Erreur dans la récupération');
            return;
         }
         res.status(201).json(results[0]);
      });
   });
});

// - En tant qu'administrateur, je veux pouvoir accéder aux réservations

router.get('/bookings', (req, res) => {
   const idBooking = req.params.id;
   db.query('SELECT * FROM bookings', idBooking, (err, results) => {
      if (err) {
         res.status(500).json("Erreur lors de la récupération des réservations");
         return;
      }
      if (!results.length) {
         res.status(404).json("Aucun résultat");
         return;
      }
      res.status(200).json(results);
   });
});

// - En tant qu'utilisateur, je veux pouvoir accéder à la liste des artistes

router.get('/artists', (req, res) => {
   const idArtist = req.params.id;
   db.query('SELECT * FROM artists', idArtist, (err, results) => {
      if (err) {
         res.status(500).json("Erreur lors de la récupération des artistes");
         return;
      }
      if (!results.length) {
         res.status(404).json("Aucun résultat");
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
         res.status(500).json("Erreur lors de l'enregistrement d'un nouvel artiste");
         return
      }
      if (!results) {
         res.status(400).json();
         return;
      }
      db.query('SELECT * FROM artists WHERE id = ?', results.insertId, (err, results) => {
         if (err) {
            res.status(500).json('Erreur lors de la récupération de l\'artiste créé');
            return;
         }
         res.status(201).json(results[0]);
      });
   });
});

router.put('/artists/:id', (req, res) => {
   const id = req.params.id;
   const formData = req.body;
   db.query('UPDATE artists SET ? WHERE id = ?', [formData, id], (err, results) => {
      if (err) {
         res.status(500).json("Erreur lors de la modification d'un artiste");
         return;
      }
      db.query('SELECT * FROM artists WHERE id = ?', id, (err, results) => {
         if (err) {
            res.status(500).json('Erreur lors de la récupération de l\'artiste modifié');
            return;
         }
         res.status(200).json(results[0]);
      });
   });
});

router.delete('/artists/:id', (req, res) => {
   const id = req.params.id;
   db.query('DELETE FROM artists WHERE id = ? ', id, err => {
      if (err) {
         res.status(500).json("Erreur lors de la suppression d'un artiste");
         return;
      }
      res.status(201).json()
   })
})

// Créer un nouveau spectacle
router.post('/shows', (req, res) => {
   const formData = req.body;
   db.query('INSERT INTO shows SET ?', formData, (err, results) => {
      if (err) {
         res.status(500).json("Erreur lors de l'enregistrement d'un nouveau spectacle");
         return
      }
      if (!results) {
         res.status(400).json();
         return;
      }
      db.query('SELECT * FROM shows WHERE id = ?', results.insertId, (err, results) => {
         if (err) {
            res.status(500).json('Erreur lors de la récupération du spectacle créé');
            return;
         }
         res.status(201).json(results[0]);
      });
   });
});

// Récupérer tous les spectacles

router.get('/shows', (req, res) => {
   const idShow = req.params.id;
   db.query('SELECT * FROM shows', idShow, (err, results) => {
      if (err) {
         res.status(500).json("Erreur lors de la récupération des spectacles");
         return;
      }
      if (!results.length) {
         res.status(404).json("Aucun résultat");
         return;
      }
      res.status(200).json(results);
   });
});

router.delete('/shows/:id', (req, res) => {
   const id = req.params.id;
   db.query('DELETE FROM shows WHERE id = ? ', id, err => {
      if (err) {
         res.status(500).json("Erreur lors de la suppression d'un spectacle");
         return;
      }
      res.status(201).json()
   })
})

// Récupérer tous les artistes par spectacle

router.get('/shows/:id/artists', (req, res) => {
   const idShow = req.params.id;
   db.query('SELECT a.name, a.picture, a.skills FROM artists a JOIN show_artist sa ON sa.artist_id = a.id JOIN shows s on s.id = sa.show_id WHERE s.id = ?', idShow, (err, results) => {
      if (err) {
         res.status(500).json("Erreur lors de la récupération des artistes d'un spectacle");
         return;
      }
      if (!results.length) {
         res.status(404).json("Aucun résultat");
         return;
      }
      res.status(200).json(results);
   });
});

router.get('/shows/:id', (req, res) => {
   const idShow = req.params.id;
   db.query('SELECT * FROM shows  WHERE id = ?', idShow, (err, results) => {
      if (err) {
         res.status(500).json("Erreur lors de la récupération des spectacles");
         return;
      }
      if (!results.length) {
         res.status(404).json("Aucun résultat");
         return;
      }
      res.status(200).json(results);
   });
});

router.get('/shows/:id/bookings', (req, res) => {
   const idShow = req.params.id;
   db.query('SELECT * FROM bookings WHERE show_id = ?', idShow, (err, results) => {
      if (err) {
         res.status(500).json("Erreur lors de la récupération des réservations");
         return;
      }
      if (!results.length) {
         res.status(404).json("Aucun résultat");
         return;
      }
      res.status(200).json(results);
   });
});

// - En tant qu'utilisateur, je veux pouvoir envoyer un message à l'administrateur

router.post('/messages', (req, res) => {
   const formData = req.body;
   db.query('INSERT INTO messages SET ?', formData, (err, results) => {
      if (err) {
         res.status(500).json("Erreur lors de l'enregistrement d'un nouveau message");
         return
      }
      if (!results) {
         res.status(400).json('Aucun résultat');
         return;
      }
      db.query('SELECT * FROM messages WHERE id = ?', results.insertId, (err, results) => {
         if (err) {
            res.status(500).json();
            return;
         }
         res.status(201).json(results[0]);
      });
   });
});

// - En tant qu'administrateur, je veux pouvoir accéder aux messages reçus

router.get('/messages', (req, res) => {
   db.query('SELECT * FROM messages', (err, results) => {
      if (err) {
         res.status(500).json("Erreur lors de la récupération des messages");
         return;
      }
      if (!results.length) {
         res.status(404).json("Aucun résultat");
         return;
      }
      res.status(200).json(results);
   });
});

module.exports = router;