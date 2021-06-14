const crudControllers = require('../../utils/CRUD')
const Projects = require('./projects.model')

module.exports = crudControllers(Projects)