const express = require('express')
const router = express.Router()
const userController = require('../controllers/user')
const asyncMiddleware = require('../../utils/asyncMiddleware')

const authenticate = require('../../middlewares/authenticate')
const authRole = require('../../middlewares/authRole')(['ADM', 'PROFESSOR', 'ALUNO'])

const middlewares = [authenticate, authRole]

router.get('/user', middlewares, asyncMiddleware(userController.findAll))
router.get('/user/:id', middlewares, asyncMiddleware(userController.find))
router.post('/user', asyncMiddleware(userController.create))
router.put('/user/:id', middlewares, asyncMiddleware(userController.update))
router.delete('/user/:id', middlewares, asyncMiddleware(userController.remove))

module.exports = router
