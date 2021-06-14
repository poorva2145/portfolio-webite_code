const crudControllers = require('../../utils/CRUD')
const Contacts = require('./contact.model')

module.exports = crudControllers(Contacts)