import express from 'express';
import user from './user';
import recipe from './recipes';
// import tip from './tip';
// import review from './review';

const router = express.Router({ mergeParams: true });

router.use('/users', user);
router.use('/recipes', recipe);
// router.use('/tips', tip);
// router.use('/reviews', review);

export default router;
