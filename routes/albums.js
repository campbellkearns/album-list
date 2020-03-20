const express = require('express');
const router = express.Router();

const queries = require('../db/queries');

router.get('/', (req,res) => {
  queries.readAll()
    .then((data) => res.json(data));
})

module.exports = router;