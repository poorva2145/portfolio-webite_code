const crudControllers = require('../../utils/CRUD')
const Blogs = require('./blog.model')

module.exports = crudControllers(Blogs)