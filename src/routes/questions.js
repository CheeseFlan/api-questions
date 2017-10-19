const express = require('express')
const router = express.Router()
const questionController = require('../controllers/questions')
const asyncMiddleware = require('../../utils/asyncMiddleware')

const authenticate = require('../../middlewares/authenticate')
const authRole = require('../../middlewares/authRole')(['ADM', 'PROFESSOR', 'ALUNO'])

const middlewares = [authenticate, authRole]

router.get('/question', middlewares, asyncMiddleware(questionController.findAll))
router.get('/question/:id', middlewares, asyncMiddleware(questionController.findOne))
router.post('/question', middlewares, asyncMiddleware(questionController.create))
router.put('/question/:id', middlewares, asyncMiddleware(questionController.update))
router.delete('/question/:id', middlewares, asyncMiddleware(questionController.remove))

module.exports = router
