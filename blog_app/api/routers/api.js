const router = require('express').Router()
const regc = require('../controllers/regcontroller')
const blogc = require('../controllers/blogcontroller')
const jwt = require('jsonwebtoken')
function handletoken(req, res, next) {
    if (jwt.verify(token, key)) {
        next()
    } else {
        res.send('You are not authorised. Login to view this')
    }
}



router.post('/reg', regc.register)
router.post('/logincheck', regc.logincheck)
router.post('/addblog/:username', blogc.addblog)
router.get('/allblogs', blogc.allblogs)
router.get('/myblogs/:username', blogc.myblogs)
router.delete('/deleteblog/:id', blogc.deleteblog)

module.exports = router