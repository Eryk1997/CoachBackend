const User = require("../models/User")

exports.selectPupilsByTrainerId = async (req, res) => {

    //Wyświetlenie wszystkich użytkowników danego trenera 
    //SELECT * FROM users join pair on pair.pupil_id = users.id where pair.trainer_id = 4
    const pupils = await User.query().select('u.id', 'u.name', 'u.surname', 'u.email', 'u.growth', 'u.weight', 'u.age').alias('u').join('pair as p', 'p.pupil_id', 'u.id').where('p.trainer_id', req.params.id);

    res.json(pupils);
}