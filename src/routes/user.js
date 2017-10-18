const express = require('express')
const router = express.Router()
const userController = require('../controllers/user')
const asyncMiddleware = require('../../utils/asyncMiddleware')

router.get('/user', asyncMiddleware(userController.findAll))
router.get('/user/:id', asyncMiddleware(userController.find))
router.post('/user', asyncMiddleware(userController.create))
router.put('/user/:id', asyncMiddleware(userController.update))
router.delete('/user/:id', asyncMiddleware(userController.remove))

module.exports = router
