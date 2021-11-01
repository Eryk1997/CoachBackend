const { Model } = require("objection")
const knex = require('../config/database')

Model.knex(knex);

class Pair extends Model {
    static get tableName() {
        return "pair"
    }
}

module.exports = Pair;