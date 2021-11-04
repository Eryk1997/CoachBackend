const User = require('../models/User')

exports.selectAllTrainers = async (req, res) => {
    //Wyświetlanie wszystkich trenerów 
    const trainers = await User.query().where('type_of_role_id',1);
    res.json(trainers)
}