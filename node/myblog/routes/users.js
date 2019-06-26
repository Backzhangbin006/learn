const express = require('express');
const router = express.Router();

router.get('/:name', function(req,res) {
  res.render('users', {
    name: req.params.name,
    supplies: ['上文', '汤姆', '杰瑞']
  })
})

module.exports = router;