const {Model} = require('objection')
const knex = require("../config/database")

Model.knex(knex);

class Exercise extends Model {
    static get tableName(){
        return "exercise"
    }
}

module.exports = Exercise