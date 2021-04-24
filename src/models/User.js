const { Model } = require("objection");
const knex = require("../config/database");
const Pupil = require("./Pupil");

Model.knex(knex);

class User extends Model {
  static get tableName() {
    return "users";
  }
  static get relationMappings() {
    return {
      pupils: {
        relation: Pupil.HasManyRelation,
        modelClass: Pupil,
        join: {
          from: "users.id",
          to: "pupils.id_user",
        },
      },
    };
  }
}

module.exports = User;
