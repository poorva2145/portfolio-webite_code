const express = require('express')
const controllers = require('./personal_info.controllers')

const router = express.Router()


// /api/about
router
  .route('/')
  .get(controllers.getMany)
  .post(controllers.createOne)

// /api/about/:id
router
  .route('/:id')
  .delete(controllers.removeOne)

module.exports = router