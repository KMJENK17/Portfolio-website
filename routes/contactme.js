const express = require('express')

const router = express.Router()

router.get('/contactme', (req, res) => {
    res.render('contactme')
})

module.exports = router