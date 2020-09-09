const { Router } = require('express')
const router = Router()

router.get('/', (req, res) => {
  res.send('accede a la ruta "/"');
});

module.exports = router