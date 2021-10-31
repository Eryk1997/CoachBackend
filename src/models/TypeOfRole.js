const {Model} = require("objection");
const knex = require("../config/database");

Model.knex(knex);

class TypeOfRole extends Model{
    static get tableName(){
        return "type_of_role";
    }

}

module.exports = TypeOfRole;