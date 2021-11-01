const Pair = require("../models/Pair")
const User = require("../models/User")

exports.selectUsersByTrainerId = async (req, res) => {
    
    //Wyświetlenie wszystkich użytkowników danego trenera 
    //SELECT * FROM users join pair on pair.pupil_id = users.id where pair.trainer_id = 4
    //const users = await Pair.query().select('users.*').join('users','pair.pupil_id','users.id').where('pair.trainer_id = 2')
    // const users = await Pair.query().alias('p').where('p.trainer_id',4).join('users as u','u.id','p.pupil_id');
    const users = await User.query().select('u.id','u.name').alias('u').join('pair as p','p.pupil_id','u.id').where('p.trainer_id',req.params.id);

    res.json(users);
}