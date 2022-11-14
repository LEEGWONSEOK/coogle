import express from 'express';

const router = express.Router({ mergeParams: true });

router.get('/', (req, res) => {
  res.send('users router');
});

router.get('/:id', (req, res) => {
  const { id } = req.params;
  res.send(`users router ${id}`);
});

export default router;