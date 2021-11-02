const {Model} = require('objection')
const knex = require('../config/database')

Model.knex(knex);

class Product extends Model { 
    static get tableName(){
        return "product"
    }
}

module.exports = Product