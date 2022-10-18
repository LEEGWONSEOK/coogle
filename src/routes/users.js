// @ts-check

const express = require('express');

const router = express.Router({ mergeParams: true });

router.get('/', (req, res) => {
  res.send('users router');
});

router.get('/:id', (req, res) => {
  const { id } = req.params;
  console.log('is work?');
  res.send(`users router ${id}`);
});

module.exports = router;
