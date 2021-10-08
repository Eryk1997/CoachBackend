const {Model} = require("objection");
const knex = require("../config/database");

Model.knex(knex);

class Pupil extends Model {
    static get tableName() {
        return "pupils";
    }
}

module.exports = Pupil;
