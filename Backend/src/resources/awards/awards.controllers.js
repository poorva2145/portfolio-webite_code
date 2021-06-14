const crudControllers = require('../../utils/CRUD')
const Awards = require('./awards.model')

module.exports = crudControllers(Awards)