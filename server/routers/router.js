const express = require('express');
const os = require('os');
const router = express.Router();
const db = require('../db');

router.get('/getUsername', (req, res, next) => {
    res.send({ username: os.userInfo().username });
});

router.get('/getNews', (req, res) => {
    db.query("SELECT * FROM `news`", (err, rows) => {
      if (!err) {
        res.send(rows);
      } else {
        console.log(`query error: ${err.message}`);
        res.send(err);
      }
    });
});

module.exports = router;