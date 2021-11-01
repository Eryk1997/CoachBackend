const {Model} = require("objection");
const knex = require("../config/database");
const TypeOfRole = require('./TypeOfRole')

Model.knex(knex);

class User extends Model {
    static get tableName() {
        return "users";
    }

    static relationMappings = {
        roles: {
            relation: Model.HasManyRelation,
            modelClass: TypeOfRole,
            join:{
                from: 'users.type_of_role_id',
                to: 'type_of_role.id'
            }
        }
    }
}

module.exports = User;
