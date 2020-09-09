const { Router } = require('express');
const router = Router();
const user = require ('../data/user.json');

router.get('/user', (req, res) => {
  res.json(user)
  res.status(200)
})

module.exports = router;