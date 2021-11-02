const Exercise = require("../models/Exercise")

exports.selectAllExercises = async (req,res) => {

    //Wyświetlenie wszystkich ćwiczeń
    const exercises = await Exercise.query();

    res.json(exercises);
}